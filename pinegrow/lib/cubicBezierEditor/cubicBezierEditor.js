var PgCubicBezier = function ($cubicBezierInput, options) {
    var _this = this;

    var $floatingContainer = null;
    var $container = null;

    var $canvas = null;
    var ctx = null;

    var $smallCanvas = null;
    var smallCtx = null;

    var $canvasIcon = null;

    var $staticPoint1 = null;
    var $staticPoint2 = null;
    var $movablePoint1 = null;
    var $movablePoint2 = null;
    var movablePointSize = null;
    var staticPointSize = null;
    var $builtInCurvesInput = null;

    var shown = false;

    var builtInFn = {
        'ease':             { x1: .25, y1: .1, x2: .25, y2: 1 },
        'linear':           { x1: 0, y1: 0, x2: 1, y2: 1 },
        'ease-in':          { x1: .42, y1: 0, x2: 1, y2: 1 },
        'ease-out':         { x1: 0, y1: 0, x2: .58, y2: 1 },
        'ease-in-out':      { x1: .42, y1: 0, x2: .58, y2: 1 },
        'easeInSine':       { x1: .47, y1: 0, x2: .745, y2: .715 },
        'easeOutSine':      { x1: .39, y1: .575, x2: .565, y2: 1 },
        'easeInOutSine':    { x1: .445, y1: .05, x2: .55, y2: .95 },
        'easeInQuad':       { x1: .55, y1: .085, x2: .68, y2: .53 },
        'easeOutQuad':      { x1: .25, y1: .46, x2: .45, y2: .94 },
        'easeInOutQuad':    { x1: .455, y1: .03, x2: .515, y2: .955 },
        'easeInCubic':      { x1: .55, y1: .055, x2: .675, y2: .19 },
        'easeOutCubic':     { x1: .215, y1: .61, x2: .355, y2: 1 },
        'easeInOutCubic':   { x1: .645, y1: .045, x2: .355, y2: 1 },
        'easeInQuart':      { x1: .895, y1: .03, x2: .685, y2: .22 },
        'easeOutQuart':     { x1: .165, y1: .84, x2: .44, y2: 1 },
        'easeInOutQuart':   { x1: .77, y1: 0, x2: .175, y2: 1 },
        'easeInQuint':      { x1: .755, y1: .05, x2: .855, y2: .06 },
        'easeOutQuint':     { x1: .23, y1: 1, x2: .32, y2: 1 },
        'easeInOutQuint':   { x1: .86, y1: 0, x2: .07, y2: 1 },
        'easeInExpo':       { x1: .95, y1: .05, x2: .795, y2: .035 },
        'easeOutExpo':      { x1: .19, y1: 1, x2: .22, y2: 1 },
        'easeInOutExpo':    { x1: 1, y1: 0, x2: 0, y2: 1 },
        'easeInCirc':       { x1: .6, y1: .04, x2: .98, y2: .335 },
        'easeOutCirc':      { x1: .075, y1: .82, x2: .165, y2: 1 },
        'easeInOutCirc':    { x1: .785, y1: .135, x2: .15, y2: .86 },
        'easeInBack':       { x1: 0, y1: 0, x2: 1, y2: 1 },
        'easeOutBack':      { x1: 0, y1: 0, x2: 1, y2: 1 },
        'easeInOutBack':    { x1: 0, y1: 0, x2: 1, y2: 1 },
        'easeInElastic':    { x1: 0, y1: 0, x2: 1, y2: 1 },
        'easeOutElastic':   { x1: 0, y1: 0, x2: 1, y2: 1 },
        'easeInOutElastic': { x1: 0, y1: 0, x2: 1, y2: 1 },
        'easeInBounce':     { x1: 0, y1: 0, x2: 1, y2: 1 },
        'easeOutBounce':    { x1: 0, y1: 0, x2: 1, y2: 1 },
        'easeInOutBounce':  { x1: 0, y1: 0, x2: 1, y2: 1 }
    }

    var fnNameAndParams = {
        name: null,
        params: null
    };

    var oldFnNameAndParams = {
        name: null,
        params: null
    };

    var oldFnName = null;

    var cubicValue = {
        x1: null, y1: null,
        x2: null, y2: null
    }

    var oldCubicValue = {
        x1: null, y1: null,
        x2: null, y2: null
    }

    var onHide = function () {
        $floatingContainer.hide();
        shown = false;
    }

    var onChooseClicked = function (e) {
        e.preventDefault();
        onHide();

        if (typeof options['change'] === "function") options['change'](fnNameAndParams);
        // $cubicBezierInput.trigger('change');
    }

    var onCancelClicked = function (e) {
        e.preventDefault();

        cubicValue.x1 = oldCubicValue.x1;
        cubicValue.y1 = oldCubicValue.y1;
        cubicValue.x2 = oldCubicValue.x2;
        cubicValue.y2 = oldCubicValue.y2;

        fnNameAndParams.name   = oldFnName;
        fnNameAndParams.params = cubicValue;

        _this.setValue(fnNameAndParams.name, fnNameAndParams.params);

        onHide();
        if (typeof options['hide'] === "function") options['hide'](fnNameAndParams);
    }

    var onShow = function (e) {
        e.preventDefault();

        var pos = $(this).offset();

        var $window = $(window);

        var top  = pos.top + $(this).height(),
            left = pos.left;

        $floatingContainer.css({
            display: 'block',
            position: 'fixed',
            padding: options['padding'],
            width: options['width'] + (2 * options['padding']) + 4,
            top: top,
            left: left
        });

        if (left + $floatingContainer.width() > $window.width()) {
            $floatingContainer.css({
                left: 'auto',
                right: 0
            });
        }

        if (top + $floatingContainer.height() > $window.height()) {
            top = pos.top - $floatingContainer.outerHeight();
            $floatingContainer.css({ top: top });
        }

        if (builtInFn[fnNameAndParams.name]) {
            fnNameAndParams.params = builtInFn[fnNameAndParams.name];
            cubicValue.x1 = fnNameAndParams.params.x1;
            cubicValue.y1 = fnNameAndParams.params.y1;
            cubicValue.x2 = fnNameAndParams.params.x2;
            cubicValue.y2 = fnNameAndParams.params.y2;
        }

        oldCubicValue.x1 = cubicValue.x1;
        oldCubicValue.y1 = cubicValue.y1;
        oldCubicValue.x2 = cubicValue.x2;
        oldCubicValue.y2 = cubicValue.y2;
        oldFnName = fnNameAndParams.name;

        _this.setValue(fnNameAndParams.name, fnNameAndParams.params);
        updatePointsPos(ctx);
        shown = true;
    }

    var updateCurve = function (currCTX, point1, point2, width, height, lineWidth, lineColor) {
        currCTX.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.lineWidth   = lineWidth;
        ctx.strokeStyle = lineColor;
        ctx.moveTo(0, height);

        ctx.bezierCurveTo(point1.x, point1.y, point2.x, point2.y, width, 0);
        ctx.stroke();
        ctx.closePath();
    }

    var updateCurveAndLines = function (currCTX, point1, point2) {
        updateCurve(currCTX, point1, point2, options['width'], options['height'], options['line-width'], options['line-color']);

        ctx.beginPath();
        ctx.strokeStyle = options['point-line-color'];
        ctx.lineWidth   = options['point-line-width'];
        ctx.moveTo(0, options['height']);

        var pointPosX1 = point1.x + movablePointSize,
            pointPosY1 = point1.y + movablePointSize,
            pointPosX2 = point2.x + movablePointSize,
            pointPosY2 = point2.y + movablePointSize;

        ctx.lineTo(pointPosX1, pointPosY1);
        ctx.stroke();

        ctx.moveTo(options['width'], 0);

        ctx.lineTo(pointPosX2, pointPosY2);
        ctx.stroke();
        ctx.closePath();

        cubicValue.x1 = (    pointPosX1 / options['width'] ).toFixed(2);
        cubicValue.y1 = (1 - pointPosY1 / options['height']).toFixed(2);
        cubicValue.x2 = (    pointPosX2 / options['width'] ).toFixed(2);
        cubicValue.y2 = (1 - pointPosY2 / options['height']).toFixed(2);
    }

    var updatePointsPos = function (currCTX) {
        var pointPos1 = $movablePoint1.position(),
            pointPos2 = $movablePoint2.position();

        updateCurveAndLines(currCTX,
            { x: pointPos1.left, y: pointPos1.top },
            { x: pointPos2.left, y: pointPos2.top });

        // $cubicBezierInput.val(cubicValue.x1 + ', ' + cubicValue.y1 + ', ' + cubicValue.x2 + ', ' + cubicValue.y2).trigger('input');
    }

    var createSmallElm = function () {
        $smallCanvas = $('<canvas width="15" height="15"></canvas>').appendTo($container);
        smallCtx     = $canvas.get(0).getContext("2d");

        var pointPos1 = $movablePoint1.position(),
            pointPos2 = $movablePoint2.position();

        updateCurve(smallCtx,
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            15, 15, 1, "black");
    }

    var createMainElms = function () {
        movablePointSize = options['movable-point-size'] / 2;
        staticPointSize  = options['static-point-size']  / 2;

        var $mainContainer = $('<div class="cubic-bezier-container"></div>').insertAfter($cubicBezierInput);

        $floatingContainer = $('<div class="floating-bezier-box" style="display:none"></div>').appendTo($mainContainer)

        $builtInCurvesInput = $('<div/>', { 'class' : 'built-in-curves' }).appendTo($floatingContainer);

        var pgAutoComplete = PgAutoComplete($builtInCurvesInput, {
            empty: true,
            getItems: function () {
                return options['ease-func'];
            }
        }, 'select');

        $container = $('<div class="cubic-bezier-editor"></div>').appendTo($floatingContainer);

        $canvas = $('<canvas width="' + options['width'] + '" height="' + options['height'] + '"></canvas>').appendTo($container);
        ctx     = $canvas.get(0).getContext("2d");

        $staticPoint1 = $('<span class="static-point"></span>').appendTo($container).css({
            width:  options['static-point-size'],
            height: options['static-point-size'],
            top:    -1 * staticPointSize,
            left:   options['width'] - staticPointSize
        });
        $staticPoint2 = $('<span class="static-point"></span>').appendTo($container).css({
            width:  options['static-point-size'],
            height: options['static-point-size'],
            top:    options['height'] - staticPointSize,
            left:   -1 * staticPointSize
        });

        $movablePoint1 = $('<span class="movable-point"></span>').appendTo($container).css({
            width:  options['movable-point-size'],
            height: options['movable-point-size'],
            background: options['point-color'],
            top: 0,
            left: 0,
        });
        $movablePoint2 = $('<span class="movable-point"></span>').appendTo($container).css({
            width:  options['movable-point-size'],
            height: options['movable-point-size'],
            background: options['point-color'],
            top: 0,
            left: 0,
        });

        $builtInCurvesInput.on('change', function (e) {
            fnNameAndParams.name = $builtInCurvesInput.val();

            if (fnNameAndParams.name == "cubic-bezier") {
                fnNameAndParams.params = cubicValue;
            }
            else {
                fnNameAndParams.params = null;
            }

            _this.setValue(fnNameAndParams.name, builtInFn[fnNameAndParams.name]);
            if (typeof options['change'] === "function") options['change'](fnNameAndParams);
        });

        $builtInCurvesInput.val(fnNameAndParams.name || options['defaultCurve']);

        var $controlContainer = $('<div class="bezier-control-container"></div>').appendTo($floatingContainer);

        var $cancelBtn = $('<button class="pg-button">Cancel</button>').appendTo($controlContainer).on('click', onCancelClicked);
        var $chooseBtn = $('<button class="pg-button primary">Choose</button>').appendTo($controlContainer).on('click', onChooseClicked);

        $canvasIcon = $('<span class="canvas-icon"><i class="icon icon-graph"></i></span>').appendTo($mainContainer).on('click', onShow);
    }

    var init = function () {
        options = options || {};

        options['ease-func'] = options['ease-func'] || [
            { 'key': 'ease',         'name': 'Ease'         },
            { 'key': 'ease-in',      'name': 'Ease in'      },
            { 'key': 'ease-out',     'name': 'Ease out'     },
            { 'key': 'ease-in-out',  'name': 'Ease in out'  },
            { 'key': 'cubic-bezier', 'name': 'Cubic bezier' }
        ];

        options['width']   = options['width']  || 400;
        options['height']  = options['height'] || 400;
        options['padding'] = options['padding'] || 10;

        options['line-width']  = options['line-width']  || 3;
        options['line-color']  = options['line-color']  || "black";
        options['point-color'] = options['point-color'] || "black";

        options['point-line-color'] = options['point-line-color'] || "gray";
        options['point-line-width'] = options['point-line-width'] || 2;

        options['movable-point-size'] = options['movable-point-size'] || 10;
        options['static-point-size']  = options['static-point-size']  || 10;

        options['value']         = options['value']         || {};
        options['value']['name'] = options['value']['name'] || '';

        options['value']['params']       = options['value']['params']       || {};
        options['value']['params']['x1'] = options['value']['params']['x1'] || 0;
        options['value']['params']['y1'] = options['value']['params']['y1'] || 0;
        options['value']['params']['x2'] = options['value']['params']['x2'] || 1;
        options['value']['params']['y2'] = options['value']['params']['y2'] || 1;

        options['defaultCurve'] = options['defaultCurve'] || 'ease';

        // events
        options['move']   = options['move']   || null;
        options['stop']   = options['stop']   || null;
        options['change'] = options['change'] || null;
        options['hide']   = options['hide']   || null;

        $cubicBezierInput.css('display', 'none');

        createMainElms();

        cubicValue.x1 = options['value']['params']['x1'];
        cubicValue.y1 = options['value']['params']['y1'];
        cubicValue.x2 = options['value']['params']['x2'];
        cubicValue.y2 = options['value']['params']['y2'];

        fnNameAndParams.name = options['value']['name'];
        fnNameAndParams.params = cubicValue;

        var $movablePoints = $movablePoint1.add($movablePoint2);
        $movablePoints.draggable({
            containment: 'parent',
            scroll: false,
            drag: function(event, ui) {
                if (fnNameAndParams.name != 'cubic-bezier') {
                    fnNameAndParams.name = 'cubic-bezier';
                    $builtInCurvesInput.val(fnNameAndParams.name);
                }
                updatePointsPos(ctx);
                fnNameAndParams.params = cubicValue;
                if (typeof options['move'] === "function") options['move'](fnNameAndParams);
            },
            stop: function() {
                updatePointsPos(ctx);
                if (typeof options['stop'] === "function") options['stop'](fnNameAndParams);
            }
        }).css('position', '');
    }
    init();


    this.getValue = function() {
        return fnNameAndParams;
    }

    this.setValue = function (name, params) {
        if (!params) {
            params = builtInFn[name] || null;
        }
        if (params) {
            var x1 = params.x1, y1 = params.y1,
                x2 = params.x2, y2 = params.y2;

            $movablePoint1.css({
                left: x1 * options['width'] - movablePointSize,
                top:  - (y1 - 1) * options['height'] - movablePointSize
            });

            $movablePoint2.css({
                left: x2 * options['width'] - movablePointSize,
                top:  - (y2 - 1) * options['height'] - movablePointSize
            });

            if (shown) {
                updatePointsPos(ctx);
            }
            else {
                cubicValue.x1 = x1; cubicValue.y1 = y1;
                cubicValue.x2 = x2; cubicValue.y2 = y2;
            }
        }

        if (name == "cubic-bezier") {
            fnNameAndParams.params = cubicValue;
        }
        else {
            fnNameAndParams.params = null;
        }

        fnNameAndParams.name = name;
        $builtInCurvesInput.val(fnNameAndParams.name);
        return fnNameAndParams;
    }

    this.remove = function () {
        _this = null;
    }
}