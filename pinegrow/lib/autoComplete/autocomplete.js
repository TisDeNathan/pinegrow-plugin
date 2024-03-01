// Get/set val in jQuery
var originalVal = $.fn.val;
$.fn.val = function(value) {
    var self = $(this);
    var pgm = self.data('pg-autocomplete');
    return (pgm instanceof PgMultiselect || pgm instanceof PgInput) ? pgm.val(value) : originalVal.apply(this, arguments);
}


var PgAutoCompleteUtilities = function () {
    var measureInputWidthHelper = null;
    var measureTextWidthCanvasContext = $('<canvas></canvas>').get(0).getContext("2d");

    measureTextWidthCanvasContext.font = '13px open_sansregular';

    return {
        measureInputWidth: function (str) {
            return measureTextWidthCanvasContext.measureText(str).width;
            /*
             if(!measureInputWidthHelper) {
             measureInputWidthHelper = $('<div class="measure-input-width-helper"></div>').appendTo($('body'));
             }
             measureInputWidthHelper.text(str);
             return measureInputWidthHelper.width();*/
        },
        getItem: function ($li, list, newItem) {
            var listId = parseInt($li.attr('data-index'));

            if (listId == -1 && newItem) {
                length++;
                return [ -1, {
                    key: $li.attr('data-key'),
                    name: $li.attr('data-key'),
                    id: length-1,
                }];
            }
            for (var i = 0; i < list.length; i++) {
                if (listId == list[i].id) {
                    return [i, list[i]];
                }
            }
        },
        returnToList: function (item, list) {
            var length = list.length;
            var added = false;
            if (length == 0) {
                list = [item];
                added = true;
            }
            else {
                for (var i = 0; i < length; i++) {
                    if (item.id < list[i].id) {
                        list.splice(i, 0, item);
                        added = true;
                        break;
                    }
                }
            }

            if (!added) {
                list.push(item);
            }
            return list;
        },
        resizeInputField: function($field, vLongInput) {
            var maxw = $field.data('start-width');
            if(!maxw) {
                maxw = $field.width();
                $field.data('start-width', maxw);
            }

            var text = $field.val();
            var inputWidth = parseInt(maxw);

            var scrollW = autoCompleteUtilities.measureInputWidth(text);
            if(scrollW > inputWidth || vLongInput) {
                if(scrollW > window.innerWidth * 0.7) {
                    scrollW = window.innerWidth * 0.7;
                }
                if(!$field.hasClass('big-field') && !vLongInput) {
                    $field.addClass('big-field');
                }
                var fw = 10;
                if (text == "") {
                    $field.css('width', fw + 'px');
                }
                else {
                    fw = (scrollW + 10 + 40);
                    $field.css('width', fw + 'px');
                    var pos = $field.offset();
                    var bw = $field.closest('body').width();
                    if(pos.left + fw > bw) {
                        $field.css({
                            left: 'auto',
                            right: 0
                        })
                    }
                }
            } else {
                $field.removeClass('big-field').css('width', '');
            }
        }
    }
}

var autoCompleteUtilities = PgAutoCompleteUtilities();

var PgAutoComplete = function ($container, options, mode) {
    if (options) {
        options['JQparent'] = options['JQparent'] ? options['JQparent'] : null;
        options['type'] = options['type'] ? options['type'] : null;
        options['multiple'] = options['multiple'] ||  false;
        options['empty'] = options['empty'] == false ? false : true;
        options['draggableList'] = options['draggableList'] == true ? true : false;
        options['newItem'] = options['newItem'] == true ? true : false;
        options['appendNewToList'] = typeof options['appendNewToList'] == "undefined" ? true : options['appendNewToList'];
        options['getItems'] = typeof options['getItems'] === "function" ? options['getItems'] : function () { return []; };
        options['getItemsAsync'] = typeof options['getItemsAsync'] === "function" ? options['getItemsAsync'] : null;
        options['placeholder'] = options['placeholder'] ? options['placeholder'] : '';
        options['width'] = options['width'] || 190;

        options['onDropdownOpen']  = options['onDropdownOpen']  || null;
        options['onDropdownClose'] = options['onDropdownClose'] || null;

        options['fillListOnOpen'] = options['fillListOnOpen'] || false;

        options['splitter'] = options['splitter'] || ',';
        options['openListOnFocus'] = options['openListOnFocus'] || false;

        if (options['selected']) {
            if (mode === "input") options['selected'] = [options['selected']];
            else options['selected'] = options['selected'].split(options['splitter']);
        }
        else {
            options['selected'] = [];
        }
    }
    else {
        options = {
            selected: []
        }
    }


    var autoComplete;
    if (mode === "select") {
        autoComplete = new PgMultiselect($container, options);
    }
    else {
        autoComplete = new PgInput($container, options);
    }

    autoComplete.mode = mode;
    $container.attr('data-autocomplete', true);
    $container.data('pg-autocomplete', autoComplete);

    autoComplete.onInputKeydown = function (e) {
        var code = e.keyCode || e.which;

        if (code == 9) {
            this.listBlured();
            this.pgDropdownList.close();
            var elm = null;

            if (e.shiftKey) elm = crsaGetPrevElement($container, '[data-autocomplete]');
            else            elm = crsaGetNextElement($container, '[data-autocomplete]');

            var willBeClicked = null;
            if (elm) willBeClicked = elm.firstElementChild;
            if (willBeClicked) {
                if (willBeClicked.nodeName === "INPUT") {
                    $(willBeClicked).select()
                }
                else {
                    willBeClicked.click();
                }
                e.preventDefault();
            }
        }
        else if (code == 13 || code == 38 || code == 40) {
            if (this.pgDropdownList.dropdownOpen) {
                e.preventDefault();
                return false;
            }
            // TODO find a better way
            // _this.$input.trigger('change');
        }
    }

    autoComplete.get$input = function() {
        return this.$input;
    }

    autoComplete.initDropdownList = function () {
        this.pgDropdownList.initDropdownList();
        this.pgDropdownList.updateList();
    }

    autoComplete.updateDropdownList = function (newList) {
        this.pgDropdownList.updateListContent(newList);
    }

    autoComplete.getDropdownList = function () {
        return this.pgDropdownList.list;
    }

    autoComplete.init();
    return autoComplete;
}

var PgMultiselect = function ($container, options) {
    if (!$container) return;

    this.chosen = [];
    this.options = options;

    this.$container = $container;
    this.$container.addClass(this.options['multiple'] ? 'multi-select' : 'single-select');
    this.$container.css('position', 'relative');

    this.$input = null;

    var _this = this;
    var $draggableDiv;

    // Local Vars
    var $chips = null;

    var mousePosY = null;
    var OffsetToChangeValue = 10;

    var defH = 23;
    var inputH = 22;
    var inputIconW = 25;

    var lastLeft = 2;
    var lastTop = 3;
    var textareaHeight = defH;
    var oldInputText = "";

    var fastDomTaskKey = pgGetFastdomTasks($container.get(0)).getUniqueKey();

    var $inputContainer = $('<div class="selector-container"></div>').appendTo(this.$container);
    $('<span class="autocomplete-placeholder">' + this.options['placeholder'] + '</span>').appendTo($inputContainer);

    if (this.options['draggableList']) {
        $draggableDiv = $('<div class="drag-drop-numeric"><i class="icon-up"></i><i class="icon-down"></i></div>').appendTo($inputContainer);
    }
    else {
        $('<i class="icon icon-down"></i><i class="icon icon-up" style="display:none;"></i>').appendTo($inputContainer);
    }

    this.$trgInput = $('<input class="trigger-change" spellcheck="false" autocapitalize="off" type="text" style="display:none;">').appendTo(this.$container);

    var resetAll = function (skip_set) {
        lastLeft = 2;
        lastTop = 3;
        textareaHeight = defH;
        if(!skip_set) {
            $inputContainer.css('height', textareaHeight);
        }
    }

    var updateChipsView = function (done) {
        var ulSource = [];
        var sourceId = 0;

        var length = _this.chosen.length;
        resetAll(true);
        var chipWidth = 'auto';
        var width = 0;

        var task = pgGetFastdomTasks($container.get(0)).create(fastDomTaskKey);

        task.measure(function() {
            var containerWidth = (($inputContainer.width() == 0) ? options['width'] : $inputContainer.width()) - 18;

            for (var i = 0; i < length; i++) {
                var item = _this.chosen[i];

                var name = (item.name + "").replace(/\n/g, ' '),
                    key =  (item.key + "").replace(/\n/g, ' ');
                var text = crsaGetSummaryStr(name, 2550, true);

                if (!_this.options['multiple']) {
                    lastLeft = 2;
                    lastTop = 2;
                    // chipWidth = (containerWidth - 4) + 'px';
                    chipWidth = '100%';
                } else {
                    width = autoCompleteUtilities.measureInputWidth(text) + 15;
                    if (width + lastLeft + 7 > containerWidth) {
                        lastTop += defH - 2;
                        lastLeft = 2;
                        textareaHeight += defH;
                    }
                }

                ulSource[sourceId++] = '<li data-index="' + item.id + '" data-key=\'' + key + '\'';
                // ulSource[sourceId++] = ' style="width:' + chipWidth + ';left:' + lastLeft + 'px;top:' + lastTop + 'px;"';
                ulSource[sourceId++] = ' style="width:' + chipWidth + ';"';
                ulSource[sourceId++] = ' aaatitle=\'' + crsaHtmlEncode(name) + '\'>' + crsaHtmlEncode(text);
                if (_this.options['multiple']) {
                    ulSource[sourceId++] = '<i class="icon icon-close"></i>';
                }
                ulSource[sourceId++] = '</li>';

                // lastLeft += width + 4;
            }

            task.mutate(function() {
                if (!$chips) {
                    $chips = $('<ul class="multi-select-chips ' + ( _this.options['multiple'] ? 'multiple' : 'single' ) + '"></ul>').appendTo(_this.$container);
                }

                $chips[0].innerHTML = ulSource.join('');

                if ($inputContainer.find('icon-up').is('visible') ||
                    $inputContainer.find('icon-down').is('visible')) {
                    $chips.css('width', $inputContainer.width() - inputIconW);
                }

                if (_this.options['multiple']) {
                    var chipsHeight = $chips.height();
                    if (chipsHeight > 0) {
                        $inputContainer.css('height', chipsHeight + 2);
                    }
                    else {
                        $inputContainer.css('height', inputH);
                    }
                }

                if (done) done();
            })
        })
    }

    var onInputKeydown = function (e) {
        var code = e.keyCode || e.which;

        if (code == 67 && (e.ctrlKey || e.metaKey)) {
            crsaCopyToClipboard(_this.getDataSelected(_this.chosen));
            _this.$input[0].focus();
        }
        else if (code == 86 && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            var text = pinegrow.getClipboard().getCurrentItem().code;
            _this.setVal(text, false);
            // _this.val(text).change();

            if (options['multiple']) {
                _this.pgDropdownList.updateList();
                _this.showEditableArea();
                // autoCompleteUtilities.resizeInputField(_this.$input);
            }
            return false;
        }
        else if (code == 88 && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            crsaCopyToClipboard(_this.getDataSelected(_this.chosen));
            _this.setVal('', false);
            // _this.val('').change();
            _this.pgDropdownList.updateList();
            _this.showEditableArea();
            _this.$input[0].focus();
            // autoCompleteUtilities.resizeInputField(_this.$input);
        }
        else {
            _this.onInputKeydown(e);
        }
    }

    var onInputKeyup = function (e) {
        var text = _this.$input.val();

        var code = e.keyCode || e.which;

        if (_this.options['multiple'] && code == 8 && oldInputText == "" && text == "" && _this.chosen.length > 0) {
            var index = _this.chosen.length - 1;
            var indexAnditem = [index, _this.chosen[index]];
            _this.itemRemoved(indexAnditem, function (callback) {
                _this.pgDropdownList.returnItemToList(indexAnditem);
                if (callback) callback();
            });
            // _this.showEditableArea();
        }
        else {
            autoCompleteUtilities.resizeInputField(_this.$input, true);
            _this.pgDropdownList.onInputKeyup(e);
            oldInputText = _this.$input.val();
        }
    }

    var onMouseDownOnDraggable = function(event) {
        mousePosY = event.clientY;
        var id = 0;
        // update chosen
        var chosen = _this.chosen;
        // var id = 0;
        if (chosen.length > 0) {
            id = chosen[0].id;
        } else {
            id = _this.options['drag_starting_index'] || 0;
        }

        var mouseMoved = false;

        var confirmItem = null;

        options.on_drag_list_start && options.on_drag_list_start();

        var onMouseMoveOnOverflow = function (event) {
            var newVal = mousePosY - event.clientY;
            if (newVal > OffsetToChangeValue || newVal < -OffsetToChangeValue) {
                mouseMoved = true;

                var by = 0;
                if (newVal < OffsetToChangeValue) by = 1;
                else                              by = -1;
                id = id + by;

                var itemId = id;
                if (id < 0) {
                    itemId = _this.pgDropdownList.getListLength() + id;
                }

                itemId = Math.abs(itemId);
                var newPairItem = _this.pgDropdownList.getIndexAndItemById(itemId);
                if (newPairItem) {
                    var newItem = confirmItem = newPairItem[1];
                    _this.itemSelected(newItem, false, 'input');
                    mousePosY = event.clientY;
                }
                else {
                    id = id - by;
                }
            }
        }

        var onMouseUpOnOverflow = function (event) {
            $overflowDiv[0].removeEventListener('mousemove', onMouseMoveOnOverflow, true);
            $overflowDiv[0].removeEventListener('mouseup', onMouseUpOnOverflow, true);

            $overflowDiv.remove();

            options.on_drag_list_end && options.on_drag_list_end();

            confirmItem && _this.itemSelected(confirmItem);

            // _this.trgInput.trigger('change');
            if (!mouseMoved) {
                $container.find('.selector-container').click();
            }

        }

        var $overflowDiv = $('<div class="overflow-draggable-div" style="position:fixed;width:100%;height:100%;top:0;left:0;opacity:0;cursor:row-resize;z-index:999;">').appendTo($inputContainer.closest('body'));

        $overflowDiv[0].addEventListener('mousemove', onMouseMoveOnOverflow, true);
        $overflowDiv[0].addEventListener('mouseup', onMouseUpOnOverflow, true);
    }

    var removeChipsClicked = function ($chip, done) {
        var indexAnditem = autoCompleteUtilities.getItem($chip, _this.chosen, _this.options['newItem']);
        _this.itemRemoved(indexAnditem, function(done_removed) {
            if (_this.canRemoveItemFromList()) {
                if (_this.pgDropdownList.dropdownOpen) _this.showEditableArea();
                _this.pgDropdownList.returnItemToList(indexAnditem);
            }
            if(done_removed) done_removed();
            if (done) done();
        });

        return indexAnditem[1];
    }

    var containerClicked = function (e) {
        e.preventDefault();
        var target = e.target;
        if (target.classList.contains("selector-container") ||
            target.classList.contains("multi-select-chips") ||
            target.classList.contains("autocomplete-placeholder") ||
            target.parentElement.classList.contains("multi-select-chips")) {
            if (_this.pgDropdownList.dropdownOpen) {
                _this.pgDropdownList.close();
                if (_this.$input) {
                    _this.$input.val('').hide();
                    _this.pgDropdownList.reset();
                }
            }
            else {
                _this.initInputJQObject();
                _this.showEditableArea();
                // autoCompleteUtilities.resizeInputField(_this.$input, true);
                _this.pgDropdownList.initDropdownList();
                _this.pgDropdownList.open();
                _this.pgDropdownList.updateList();
            }
        }
        else if (target.nodeName === "I") {
            var targetParent = target.parentElement;
            if (targetParent.nodeName === "LI" ) {
                e.preventDefault();
                removeChipsClicked($(targetParent));
                if (_this.$input) _this.$input[0].focus();
            }
            if (targetParent.classList.contains('selector-container')) {
                e.preventDefault();
                _this.initInputJQObject();
                _this.showEditableArea();
                // autoCompleteUtilities.resizeInputField(_this.$input, true);
                _this.pgDropdownList.openAllList();
            }
        }
    }

    var containerDblClicked = function (e) {
        e.preventDefault();
        var target = e.target;
        var targetParent = target.parentElement;
        if ((target.classList.contains("selector-container") ||
            targetParent.classList.contains("selector-container") ||
            targetParent.classList.contains("multi-select-chips")) &&
            !_this.options['multiple'] && _this.chosen.length != 0) {

            _this.initInputJQObject();
            _this.showEditableArea();
            if (_this.chosen.length > 0) {
                _this.$input.val(_this.chosen[0].name).select();
                autoCompleteUtilities.resizeInputField(_this.$input, true);
            }
            // autoCompleteUtilities.resizeInputField(_this.$input, true);
            if (!_this.pgDropdownList.dropdownOpen) {
                _this.pgDropdownList.initDropdownList();
                _this.pgDropdownList.open();
                _this.pgDropdownList.updateList();
            }
        }
        else if (targetParent.classList.contains("multi-select-chips") &&
            _this.options['multiple']) {
            var chip = removeChipsClicked($(target), function () {
                autoCompleteUtilities.resizeInputField(_this.$input);
            });
            _this.initInputJQObject();
            // _this.showEditableArea();
            _this.$input.val(chip.name).select();
            oldInputText = chip.name;
            // autoCompleteUtilities.resizeInputField(_this.$input);
        }
    }

    this.init = function () { }

    this.change = function () {
        this.$trgInput.change();
    }

    this.initInputJQObject = function (shown) {
        if (!_this.$input) {
            _this.$input = $('<input spellcheck="false" autocapitalize="off" class="' + ( _this.options['multiple'] ? 'multiple' : 'single' )
                + '" style="width:10px;display:' + (shown ? 'inline-block' : 'none' ) + '">').prependTo($inputContainer);


            _this.$input[0].addEventListener('keydown', onInputKeydown);
            _this.$input[0].addEventListener('keyup', onInputKeyup);

            _this.$input.on('change input', function () { return false; });
        }
    }

    this.showEditableArea = function () {
        if (!_this.$input) return;
        if (!_this.options['multiple']) resetAll();

        var o = $inputContainer.offset();
        var top = o.top - $(window).scrollTop();
        var left = o.left - $(window).scrollLeft();

        var lastChipPos = {
            left: lastLeft + left,
            top: lastTop + top
        };


        if (_this.options['multiple']) {
            var $chipsUl = $inputContainer.siblings('.multi-select-chips');
            var $lastLi = $chipsUl.children().last();
            if ($lastLi.length > 0) {
                var lastChipPos = $lastLi.offset();
                lastChipPos.left = lastChipPos.left + $lastLi.width() + 10;
            }
        }
        else {
            resetAll();
        }


        _this.$input.css({
            left: lastChipPos.left,
            top: lastChipPos.top,
            display: 'inline-block',
            position: 'fixed',
            width: '10px'
        });
        _this.$input.get(0).focus();
    }

    this.getInputContainer = function () { return $inputContainer; }

    this.canAddNewItem = function () { return _this.options['newItem']; }

    this.itemSelected = function (item, skipTrigger, event_type) {
        if (item == null || item.id == -1 || item.id == -2) return;

        if (typeof item.action === "function") {
            item.action();
            _this.pgDropdownList.close();
            return;
        }

        if (_this.options['multiple']) {
            _this.chosen.push(item);
        }
        else {
            if (_this.chosen.length > 0) _this.chosen[0].selected = false;
            _this.chosen = [item];
            _this.pgDropdownList.close();
        }

        if (item.key != "") item.selected = true;

        var chosenLength = this.chosen.length;
        if (chosenLength == 0 || (chosenLength == 1 && item.key == "")) {
            this.$container.removeClass('selected');
        }
        else {
            this.$container.addClass('selected');
        }

        _this.$trgInput.val(_this.getDataSelected(_this.chosen));
        updateChipsView(function () {
            if (_this.options['multiple']) {
                if (_this.$input) {
                    _this.showEditableArea();
                    // autoCompleteUtilities.resizeInputField(_this.$input);
                    _this.pgDropdownList.updateListPosition();
                }
            }

            if (_this.$input) {
                _this.$input.val('');
                oldInputText = "";

                if (!_this.options['multiple']) _this.$input.hide();
                // else autoCompleteUtilities.resizeInputField(_this.$input);
            }


        });

        if (!skipTrigger) {
            _this.$trgInput.trigger(event_type || 'change');
        }
    }

    this.itemRemoved = function (indexAnditem, done) {
        _this.chosen.splice(indexAnditem[0], 1);
        indexAnditem[1].selected = false;

        updateChipsView(function () {
            _this.showEditableArea();
            if (done) done(function () {
                _this.$trgInput.trigger('change');
            });
        });
        _this.$trgInput.val(_this.getDataSelected(_this.chosen));
    }

    this.canRemoveItemFromList = function () { return _this.options['multiple']; }

    this.listBlured = function () {
        if (this.$input) {
            if (this.$input.val().length > 0) {
                this.pgDropdownList.selectHoveredItem();
                this.$input.val('')
            }
            this.$input.hide();
        }
    }

    this.getDataSelected = function (chosen) {
        return chosen.map(function(item) { return item.key }).join(this.options['splitter']);
    }

    this.removeAllListners = function () {
        if (this.$input) {
            this.$input[0].removeEventListener('keydown', onInputKeydown);
            this.$input[0].removeEventListener('keyup', onInputKeyup);
            this.$input.off('change').off('input');
        }
        if (this.$trgInput) {
            this.$trgInput.off('change').off('input');
        }
        if ($container) {
            $container[0].removeEventListener("click", containerClicked);
            $container[0].removeEventListener("dblclick", containerDblClicked);
        }
        if (this.pgDropdownList) {
            this.pgDropdownList.removeAllListners();
        }
        if ($draggableDiv) {
            $draggableDiv[0].removeEventListener('mousedown', onMouseDownOnDraggable, true);
        }
    }

    this.remove = function (removeListners) {
        pgGetFastdomTasks($container.get(0)).stopAll(fastDomTaskKey);

        if (removeListners) this.removeAllListners();
        if (this.$input) this.$input.remove();
        this.$trgInput.remove();
        $inputContainer.remove();

        if ($chips) $chips.remove();
        this.chosen = this.options = options = null;

        if (this.pgDropdownList) {
            this.pgDropdownList.remove();
            this.pgDropdownList = null;
        }

        this.mode = null;
        _this = null;
    }

    this.change = function() { this.$trgInput.trigger('change'); }
    this.input = function() { this.$trgInput.trigger('input'); }

    this.setVal = function (args, skipTrigger) {
        var chosen = this.chosen;
        var list = this.pgDropdownList.getAllItemsList();

        if (this.options['multiple']) {
            var argsArr = [],
                tmpList = [];
            if (args != "") argsArr = jQuery.unique(args.split(this.options['splitter']));

            while (chosen.length != 0) {
                var item = chosen[0];
                list = autoCompleteUtilities.returnToList(item, list);
                chosen.splice(0, 1);
            }

            var length = list.length;
            for (var i = 0; i < length; i++) {
                var found = false;
                var item = list[i];
                for (var j = 0; j < argsArr.length; j++) {
                    var key = argsArr[j];
                    if (key == item.key) {
                        this.chosen.push(item);
                        argsArr.splice(j, 1);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    tmpList.push(item);
                }

            }

            if (this.canAddNewItem() && argsArr.length > 0) {
                while (argsArr.length != 0) {
                    var newVal = argsArr[0];
                    chosen.push({
                        id: length,
                        key: newVal,
                        name: newVal
                    });
                    argsArr.splice(0, 1);
                    length++;
                }
            }

            updateChipsView();
            this.$trgInput.val(this.getDataSelected(this.chosen));
            this.pgDropdownList.setList(tmpList);
        } else {
            var item = this.pgDropdownList.getItemByKey(args);

            if (item == null) {
                if (this.canAddNewItem()) {
                    item = {
                        id: list.length,
                        key: args,
                        name: args
                    };

                    if (!options['appendNewToList']) {
                        item.shadow = true;
                    }

                    if (!this.canRemoveItemFromList()) {
                        list.push(item);
                        this.pgDropdownList.setList(list);
                    }
                } else {
                    item = this.pgDropdownList.getItemByKey("");
                }
            }

            this.itemSelected(item, skipTrigger);
        }
    }

    this.val = function(args) {
        if (!args && typeof args != "undefined") args = "";
        var chosen = this.chosen;

        if (args != undefined) {
            this.setVal(args, true);
            return this;
        }
        return this.$trgInput.val();
    }

    if ($draggableDiv) {
        $draggableDiv[0].addEventListener('mousedown', onMouseDownOnDraggable, true);
    }

    $container[0].addEventListener("click", containerClicked);
    $container[0].addEventListener("dblclick", containerDblClicked);

    // Dropdown
    this.pgDropdownList = new PgDropdownList(this, false, null, options);
}

var PgInput = function ($container, options) {
    var _this = this;

    this.options = options;
    this.$container = $container;

    var no_auto_complete = options.no_auto_complete || false;

    if(options.textarea) {
        this.$input = $('<textarea/>', {
            rows: "1",
            class: "crsa-input crsa-input-text",
            placeholder: this.options['placeholder'], spellcheck: "false",
            autocapitalize: "off"
        }).appendTo($container);
    } else {
        this.$input = $('<input/>', {
            class: "crsa-input crsa-input-text",
            placeholder: this.options['placeholder'],
            spellcheck: "false",
            autocapitalize: "off"
        }).appendTo($container);
    }

    if(options.openListOnFocus && !options.noDropDownIcon) {
        $('<i class="icon icon-down crsa-icon-on-field"></i>').appendTo($container).on('mousedown', function(e) {
            e.preventDefault();
            toggleDropdown();
            return false;
        });

        this.$input.css({
            'padding-right': '20px'
        })
    }



    var onInputFocused = function () {
        _this.pgDropdownList.initDropdownList();

        //console.log('focus')


        if(_this.options.openListOnFocus) {
            if(!_this.pgDropdownList.dropdownOpen) {

                openDropdown();
            }
        }

        // var o = $container.offset();
        // var top = o.top - $(window).scrollTop() - 6;
        // var left = o.left - $(window).scrollLeft();
        // _this.$input.css({
        //     top: top + 'px',
        //     left: left + 'px',
        //     right: 'auto'
        // });

        // autoCompleteUtilities.resizeInputField(_this.$input);
    }

    var onInputBlured = function () {
        // _this.$input.css({
        //     width: '',
        //     left: '',
        //     top: '',
        //     right: ''
        // });

        // TODO find a better way
        // _this.$input.trigger('change');
    }

    var onInputClicked = function (e) {
        e.preventDefault();
        _this.$input[0].focus();
    }

    var onMouseDown = function (e) {

        if (_this.pgDropdownList.dropdownOpen) {
            var td = (new Date()).getTime() - (_this.listOpenedTime || 0);
            if(td > 10) {
                _this.pgDropdownList.close();

                //console.log('closing list after ' + td)
            }
        }
    }

    var openDropdown = function() {
        if (!_this.pgDropdownList.dropdownOpen) {
            _this.pgDropdownList.initDropdownList();
            _this.pgDropdownList.open();
            _this.pgDropdownList.updateList();

            _this.listOpenedTime = (new Date()).getTime();
        }
    }

    this.openDropDown = openDropdown;

    var toggleDropdown = function() {
        if (!_this.pgDropdownList.dropdownOpen) {
            openDropdown()
        } else {
            _this.pgDropdownList.close();
        }
    }

    this.toggleDropDown = toggleDropdown;

    this.closeDropdown = function() {
        if (_this.pgDropdownList.dropdownOpen) {
            _this.pgDropdownList.close();
        }
    }

    var onInputonDblClick = function (e) {
        if(e) e.preventDefault();
        // autoCompleteUtilities.resizeInputField(_this.$input);

        if(_this.options.openListOnFocus || true) {
            openDropdown();
        }
    }

    var onInputKeyup = function (e) {
        if(options.textarea) return;
        _this.pgDropdownList.onInputKeyup(e);
        // autoCompleteUtilities.resizeInputField(_this.$input);
    }

    var onInputKeydown = function (e) {
        if(options.textarea) return;
        var code = e.keyCode || e.which;

        if (code == 86 && (e.ctrlKey || e.metaKey)) {
            // autoCompleteUtilities.resizeInputField(_this.$input);
        }
        else {
            _this.onInputKeydown(e);
        }
    }

    var onParentScrolled = function () {
        if (_this.$input.hasClass('big-field') && _this.$input.is(':focus')) {
            _this.$input.blur();
        }
    }

    this.remove = function (removeListners) {
        if (removeListners) this.removeAllListners();
        if (this.$input) this.$input.remove();

        this.options = options = null;
        if (this.pgDropdownList) {
            this.pgDropdownList.remove();
            this.pgDropdownList = null;
        }

        this.mode = null;
        _this = null;
    }

    this.removeAllListners = function () {
        if (this.options['JQparent']) {
            this.options['JQparent'].off('scroll');
        }
        this.$input[0].removeEventListener('keydown', onInputKeydown);
        this.$input[0].removeEventListener('keyup', onInputKeyup);
        this.$input[0].removeEventListener('focus', onInputFocused);
        this.$input[0].removeEventListener('blur', onInputBlured);
        this.$input[0].removeEventListener('click', onInputClicked);
        this.$input[0].removeEventListener('mousedown', onMouseDown);
        this.$input[0].removeEventListener('dblclick', onInputonDblClick);
        this.$input.off('change').off('input');

        if (this.pgDropdownList) {
            this.pgDropdownList.removeAllListners();
        }
    }

    this.itemSelected = function(item, skipTrigger) {

        if (typeof item.action === "function") {
            item.action();
            _this.pgDropdownList.close();
            return;
        }

        _this.$input.val(item.key);
        if (!skipTrigger) _this.$input.change();
        _this.pgDropdownList.close();
    }

    this.getInputContainer = function () { return _this.$input; }
    this.canAddNewItem = function () { return true; }
    this.canRemoveItemFromList = function () { return false; }
    this.listBlured = function () { }

    this.init = function () {
        this.pgDropdownList = new PgDropdownList(this, no_auto_complete, this.$input, this.options);

        if(!options.noKeys) {
            this.$input[0].addEventListener('keydown', onInputKeydown);
            this.$input[0].addEventListener('keyup', onInputKeyup);
        }
    }

    this.change = function () {
        this.$input.change();
    }

    this.val = function (args) {
        if (typeof args == "undefined") {
            return _this.$input.val();
        }
        else {
            return _this.$input.val(args);
        }
    }

    this.$input[0].addEventListener('focus', onInputFocused);
    this.$input[0].addEventListener('blur', onInputBlured);
    this.$input[0].addEventListener('click', onInputClicked);
    this.$input[0].addEventListener('dblclick', onInputonDblClick);
    this.$input[0].addEventListener('mousedown', onMouseDown);

    if (this.options['JQparent']) {
        this.options['JQparent'].on('scroll', onParentScrolled);
    }

    return this;
}


var PgDropdownList = function (pgAutoComplete, no_auto_complete, $input, options) {

    var $list = null;
    var shownList = [];
    var oldInputText = "";
    var typingTimer;
    var doneTypingInterval = 150;
    var $container = pgAutoComplete.$container;

    var _this = this;

    this.list = null;

    this.dropdownOpen = false;
    this.pgAutoComplete = pgAutoComplete;

    var canHaveEmptyItem = function () {
        return (_this.pgAutoComplete.options['empty'] && !_this.pgAutoComplete.options['multiple']);
    }

    var addEmptyItem = function () {

        if (canHaveEmptyItem()) {
            _this.list.unshift({
                id: 0,
                name: "",
                key: "",
                html: null
            });
        }
    }

    var addIdsToList = function () {
        var listItemIndex = 0;
        if (canHaveEmptyItem()) {
            listItemIndex = 1;
        }

        _this.list = _this.list.map(function (item) {
            return {
                id: item.header ? -2 : listItemIndex++,
                header: item.header,
                key: item.key,
                name: item.name,
                action: item.action,
                html: item.html || null,
                noselect: item.noselect || false
            }
        });
    }

    var fillItemsOnList = function () {
        if (_this.list) return;
        _this.list = [];

        if (_this.pgAutoComplete.options.getItemsAsync) {
            _this.pgAutoComplete.options.getItemsAsync(function (list) {
                _this.updateListContent(list);
            })

            _this.list = [{
                id: -1,
                key: 'loading',
                name: 'Loading...'
            }];
        }
        else {
            _this.list = _this.pgAutoComplete.options.getItems();
            addIdsToList();
            addEmptyItem();
        }
    }

    var checkAndFillList = function () {
        if (_this.list == null || _this.pgAutoComplete.options['fillListOnOpen']) {
            _this.list = null;
            fillItemsOnList();
            if(_this.list) {
                var sel_key = null;
                if(pgAutoComplete.options.fillListOnOpen && pgAutoComplete.chosen && pgAutoComplete.chosen.length) {
                    sel_key = pgAutoComplete.chosen[0].key;
                    _this.list.forEach(function(i) {
                        if(sel_key === i.key) {
                            i.selected = true;
                        }
                    })
                }
            }
        }
    }

    this.updateListContent = function (newList) {
        this.list = newList;
        addIdsToList();
        addEmptyItem();
        this.initDropdownList();
        this.updateList();
    }

    var buildList = function (searchText, showEmptyForInput) {
        checkAndFillList();

        var ulSource = [];
        var sourceId = 0;

        var length = _this.list.length;
        shownList = [];

        var selected_value = null;
        if($input) selected_value = $input.val();

        for (var i = 0; i < length; i++) {
            var item = _this.list[i];
            if (item.shadow) continue;

            var is_selected = (selected_value === null && item.selected) || item.key === selected_value;

            if ((item.name + '').toLowerCase().indexOf((searchText + '').toLowerCase()) > -1) {
                var name = (item.name + "").replace(/\n/g, ' ');
                var key =   (item.key + "").replace(/\n/g, ' ');
                var text = item.html || crsaHtmlEncode(crsaGetSummaryStr(name, 2550, true));
                var classes = (is_selected ? 'item-selected ' : '') +
                    (item.id == -1 ? 'loading ' : '') +
                    (typeof item.action === "function" ? 'action-item ' : '') +
                    (item.header == true ? 'header-item ' : '');

                ulSource[sourceId++] = '<li data-index="' + item.id + '" aaatitle=\'' + crsaGetSummaryStr(name) + '\' data-key=\'' + crsaHtmlEncode(key) + '\' class="' + classes + '">';
                if (!item.header) {
                    ulSource[sourceId++] = '<i class="checkicon icon-' + (is_selected ? 'check' : 'empty') + '"></i>';
                }
                ulSource[sourceId++] = text + '</li>';
                shownList.push(item);
            }
        }

        $list[0].innerHTML = ulSource.join('');
        $list.animate({ scrollTop: 0 }, 0);

        var shownListLength = shownList.length;
        if (shownListLength == 1 && shownList[0].key == "")  {
            $container.addClass('no-items').removeClass('all-items');
            $list.addClass('no-items').removeClass('all-items');
        }
        else if (shownListLength == length) {
            $container.addClass('all-items').removeClass('no-items');
            $list.removeClass('no-items').addClass('all-items');
        }
        else {
            $container.removeClass('all-items');
            $list.removeClass('all-items');
            if (shownListLength == 0) {
                $container.addClass('no-items');
                $list.addClass('no-items');
            }
            else {
                $container.removeClass('no-items');
                $list.removeClass('no-items');
            }
        }

        if (!_this.pgAutoComplete.options['multiple']) {
            var $selectedItem = $list.find('> .item-selected');
            if ($selectedItem && $selectedItem.length > 0) {
                $list.animate({ scrollTop: $selectedItem.position().top + $list.scrollTop() }, 0);
            }
            else {
                if ($container.hasClass('single-select') && _this.pgAutoComplete.options['empty']) {
                    $selectedItem = $list.find(' > li:first-child');
                    if ($selectedItem.data('index') != 0) $selectedItem = null;
                }
                else {
                    $selectedItem = $list.find(' > li[data-key=""]')
                }

                if ($selectedItem && $selectedItem.length > 0) {
                    $selectedItem.addClass('item-selected');
                    $selectedItem.find('> .icon-empty, > .icon-check').removeClass('icon-empty').addClass('icon-check');
                    $list.animate({ scrollTop: $selectedItem.position().top }, 0);
                }
            }
        }
    }

    var listItemSelected = function ($li) {
        var indexAnditem = autoCompleteUtilities.getItem($li, _this.list, _this.pgAutoComplete.options['newItem']);

        if(indexAnditem[1].noselect) return;

        _this.pgAutoComplete.itemSelected(indexAnditem[1]);

        if (_this == null) return;

        if (_this.pgAutoComplete.canRemoveItemFromList()) {
            _this.list.splice(indexAnditem[0], 1);
            buildList("");
            _this.updateListPosition();
        }
    }

    this.getListLength = function () {
        if (this.list) {
            return this.list.length;
        }
        else {
            return 0;
        }
    }

    this.openAllList = function () {
        checkAndFillList();
        if (!$list) this.initDropdownList();

        if (this.dropdownOpen && $container.hasClass('all-items')) {
            listBlured();
            this.close();
        }
        else {
            buildList("", true);
            this.open();
            this.updateListPosition();
        }
    }

    var getScrollTopValue = function ($item) {
        var itemHeight = $item.height();
        var itemTopInList = $item.offset().top - $list.offset().top;
        var listHeight = $list.height();
        if (itemTopInList + itemHeight > listHeight) {
            return itemTopInList + itemHeight - listHeight + 5;
        }
        else if (itemTopInList + itemHeight < 0) {
            return itemTopInList;
        }
        else {
            return null
        }
    }

    var onListItemMouseEnter = function (e) {
        if(options && options.on_list_item_highlighted) {
            var idx = e.target.getAttribute('data-index');
            if (_this.list && _this.list.length > idx) {
                var item = _this.list[idx];
                options.on_list_item_highlighted(item);
            }
        }
        //$list.find('> li.hover').removeClass('hover');
        //$(e.target).addClass('hover');
    }

    var onListItemMouseLeave = function (e) {
        //$(e.target).removeClass('hover');
        if(options && options.on_list_item_highlighted) {
            options.on_list_item_highlighted(null);
        }
    }

    var listBlured = function () {
        $container.removeClass('input-shown');
        _this.pgAutoComplete.listBlured();
        oldInputText = "";
    }

    var onParentClicked = function (e) {
        var target = e.target;
        var $li = $(target).closest('li');
        if ($li.parent().hasClass("multi-select-list") && _this.list) {
            e.preventDefault();
            listItemSelected($li);
        }
    }

    var docMousedown = function (e) {
        if(!_this) return;

        var isInputHidden = (_this.pgAutoComplete.$input && !_this.pgAutoComplete.$input.is(':hidden'));
        var isOverflowDiv = e.target.classList.contains('overflow-draggable-div');

        if ((_this.dropdownOpen || isInputHidden) &&
            $list && !$list.is(e.target) &&
            $list.has(e.target).length === 0 &&
            $container && !$container.is(e.target) && $container.has(e.target).length === 0 &&
            !isOverflowDiv) {
            listBlured();
            _this.close();
        }
    }

    var onParentScrolled = function () {
        if (_this.dropdownOpen || (_this.pgAutoComplete.$input && !_this.pgAutoComplete.$input.is(':hidden'))) {
            listBlured();
            _this.close();
        }
    }

    this.reset = function () {
        oldInputText = "";
    }

    this.getAllItemsList = function () {
        checkAndFillList();
        return _this.list;
    }

    this.setList = function (newList) {
        _this.list = newList;
    }

    this.initDropdownList = function () {
        if (!$list) {
            var minWidth = $container.width() + 2;
            $list = $('<ul style="top:0;min-width:' + minWidth + ';" class="multi-select-list"></ul>').appendTo($container.closest('body'));
            $list.on('mouseenter', '> li', onListItemMouseEnter);
            $list.on('mouseleave', '> li', onListItemMouseLeave);

            $list[0].addEventListener('click', onParentClicked);

        }
    }

    this.returnItemToList = function (indexAnditem) {
        _this.list = autoCompleteUtilities.returnToList(indexAnditem[1], _this.list);
        if (this.dropdownOpen) {
            buildList("");
            this.updateListPosition();
        }
    }

    this.removeItemFromList = function (indexAnditem) {
        _this.list.splice(indexAnditem[0], 1);
    }

    this.updateListPosition = function () {
        var $inputContainer = _this.pgAutoComplete.getInputContainer();
        var containerOffset = $inputContainer.offset();
        var containerHeight = parseInt($inputContainer.css('height'), 10);
        var containerWidth  = parseInt($inputContainer.css('width'), 10);

        var top = containerOffset.top + containerHeight;
        $list.css({ 'height': 'auto' });
        var height = $list.height();
        var w = $list.width();
        var winHeight = $(window).height();
        var winWidth = $(window).width();

        if(containerOffset.left + w > winWidth) {
            containerOffset.left = winWidth - w;
            if(containerOffset.left < 0) {
                containerOffset.left = 0;
                $list.css({
                    width: winWidth + 'px'
                })
                height = $list.height();
            }
        }

        if (height + top > winHeight) {
            var newTop = top - height - containerHeight;
            if (newTop < 0) {
                $container.removeClass('list-to-top');
                var listHeight = winHeight - top - 5;
                $list.css({
                    'top': top,
                    'height': listHeight,
                    'overflow-y': 'auto',
                    'min-width': containerWidth,
                    'left': containerOffset.left
                });
            }
            else {
                lastHeight = height;
                $container.addClass('list-to-top');
                $list.css({
                    'min-width': containerWidth,
                    'overflow-y': 'auto',
                    'top': newTop,
                    'left': containerOffset.left
                });
            }
        }
        else {
            $container.removeClass('list-to-top');
            $list.css({
                'min-width': containerWidth,
                'height': 'auto',
                'overflow-y': 'auto',
                'top': top,
                'left': containerOffset.left
            });
        }
    }

    this.onInputKeyup = function (e) {
        clearTimeout(typingTimer);
        var code = e.keyCode || e.which;

        if (code == 40) {
            e.preventDefault();
            _this.hoverNext();
        }
        else if (code == 38) {
            e.preventDefault();
            _this.hoverPrev();
        }
        else if (code == 13) {
            if (_this.dropdownOpen) {
                e.preventDefault();
                // _this.selectHoveredItem(_this.pgAutoComplete.mode != 'select');
                _this.selectHoveredItem();
                _this.pgAutoComplete.$input.submit();
                return false;
            }
        }
        else if (code == 27) {
            e.preventDefault();
            listBlured();
            _this.close();
        }
        else if (code == 9) {
            e.preventDefault();
        }
        else if(!no_auto_complete) {
            var text = _this.pgAutoComplete.$input.val();
            if (oldInputText != text) {
                typingTimer = setTimeout(function () {
                    if(_this) {
                        if (!_this.pgAutoComplete.$input.is(':focus')) {
                            _this.close();
                            oldInputText = "";
                        } else {
                            if (!_this.dropdownOpen) _this.open();
                            _this.updateList(text);
                            oldInputText = text;
                        }
                    }
                }, doneTypingInterval);
            }
        }
    }

    this.hoverNext = function () {
        var $next = null;
        var $hover = $list.find("> li.hover");
        if ($hover.length > 0) {
            $hover.removeClass('hover');
            $next = $hover.next();
            if ($next.length == 0) {
                $next = $list.find("> li:first-child");
            }
        }
        else {
            $next = $list.find("> li:first-child");
        }

        if ($next.length > 0) {
            var scrollTopValue = getScrollTopValue($next);
            if (scrollTopValue) $list.scrollTop($list.scrollTop() + scrollTopValue);
            $next.addClass('hover');

            if(options && options.on_list_item_highlighted) {
                var idx = $next.attr('data-index');
                if (this.list && this.list.length > idx) {
                    var item = this.list[idx];
                    options.on_list_item_highlighted(item);
                }
            }
        }
    }

    this.hoverPrev = function () {
        var $prev = null;
        var $hover = $list.find("> li.hover");
        if ($hover.length > 0) {
            $hover.removeClass('hover');
            $prev = $hover.prev();

            if ($prev.length == 0) {
                $prev = $list.find("> li:last-child");
            }
        }
        else {
            $prev = $list.find("> li:last-child");
        }

        if ($prev.length > 0) {
            var scrollTopValue = getScrollTopValue($prev);
            if (scrollTopValue) $list.scrollTop($list.scrollTop() + scrollTopValue);
            $prev.addClass('hover');

            if(options && options.on_list_item_highlighted) {
                var idx = $prev.attr('data-index');
                if (this.list && this.list.length > idx) {
                    var item = this.list[idx];
                    options.on_list_item_highlighted(item);
                }
            }
        }
    }

    this.selectHoveredItem = function (skipTrigger) {
        var $hover = $list.find("> li.hover");
        if ($hover.length == 0) {
            var canRemoveItem = _this.pgAutoComplete.canRemoveItemFromList();

            if (this.pgAutoComplete.canAddNewItem() && _this.list) {
                var text = _this.pgAutoComplete.$input.val();
                var length = _this.list.length;

                var found = false, indexAnditem = null;
                if (shownList.length > 0) {
                    for (var i = 0; i < shownList.length; i++) {
                        if (shownList[i].name == text || shownList[i].key == text) {
                            indexAnditem = this.getIndexAndItemById(shownList[i].id);
                            found = true;
                            break;
                        }
                    }
                }

                if (!found) {
                    if (text.length == 0) return;
                    if (canRemoveItem) length += _this.pgAutoComplete.chosen.length;

                    var obj = {
                        id: length,
                        key: text,
                        name: text
                    }

                    if (!options['appendNewToList']) {
                        obj.shadow = true;
                    }

                    indexAnditem = [null, obj];
                }

                _this.pgAutoComplete.itemSelected(indexAnditem[1], skipTrigger);

                if (canRemoveItem) {
                    if (found) this.removeItemFromList(indexAnditem);
                    this.updateList("");
                }
                else {
                    if (!found) _this.list.push(indexAnditem[1]);
                    this.close();
                }
            }
            else if (shownList) {
                var found = false;
                var indexAnditem;
                for (var i = 0; i < shownList.length; i++) {
                    var item = shownList[i];

                    var text = this.pgAutoComplete.$input.val().toLowerCase();
                    var shownListName = ('' + item.name).toLowerCase();
                    if (text == shownListName) {
                        indexAnditem = this.getIndexAndItemById(item.id);
                        _this.pgAutoComplete.itemSelected(indexAnditem[1]);
                        found = true;

                        break;
                    }
                }

                if (canRemoveItem) {
                    if (found) this.removeItemFromList(indexAnditem);
                    this.updateList("");
                }
            }
        }
        else {
            $hover[0].click();
        }
    }

    this.updateList = function (text) {
        text = text || "";
        buildList(text);
        this.updateListPosition();
    }

    this.getIndexAndItemById = function (id) {
        checkAndFillList();

        var length = _this.list.length;
        for (var i = 0; i < _this.list.length; i++) {
            if (id == _this.list[i].id) return [i, _this.list[i]];
        }
    }

    this.getItemByKey = function (key) {
        checkAndFillList();

        var length = _this.list.length;
        for (var i = 0; i < _this.list.length; i++) {
            var item = _this.list[i];
            if (key == item.key) return item;
        }
        return null;
    }

    this.remove = function () {
        if ($list) $list.remove();
        this.pgAutoComplete = null;

        _this.list = shownList = [];

        _this = null;
    }

    this.open = function () {
        $container.addClass('open');
        $list.addClass('open');
        this.dropdownOpen = true;
        if (this.pgAutoComplete.options['onDropdownOpen']) {
            this.pgAutoComplete.options['onDropdownOpen']($container, this);
        }
    }

    this.close = function () {
        if ($container.hasClass('open') || this.dropdownOpen) {
            $container.removeClass('open');
            $list.removeClass('open');
            this.dropdownOpen = false;
            if (this.pgAutoComplete.options['onDropdownClose']) {
                this.pgAutoComplete.options['onDropdownClose']($container);
            }
        }
    }



    this.removeAllListners = function () {
        if (this.pgAutoComplete.options['JQparent']) {
            this.pgAutoComplete.options['JQparent'].off('scroll', onParentScrolled);
        }
        if ($list) {
            $list.off('mouseenter', '> li');
            $list.off('mouseleave', '> li');
            $list[0].removeEventListener('click', onParentClicked);
        }

        //$container[0].removeEventListener('click', onParentClicked);
        //document.removeEventListener('mousedown', docMousedown);

        pgGetInternalWindows().forEach(function(win) {
            win.document.removeEventListener('mousedown', docMousedown);
        })

    }

    if (this.pgAutoComplete.options['JQparent']) {
        this.pgAutoComplete.options['JQparent']
            .off('scroll', onParentScrolled)
            .on('scroll', onParentScrolled);
    }

    //$container[0].removeEventListener('click', onParentClicked);
    //$container[0].addEventListener('click', onParentClicked);

    //document.removeEventListener('mousedown', docMousedown);
    //document.addEventListener('mousedown', docMousedown);


    pgGetInternalWindows().forEach(function(win) {
        win.document.removeEventListener('mousedown', docMousedown);
        win.document.addEventListener('mousedown', docMousedown);
    })

    pinegrow.addEventHandler('on_new_window_registered', function (pagenull, win) {
        win.window.document.removeEventListener('mousedown', docMousedown);
        win.window.document.addEventListener('mousedown', docMousedown);
        if ($list) {
            $list.remove();
            $list = null;
        }
    });

    pinegrow.addEventHandler('on_window_before_close', function (pagenull, win) {
        win.window.document.removeEventListener('mousedown', docMousedown);

        if ($list) {
            $list.remove();
            $list = null;
        }
    });
}