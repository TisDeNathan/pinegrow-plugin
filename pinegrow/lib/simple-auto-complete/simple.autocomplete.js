var SimpleAutoComplete = function ($el, options) {
    var oldSimpleAutoComplete = $el.data('simple-autocomplete');
    if (oldSimpleAutoComplete) oldSimpleAutoComplete.destroy();

    options = options || {};
    var focus = options.focus || null;
    var source = options.source || null;
    var select = options.select || null;
    var $container = options.appendTo || $(body);

    var _this = this;
    var pgPosition = null;

    var $ul = $('<ul class="simple-autocomplete simple-autocomplete-list"></ul>').appendTo($container);


    $el.addClass('simple-autocomplete-input');

    var elementSelected = function (e) {
        e.preventDefault();
        var $target = $(e.target);
        var $li = $target.closest('li');

        select(e, $li.data('text'), $el);
    }

    var elementBlur = function (e) {
        var $clUl = $(e.relatedTarget).closest('ul');
        if (!$clUl.hasClass('simple-autocomplete')) _this.destroy();
    }

    var keydownTriggered = function (e) {
        var $elm = $(this);
        var $li = $ul.find('> li.active');
        var code = e.keyCode || e.which;
        var setText = false;

        if ($ul.children().length > 0) {
            if (code == 40) {
                if ($li.length == 0) {
                    $li = $ul.find('> li').first();
                }
                else {
                    $li.removeClass('active');
                    $li = $li.next();
                }

                $li.addClass('active');
                setText = true;
            }
            else if (code == 38) {
                if ($li.length == 0) {
                    $li = $ul.find('> li').last();
                }
                else {
                    $li.removeClass('active');
                    $li = $li.prev();
                }

                $li.addClass('active');
                setText = true;
            }
        }
        if (code == 27 || code == 13 || code == 9) {
            _this.destroy();
        }

        var text = $elm.data('simple-autocomplete-old-text');
        if ($li && $li.length != 0) {
            text = $li.text();
        }

        if (setText) focus(e, text, $elm);
    }

    var keyupTriggered = function (e) {
        var $elm = $(this);
        var code = e.keyCode || e.which;

        if (code != 40 && code != 38) {
            $elm.data('simple-autocomplete-old-text', $elm.text());
            updateList($elm.data('list'), $elm);
        }
    }

    var updateList = function () {
        var ulText = "";
        $ul.hide();
        source(null, $el.text(), $el, function (values) {
            for (var i = 0; i < values.length; i++) {
                var value = values[i];
                ulText += '<li class="simple-autocomplete-item" data-text="' + value + '"><a href="#">' + value + '</a></li>';
            }

            $ul.html(ulText);
            $ul.css('position', 'fixed');

            if (ulText.length > 0) $ul.show();
            if (pgPosition) pgPosition.destroy();
            pgPosition = new PgPositionNextTo$El($ul, $el, null, null, 'down_top_left');
            $ul.css('height', 'auto');
        })
    }
    updateList();

    $ul.on('mousedown', 'li', elementSelected);
    $el.on('blur', elementBlur)
        .on('keydown', keydownTriggered)
        .on('keyup', keyupTriggered);


    this.close = function () {
        $ul.hide();
    }

    this.destroy = function () {
        $ul.off('mousedown', 'li', elementSelected);
        $el.off('blur', elementBlur)
            .off('keydown', keydownTriggered)
            .off('keyup', keyupTriggered);

        if (pgPosition) {
            pgPosition.destroy();
            pgPosition = null;
        }

        $ul.html("");
        $ul.detach();
        $ul.remove();

        _this = null;

        $el.removeClass('simple-autocomplete-input');
        $el.data('simple-autocomplete', null);
    }

    $el.data('simple-autocomplete', this);
}
