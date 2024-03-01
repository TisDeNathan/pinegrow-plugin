(function($){var lm={"config":{},"container":{},"errors":{},"controls":{},"items":{},"utils":{}};

lm.utils.F = function () {};
	
lm.utils.extend = function( subClass, superClass ) {
	subClass.prototype = lm.utils.createObject( superClass.prototype );
	subClass.prototype.contructor = subClass;
};

lm.utils.createObject = function( prototype ) {
	if( typeof Object.create === 'function' ) {
		return Object.create( prototype );
	} else {
		lm.utils.F.prototype = prototype;
		return new lm.utils.F();
	}
};

lm.utils.objectKeys = function( object ) {
	var keys, key;

	if( typeof Object.keys === 'function' ) {
		return Object.keys( object );
	} else {
		keys = [];
		for( key in object ) {
			keys.push( key );
		}
		return keys;
	}
};

lm.utils.getQueryStringParam = function( param ) {
	if( !window.location.search ) {
		return null;
	}

	var keyValuePairs = window.location.search.substr( 1 ).split( '&' ),
		params = {},
		pair,
		i;

	for( i = 0; i < keyValuePairs.length; i++ ) {
		pair = keyValuePairs[ i ].split( '=' );
		params[ pair[ 0 ] ] = pair[ 1 ];
	}

	return params[ param ] || null;
};

lm.utils.copy = function( target, source ) {
	for( var key in source ) {
		target[ key ] = source[ key ];
	}
	return target;
};

/**
 * This is based on Paul Irish's shim, but looks quite odd in comparison. Why?
 * Because 
 * a) it shouldn't affect the global requestAnimationFrame function
 * b) it shouldn't pass on the time that has passed
 *
 * @param   {Function} fn
 *
 * @returns {void}
 */
lm.utils.animFrame = function( fn ){
	return ( window.requestAnimationFrame     ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame    ||
	function( callback ){
		window.setTimeout(callback, 1000 / 60);
	})(function(){
		fn();
	});
};

lm.utils.indexOf = function( needle, haystack ) {
	if( !( haystack instanceof Array ) ) {
		throw new Error( 'Haystack is not an Array' );
	}
	
	if( haystack.indexOf ) {
		return haystack.indexOf( needle );
	} else {
		for( var i = 0; i < haystack.length; i++ ) {
			if( haystack[ i ] === needle ) {
				return i;
			}
		}
		return -1;
	}
};

lm.utils.fnBind = function( fn, context, boundArgs ) {

	if( Function.prototype.bind !== undefined ) {
		return Function.prototype.bind.apply( fn, [ context ].concat( boundArgs || [] ) );
	}

	var bound = function () {

		// Join the already applied arguments to the now called ones (after converting to an array again).
		var args = ( boundArgs || [] ).concat(Array.prototype.slice.call(arguments, 0));

		// If not being called as a constructor
		if (!(this instanceof bound)){
			// return the result of the function called bound to target and partially applied.
			return fn.apply(context, args);
		}
		// If being called as a constructor, apply the function bound to self.
		fn.apply(this, args);
	};
	// Attach the prototype of the function to our newly created function.
	bound.prototype = fn.prototype;
	return bound;
};

lm.utils.removeFromArray = function( item, array ) {
	var index = lm.utils.indexOf( item, array );

	if( index === -1 ) {
		throw new Error( 'Can\'t remove item from array. Item is not in the array' );
	}

	array.splice( index, 1 );
};

lm.utils.now = function() {
	if( typeof Date.now === 'function' ) {
		return Date.now();
	} else {
		return ( new Date() ).getTime();
	}
};

lm.utils.getUniqueId = function() {
	return ( Math.random() * 1000000000000000 )
		.toString(36)
		.replace( '.', '' );
};

/**
 * A basic XSS filter. It is ultimately up to the
 * implementing developer to make sure their particular 
 * applications and usecases are save from cross site scripting attacks
 *
 * @param   {String} input
 * @param 	{Boolean} keepTags
 *
 * @returns {String} filtered input
 */
lm.utils.filterXss = function( input, keepTags ) {
	
	var output = input
		.replace( /javascript/gi, 'j&#97;vascript' )
		.replace( /expression/gi, 'expr&#101;ssion' )
		.replace( /onload/gi, 'onlo&#97;d' )
		.replace( /script/gi, '&#115;cript' )
		.replace( /onerror/gi, 'on&#101;rror' );

	if( keepTags === true ) {
		return output;
	} else {
		return output
			.replace( />/g, '&gt;' )
			.replace( /</g, '&lt;' );
	}
};

/**
 * Removes html tags from a string
 *
 * @param   {String} input
 *
 * @returns {String} input without tags
 */
lm.utils.stripTags = function( input ) {
	return $.trim( input.replace( /(<([^>]+)>)/ig, '' ) );
};
/**
 * A generic and very fast EventEmitter
 * implementation. On top of emitting the
 * actual event it emits an
 *
 * lm.utils.EventEmitter.ALL_EVENT
 *
 * event for every event triggered. This allows
 * to hook into it and proxy events forwards
 *
 * @constructor
 */
lm.utils.EventEmitter = function()
{
	this._mSubscriptions = { };
	this._mSubscriptions[ lm.utils.EventEmitter.ALL_EVENT ] = [];

	/**
	 * Listen for events
	 *
	 * @param   {String} sEvent    The name of the event to listen to
	 * @param   {Function} fCallback The callback to execute when the event occurs
	 * @param   {[Object]} oContext The value of the this pointer within the callback function
	 *
	 * @returns {void}
	 */
	this.on = function( sEvent, fCallback, oContext )
	{
		if( !this._mSubscriptions[ sEvent ] )
		{
			this._mSubscriptions[ sEvent ] = [];
		}

		this._mSubscriptions[ sEvent ].push({ fn: fCallback, ctx: oContext });
	};

	/**
	 * Emit an event and notify listeners
	 *
	 * @param   {String} sEvent The name of the event
	 * @param 	{Mixed}  various additional arguments that will be passed to the listener
	 *
	 * @returns {void}
	 */
	this.emit = function( sEvent )
	{
		var i, ctx, args;

		args = Array.prototype.slice.call( arguments, 1 );
		
		if( this._mSubscriptions[ sEvent ] ) {
			for( i = 0; i < this._mSubscriptions[ sEvent ].length; i++ )
			{
				ctx = this._mSubscriptions[ sEvent ][ i ].ctx || {};
				this._mSubscriptions[ sEvent ][ i ].fn.apply( ctx, args );
			}
		}
		
		args.unshift( sEvent );

		for( i = 0; i < this._mSubscriptions[ lm.utils.EventEmitter.ALL_EVENT ].length; i++ )
		{
			ctx = this._mSubscriptions[ lm.utils.EventEmitter.ALL_EVENT ][ i ].ctx || {};
			this._mSubscriptions[ lm.utils.EventEmitter.ALL_EVENT ][ i ].fn.apply( ctx, args );
		}
	};

	/**
	 * Removes a listener for an event
	 *
	 * @param   {String} sEvent    The name of the event
	 * @param   {Function} fCallback The previously registered callback method
	 * @param   {Object} oContext  The previously registered context
	 *
	 * @returns {void}
	 */
	this.unbind = function( sEvent, fCallback, oContext )
	{
		if( !this._mSubscriptions[ sEvent ] ) {
			throw new Error( 'No subscribtions to unsubscribe for event ' + sEvent );
		}

		var i, bUnbound = false;

		for( i = 0; i < this._mSubscriptions[ sEvent ].length; i++ )
		{
			if
			(
				this._mSubscriptions[ sEvent ][ i ].fn === fCallback &&
				( !oContext || oContext === this._mSubscriptions[ sEvent ][ i ].ctx )
			)
			{
				this._mSubscriptions[ sEvent ].splice( i, 1 );
				bUnbound = true;
			}
		}

		if( bUnbound === false )
		{
			throw new Error( 'Nothing to unbind for ' + sEvent );
		}
	};

	/**
	 * Alias for unbind
	 */
	this.off = this.unbind;

	/**
	 * Alias for emit
	 */
	this.trigger = this.emit;
};

/**
 * The name of the event that's triggered for every other event
 *
 * usage
 *
 * myEmitter.on( lm.utils.EventEmitter.ALL_EVENT, function( eventName, argsArray ){
 * 	//do stuff
 * });
 *
 * @type {String}
 */
lm.utils.EventEmitter.ALL_EVENT = '__all';
lm.utils.DragListener = function(eElement, nButtonCode, use_dd)
{
	lm.utils.EventEmitter.call(this);

	if(use_dd === undefined) use_dd = isApp();

	this.use_dd = use_dd;

	this._eElement = $(eElement);
	this._nButtonCode = nButtonCode || 0;

	/**
	* The delay after which to start the drag in milliseconds
	*/
	this._nDelay = 500;

	/**
	* The distance the mouse needs to be moved to qualify as a drag
	*/
	this._nDistance = 10;//TODO - works better with delay only

	this._nX = 0;
	this._nY = 0;

	this._nOriginalX = 0;
	this._nOriginalY = 0;

	this._prevX = -999999;
	this._prevY = -999999;

	this._bDragging = false;

	this._fMove = lm.utils.fnBind( this.onMouseMove, this );
	this._fUp = lm.utils.fnBind( this.onMouseUp, this );
	this._fDown = lm.utils.fnBind( this.onMouseDown, this );
	this._fDragStart = lm.utils.fnBind( this.onDragStart, this );
	this._fDragOver = lm.utils.fnBind( this.onDragOver, this );
	this._fDragLeave = lm.utils.fnBind( this.onDragLeave, this );

	if(this.use_dd) {
		this._eElement.attr('draggable', 'true');
		this._eElement.on('dragstart', this._fDragStart);
	} else {
		this._eElement.on('mousedown touchstart', this._fDown);
	}
};

lm.utils.DragListener.timeout = null;

lm.utils.copy( lm.utils.DragListener.prototype, {
	setDocument: function() {
		var el = this._eElement.get(0);
		var doc = el.ownerDocument || document;
		this._oDocument = $(doc);
		this._eBody = $(doc.body);
	},
	destroy: function() {
		if(this.use_dd) {
			this._eElement.unbind( 'dragstart', this._fDragStart );
		}
		this._eElement.unbind( 'mousedown touchstart', this._fDown );
	},
	onDragStart: function(oEvent)
	{
		this.setDocument();

		var coordinates = this._getCoordinates( oEvent );

		this._nOriginalX = coordinates.x;
		this._nOriginalY = coordinates.y;

		this._oDocument.one('dragend', this._fUp);

		this.currentWindow = oEvent.view;

		var _this = this;

		pgGetAppWindows().forEach(function(win) {
			if(win.window !== oEvent.view || true) {
				$(win.window).on('dragover', _this._fDragOver);
				//$(win.window.document).on('dragexit', _this._fDragLeave);
			}
		})

		this.lastEvent = oEvent;
		this.dragTarget = $(oEvent.currentTarget);
		this._startDrag(oEvent);
	},
	onDragOver: function(oEvent)
	{
		this._fMove(oEvent);
	},
	onDragLeave: function(oEvent)
	{
		console.log('dragleave', oEvent);
		this._fMove(oEvent);
	},
	onMouseDown: function(oEvent)
	{
		this.setDocument();

		if($(oEvent.target).closest('.lm_close_tab').length) {
			//ignore mouse down on close button
			return;
		}
		oEvent.preventDefault();

		var coordinates = this._getCoordinates( oEvent );
		
		this._nOriginalX = coordinates.x;
		this._nOriginalY = coordinates.y;

		this._oDocument.on('mousemove touchmove', this._fMove);
		this._oDocument.one('mouseup touchend', this._fUp);

		this._timeout = setTimeout( lm.utils.fnBind( this._startDrag, this ), this._nDelay );
	},

	onMouseMove: function(oEvent)
	{
		oEvent.preventDefault();

		var coordinates = this._getCoordinates( oEvent );

		this._nX = coordinates.x - this._nOriginalX;
		this._nY = coordinates.y - this._nOriginalY;

		if( this._bDragging === false ) {
			if(
				Math.abs( this._nX ) > this._nDistance ||
				Math.abs( this._nY ) > this._nDistance
			){
				clearTimeout( this._timeout );
				this._startDrag();
			}
		}

		if( this._bDragging )
		{
			if(this._nX !== this._prevX || this._nY !== this._prevY) {
				this._prevX = this._nX;
				this._prevY = this._nY;
				this.emit('drag', this._nX, this._nY, oEvent);
			}
		}
	},

	onMouseUp: function(oEvent)
	{
		clearTimeout( this._timeout );
		this._eBody.removeClass( 'lm_dragging' );
		this._oDocument.unbind( 'mousemove touchmove', this._fMove);
		this._oDocument.unbind( 'drag', this._fMove);

		var _this = this;

		pgGetAppWindows().forEach(function(win) {
			if(win.window !== oEvent.view || true) {
				$(win.window).off('dragover', _this._fDragOver);
				//$(win.window.document).off('dragexit', _this._fDragLeave);
			}
		})
		
		if( this._bDragging === true )
		{
			this._bDragging = false;
			this.emit('dragStop', oEvent, this._nOriginalX + this._nX);
		}
	},

	_startDrag: function()
	{
		this._bDragging = true;
		this._eBody.addClass( 'lm_dragging' );
		this.emit('dragStart', this._nOriginalX, this._nOriginalY);
	},

	_getCoordinates: function( event ) {
		var coordinates = {};

		if( event.type.substr( 0, 5 ) === 'touch' ) {
			coordinates.x = event.originalEvent.targetTouches[ 0 ].pageX;
			coordinates.y = event.originalEvent.targetTouches[ 0 ].pageY;
		} else {
			coordinates.x = event.pageX;
			coordinates.y = event.pageY;
		}

		return coordinates;
	}
});
/**
 * The main class that will be exposed as GoldenLayout.
 *
 * @public
 * @constructor
 * @param {GoldenLayout config} config
 * @param {[DOM element container]} container Can be a jQuery selector string or a Dom element. Defaults to body
 *
 * @returns {VOID}
 */
lm.LayoutManager = function( config, container ) {

	if( !$ || typeof $.noConflict !== 'function' ) {
		var errorMsg = 'jQuery is missing as dependency for GoldenLayout. ';
		errorMsg += 'Please either expose $ on GoldenLayout\'s scope (e.g. window) or add "jquery" to ';
		errorMsg += 'your paths when using RequireJS/AMD';
		throw new Error( errorMsg );
	}
	lm.utils.EventEmitter.call( this );

	this.isInitialised = false;
	this._isFullPage = false;
	this._resizeTimeoutId = null;
	this._components = { 'lm-react-component': lm.utils.ReactComponentHandler };
	this._itemAreas = [];
	this._resizeFunction = lm.utils.fnBind( this._onResize, this );
	this._maximisedItem = null;
	this._maximisePlaceholder = $( '<div class="lm_maximise_place"></div>' );
	this._creationTimeoutPassed = false;
	this._subWindowsCreated = false;
    this._skipUpdateSize = false;

	this.width = null;
	this.height = null;
	this.root =  null;
	this.openPopouts = [];
	this.selectedItem = null;
	this.isSubWindow = false;
	this.eventHub = new lm.utils.EventHub( this );
	this.config = this._createConfig( config );
	this.container = container;
	this.dropTargetIndicator = null;
	this.transitionIndicator = null;
	this.tabDropPlaceholder = $( '<div class="lm_drop_tab_placeholder"></div>' );

	if( this.isSubWindow === true ) {
		$( 'body' ).css( 'visibility', 'hidden' );
	}

	$( window ).on( 'unload beforeunload', lm.utils.fnBind( this._onUnload, this) );

	this._typeToItem = {
		'column': lm.utils.fnBind( lm.items.RowOrColumn, this, [ true ] ),
		'row': lm.utils.fnBind( lm.items.RowOrColumn, this, [ false ] ),
		'stack': lm.items.Stack,
		'component': lm.items.Component
	};
};

/**
 * Hook that allows to access private classes
 */
lm.LayoutManager.__lm = lm;

/**
 * Takes a GoldenLayout configuration object and
 * replaces its keys and values recoursively with
 * one letter codes
 *
 * @static
 * @public
 * @param   {Object} config A GoldenLayout config object
 *
 * @returns {Object} minified config
 */
lm.LayoutManager.minifyConfig = function( config ) {
	return ( new lm.utils.ConfigMinifier() ).minifyConfig( config );
};

/**
 * Takes a configuration Object that was previously minified
 * using minifyConfig and returns its original version
 *
 * @static
 * @public
 * @param   {Object} minifiedConfig
 *
 * @returns {Object} the original configuration
 */
lm.LayoutManager.unminifyConfig = function( config ) {
	return ( new lm.utils.ConfigMinifier() ).unminifyConfig( config );
};

lm.utils.copy( lm.LayoutManager.prototype, {

	/**
	 * Register a component with the layout manager. If a configuration node
	 * of type component is reached it will look up componentName and create the
	 * associated component
	 *
	 *  {
	 *		type: "component",
	 *		componentName: "EquityNewsFeed",
	 *		componentState: { "feedTopic": "us-bluechips" }
	 *  }
	 *
	 * @public
	 * @param   {String} name
	 * @param   {Function} constructor
	 *
	 * @returns {void}
	 */
	registerComponent: function( name, constructor ) {
		if( typeof constructor !== 'function' ) {
			throw new Error( 'Please register a constructor function' );
		}

		if( this._components[ name ] !== undefined ) {
			throw new Error( 'Component ' + name + ' is already registered' );
		}

		this._components[ name ] = constructor;
	},

	/**
	 * Creates a layout configuration object based on the the current state
	 *
	 * @public
	 * @returns {Object} GoldenLayout configuration
	 */
	toConfig: function( root ) {
		var config, next, i;

		if( this.isInitialised === false ) {
			throw new Error( 'Can\'t create config, layout not yet initialised' );
		}

		if( root && !( root instanceof lm.items.AbstractContentItem ) ){
			throw new Error( 'Root must be a ContentItem' );
		}

		/*
		 * settings & labels
		 */
		config = {
			settings: lm.utils.copy( {}, this.config.settings ),
			dimensions: lm.utils.copy( {}, this.config.dimensions ),
			labels: lm.utils.copy( {}, this.config.labels )
		};

		/*
		 * Content
		 */
		config.content = [];
		next = function( configNode, item ) {
			var key, i;

			for( key in item.config ) {
				if( key !== 'content' ) {
					configNode[ key ] = item.config[ key ];
				}
			}

			if( item.contentItems.length ) {
				configNode.content = [];

				for( i = 0; i < item.contentItems.length; i++ ) {
					configNode.content[ i ] = {};
					next( configNode.content[ i ], item.contentItems[ i ] );
				}
			}
		};

		if( root ) {
			next( config, { contentItems: [ root ] } );
		} else {
			next( config, this.root );
		}

		/*
		 * Retrieve config for subwindows
		 */
		this._$reconcilePopoutWindows();
		config.openPopouts = [];
		for( i = 0; i < this.openPopouts.length; i++ ) {
			config.openPopouts.push( this.openPopouts[ i ].toConfig() );
		}

		/*
		 * Add maximised item
		 */
		config.maximisedItemId = this._maximisedItem ? '__glMaximised' : null;
		return config;
	},

	/**
	 * Returns a previously registered component
	 *
	 * @public
	 * @param   {String} name The name used
	 *
	 * @returns {Function}
	 */
	getComponent: function( name ) {
		if( this._components[ name ] === undefined ) {
			throw new lm.errors.ConfigurationError( 'Unknown component "' + name + '"' );
		}

		return this._components[ name ];
	},

	/**
	 * Creates the actual layout. Must be called after all initial components
	 * are registered. Recourses through the configuration and sets up
	 * the item tree.
	 *
	 * If called before the document is ready it adds itself as a listener
	 * to the document.ready event
	 *
	 * @public
	 *
	 * @returns {void}
	 */
	init: function() {

		/**
		 * Create the popout windows straight away. If popouts are blocked
		 * an error is thrown on the same 'thread' rather than a timeout and can
		 * be caught. This also prevents any further initilisation from taking place.
		 */
		if( this._subWindowsCreated === false ) {
			this._createSubWindows();
			this._subWindowsCreated = true;
		}


		/**
		 * If the document isn't ready yet, wait for it.
		 */
		if( document.readyState === 'loading' || document.body === null ) {
			$(document).ready( lm.utils.fnBind( this.init, this ));
			return;
		}

		/**
		 * If this is a subwindow, wait a few milliseconds for the original
		 * page's js calls to be executed, then replace the bodies content
		 * with GoldenLayout
		 */
		if( this.isSubWindow === true && this._creationTimeoutPassed === false ) {
			setTimeout( lm.utils.fnBind( this.init, this ), 7 );
			this._creationTimeoutPassed = true;
			return;
		}

		if( this.isSubWindow === true ) {
			this._adjustToWindowMode();
		}

		this._setContainer();
		this.dropTargetIndicator = new lm.controls.DropTargetIndicator( this.container );
		this.transitionIndicator = new lm.controls.TransitionIndicator();
		this.updateSize();
		this._create( this.config );
		this._bindEvents();
		this.isInitialised = true;
		this.emit( 'initialised' );
	},

	/**
	 * Updates the layout managers size
	 *
	 * @public
	 * @param   {[int]} width  height in pixels
	 * @param   {[int]} height width in pixels
	 *
	 * @returns {void}
	 */
	withoutUpdateSize: function(func) {
	    var o = this._skipUpdateSize;
        this._skipUpdateSize = true;
        func();
        this._skipUpdateSize = o;
    },
	updateSize: function( width, height ) {
	    if(this._skipUpdateSize) return;

		if( arguments.length === 2 ) {
			this.width = width;
			this.height = height;
		} else {
			this.width = this.container.width();
			this.height = this.container.height();
		}

		if( this.isInitialised === true ) {
			this.root.callDownwards( 'setSize' );

			if( this._maximisedItem ) {
				this._maximisedItem.element.width( this.container.width() );
				this._maximisedItem.element.height( this.container.height() );
				this._maximisedItem.callDownwards( 'setSize' );
			}
		}
	},
	setIgnoreNextClick: function() {
		var delay = 800;
		if(this._ignoreNextClickTimer) {
			clearTimeout(this._ignoreNextClickTimer)
		}
		this._ignoreNextClick = true;
		var _this = this;
		this._ignoreNextClickTimer = setTimeout(function() {
			_this._ignoreNextClick = false;
		}, delay)
	},
	ignoreNextClick: function() {
		return this._ignoreNextClick || false;
	},
	/**
	 * Destroys the LayoutManager instance itself as well as every ContentItem
	 * within it. After this is called nothing should be left of the LayoutManager.
	 *
	 * @public
	 * @returns {void}
	 */
	destroy: function() {
		if( this.isInitialised === false ) {
			return;
		}
		this._onUnload();
		$( window ).off( 'resize', this._resizeFunction );
		this.root.callDownwards( '_$destroy', [], true );
		this.root.contentItems = [];
		this.tabDropPlaceholder.remove();
		this.dropTargetIndicator.destroy();
		this.transitionIndicator.destroy();
	},

	updateSplitters: function() {
		this.root.callDownwards( 'updateSplitters' );
	},

	/**
	 * Recoursively creates new item tree structures based on a provided
	 * ItemConfiguration object
	 *
	 * @public
	 * @param   {Object} config ItemConfig
	 * @param   {[ContentItem]} parent The item the newly created item should be a child of
	 *
	 * @returns {lm.items.ContentItem}
	 */
	createContentItem: function( config, parent ) {
		var typeErrorMsg, contentItem;

		if( typeof config.type !== 'string' ) {
			throw new lm.errors.ConfigurationError( 'Missing parameter \'type\'', config );
		}

		if (config.type === 'react-component') {
			config.type = 'component';
			config.componentName = 'lm-react-component';
		}

		if( !this._typeToItem[ config.type ] ) {
			typeErrorMsg = 'Unknown type \'' + config.type + '\'. ' +
				'Valid types are ' + lm.utils.objectKeys( this._typeToItem ).join( ',' );

			throw new lm.errors.ConfigurationError( typeErrorMsg );
		}


		/**
		 * We add an additional stack around every component that's not within a stack anyways
		 */
		if(
			// If this is a component
			config.type === 'component' &&

			// and it's not already within a stack
			!( parent instanceof lm.items.Stack ) &&

			// and we have a parent
			!!parent &&

			// and it's not the topmost item in a new window
			!( this.isSubWindow === true && parent instanceof lm.items.Root )
		) {
			config = {
				type: 'stack',
				isClosable: config.isClosable,
				width: config.width,
				height: config.height,
				content: [ config ]
			};
		}

		contentItem = new this._typeToItem[ config.type ]( this, config, parent );
		return contentItem;
	},
	updateSplittersVisibility: function(item) {
		var $all = item.element.parent().find('>.lm_splitter');
		$all.each(function(i, s) {
			var $s = $(s);
			var show = true;
            var $next = $s.next();
            var $prev = $s.prev();
			if($next.hasClass('lm_docked_closed') || !$next.is(':visible') /* || !$prev.is(':visible') */) {
				show = false;
			} else if($s.prevAll('.lm_item').not('.lm_docked_closed,.lm_fixed_size').length == 0) {
				show = false;
			} else if($s.hasClass('never-show')) {
				show = false;
			}
			if(show) {
				$s.show();
			} else {
				$s.hide();
			}
		})
	},

	/**
	 * Creates a popout window with the specified content and dimensions
	 *
	 * @param   {Object|lm.itemsAbstractContentItem} configOrContentItem
	 * @param   {[Object]} dimensions A map with width, height, left and top
	 * @param 	{[String]} parentId the id of the element this item will be appended to
	 *                             when popIn is called
	 * @param 	{[Number]} indexInParent The position of this item within its parent element

	 * @returns {lm.controls.BrowserPopout}
	 */
	createPopout: function( configOrContentItem, dimensions, parentId, indexInParent ) {
		var config = configOrContentItem,
			isItem = configOrContentItem instanceof lm.items.AbstractContentItem,
			self = this,
			windowLeft,
			windowTop,
			offset,
			parent,
			child,
			browserPopout;

		parentId = parentId || null;

		if( isItem ) {
			config = this.toConfig( configOrContentItem ).content;
			parentId = lm.utils.getUniqueId();

			/**
			 * If the item is the only component within a stack or for some
			 * other reason the only child of its parent the parent will be destroyed
			 * when the child is removed.
			 *
			 * In order to support this we move up the tree until we find something
			 * that will remain after the item is being popped out
			 */
			parent = configOrContentItem.parent;
			child = configOrContentItem;
			while( parent.contentItems.length === 1 && !parent.isRoot ) {
				parent = parent.parent;
				child = child.parent;
			}

			parent.addId( parentId );
			if( isNaN( indexInParent ) ) {
				indexInParent = lm.utils.indexOf( child, parent.contentItems );
			}
		} else {
			if( !( config instanceof Array ) ) {
				config = [ config ];
			}
		}



		if( !dimensions && isItem ) {
			windowLeft = window.screenX || window.screenLeft;
			windowTop = window.screenY || window.screenTop;
			offset = configOrContentItem.element.offset();

			dimensions = {
				left: windowLeft + offset.left,
				top: windowTop + offset.top,
				width: configOrContentItem.element.width(),
				height: configOrContentItem.element.height()
			};
		}

		if( !dimensions && !isItem ) {
			dimensions = {
				left: window.screenX || window.screenLeft + 20,
				top: window.screenY || window.screenTop + 20,
				width: 500,
				height: 309
			};
		}

		if( isItem ) {
			configOrContentItem.remove();
		}

		browserPopout = new lm.controls.BrowserPopout( config, dimensions, parentId, indexInParent, this );

		browserPopout.on( 'initialised', function(){
			self.emit( 'windowOpened', browserPopout );
		});

		browserPopout.on( 'closed', function(){
			self._$reconcilePopoutWindows();
		});

		this.openPopouts.push( browserPopout );

		return browserPopout;
	},

	/**
	 * Attaches DragListener to any given DOM element
	 * and turns it into a way of creating new ContentItems
	 * by 'dragging' the DOM element into the layout
	 *
	 * @param   {jQuery DOM element} element
	 * @param   {Object} itemConfig for the new item to be created
	 *
	 * @returns {void}
	 */
	createDragSource: function( element, itemConfig ) {
		this.config.settings.constrainDragToContainer = false;
		new lm.controls.DragSource( $( element ), itemConfig, this );
	},

	/**
	 * Programmatically selects an item. This deselects
	 * the currently selected item, selects the specified item
	 * and emits a selectionChanged event
	 *
	 * @param   {lm.item.AbstractContentItem} item#
	 * @param   {[Boolean]} _$silent Wheather to notify the item of its selection
	 * @event 	selectionChanged
	 *
	 * @returns {VOID}
	 */
	selectItem: function( item, _$silent ) {

		if( this.config.settings.selectionEnabled !== true ) {
			throw new Error( 'Please set selectionEnabled to true to use this feature' );
		}

		if( item === this.selectedItem ) {
			return;
		}

		if( this.selectedItem !== null ) {
			this.selectedItem.deselect();
		}

		if( item && _$silent !== true ) {
			item.select();
		}

		this.selectedItem = item;

		this.emit( 'selectionChanged', item );
	},

	/*************************
	* PACKAGE PRIVATE
	*************************/
	_$maximiseItem: function( contentItem ) {
		if( this._maximisedItem !== null ) {
			this._$minimiseItem( this._maximisedItem );
		}
		this._maximisedItem = contentItem;
		this._maximisedItem.addId( '__glMaximised' );
		contentItem.element.addClass( 'lm_maximised' );
		contentItem.element.after( this._maximisePlaceholder );
		this.root.element.prepend( contentItem.element );
		contentItem.element.width( this.container.width() );
		contentItem.element.height( this.container.height() );
		contentItem.callDownwards( 'setSize' );
		this._maximisedItem.emit( 'maximised' );
		this.emit( 'stateChanged' );
	},

	_$minimiseItem: function( contentItem ) {
		contentItem.element.removeClass( 'lm_maximised' );
		contentItem.removeId( '__glMaximised' );
		this._maximisePlaceholder.after( contentItem.element );
		this._maximisePlaceholder.remove();
		contentItem.parent.callDownwards( 'setSize' );
		this._maximisedItem = null;
		contentItem.emit( 'minimised' );
		this.emit( 'stateChanged' );
	},

	/**
	 * This method is used to get around sandboxed iframe restrictions.
	 * If 'allow-top-navigation' is not specified in the iframe's 'sandbox' attribute
	 * (as is the case with codepens) the parent window is forbidden from calling certain
	 * methods on the child, such as window.close() or setting document.location.href.
	 *
	 * This prevented GoldenLayout popouts from popping in in codepens. The fix is to call
	 * _$closeWindow on the child window's gl instance which (after a timeout to disconnect
	 * the invoking method from the close call) closes itself.
	 *
	 * @packagePrivate
	 *
	 * @returns {void}
	 */
	_$closeWindow: function() {
		window.setTimeout(function(){
			window.close();
		}, 1);
	},

	_$getArea: function( x, y, forContentItem ) {
		var i, area, smallestSurface = Infinity, mathingArea = null;

		for( i = 0; i < this._itemAreas.length; i++ ) {
			area = this._itemAreas[ i ];

			if(
				x > area.x1 &&
				x < area.x2 &&
				y > area.y1 &&
				y < area.y2 &&
				smallestSurface > area.surface
			){
				smallestSurface = area.surface;
				mathingArea = area;
			}
		}
        if(mathingArea && forContentItem && forContentItem.config.checkDropArea) {
            mathingArea.invalid = !forContentItem.config.checkDropArea.call( forContentItem, mathingArea );
        }
		return mathingArea;
	},
    _$getBorderArea: function( x, y, forContentItem, win ) {
        var i, area, smallestSurface = Infinity, mathingArea = null, dist = 80000, r = null;

        for( i = 0; i < this._itemAreas.length; i++ ) {
            area = this._itemAreas[ i ];

			//console.log(area);

            if(
            	win === area.win &&
                x > area.x1 &&
                x < area.x2 &&
                y > area.y1 &&
                y < area.y2 &&
                smallestSurface > area.surface
            ){
				var hdist = Math.min(dist, (area.x2 - area.x1)/2);
				var vdist = Math.min(dist, (area.y2 - area.y1)/2);

				if(x < area.x1 + hdist) {
                    r = {area: area, pos: 'left'};
                } else if(x > area.x2 - hdist) {
                    r = {area: area, pos: 'right'};
                } else if(y < area.y1 + vdist) {
                    r = {area: area, pos: 'top'};
                } else if(y > area.y2 - vdist) {
                    r = {area: area, pos: 'bottom'};
                }
                if(r) {
                	smallestSurface = r.area.surface;
					//console.log('GOT', r);
				}

            }
        }
        /*
        if(r) {
			if(r.area && forContentItem && forContentItem.config.checkDropArea) {
				r.area.invalid = !forContentItem.config.checkDropArea.call( forContentItem, r.area );
			}
		}
		*/
        return r;
    },
    collapseAllStacks: function() {
        var i, area, allContentItems = this._getAllContentItems();
        for( i = 0; i < allContentItems.length; i++ ) {

            var hasAllwaysShown = function(i) {
                if(i.config.allwaysShown) return true;
                if(i.contentItems) {
                    for(var m = 0; m < i.contentItems.length; m++) {
                        if(hasAllwaysShown(i.contentItems[m])) return true;
                    }
                }
                return false;
            }

            if(allContentItems[i].isStack) {
                if(hasAllwaysShown(allContentItems[i])) continue;

                if(!allContentItems[i].isDocked) {
                    allContentItems[i].setDocked(true);
                    allContentItems[i].autoCollapsed = true;
                } else {
                    if(allContentItems[i].isDockedOpen()) {
                        allContentItems[i].closeDocked(false, false, true);
                        allContentItems[i].autoCollapsed = true;
                    }
                }
            }
        }
    },
    uncollapseAllStacks: function() {
        var i, area, allContentItems = this._getAllContentItems();
        for( i = 0; i < allContentItems.length; i++ ) {

            if(allContentItems[i].isStack && allContentItems[i].isDocked && allContentItems[i].autoCollapsed && !allContentItems[i].isDockedOpen()) {
                allContentItems[i].openDocked();
                allContentItems[i].autoCollapsed = false;
            }
        }
    },
	_$calculateItemAreas: function() {
		var i, area, allContentItems = this._getAllContentItems();
		this._itemAreas = [];

		/**
		 * If the last item is dragged out, highlight the entire container size to
		 * allow to re-drop it. allContentItems[ 0 ] === this.root at this point
		 *
		 * Don't include root into the possible drop areas though otherwise since it
		 * will used for every gap in the layout, e.g. splitters
		 */
		if( allContentItems.length === 1 ) {
			this._itemAreas.push( this.root._$getArea() );
			return;
		}

		//left root edge
		var a = this.root._$getArea();
		a.x2 = a.x1 + 10;
		a.surface = (a.y2 - a.y1) * 10;
		a.contentItem = this.root.contentItems[0];
		a.childPos = 0;

		this._itemAreas.push( a);

		//right root edge
		var a = this.root._$getArea();
		a.x1 = a.x2 - 10;
		a.surface = (a.y2 - a.y1) * 10;
		a.contentItem = this.root.contentItems[0];
		a.childPos = a.contentItem.contentItems.length;

		this._itemAreas.push( a);

		for( i = 0; i < allContentItems.length; i++ ) {

			if( !( allContentItems[ i ].isStack ) || allContentItems[ i ].config.noDragDrop) {
				continue;
			}

			area = allContentItems[ i ]._$getArea();

			if( area === null ) {
				continue;
			} else if( area instanceof Array ) {
				this._itemAreas = this._itemAreas.concat( area );
			} else {
				this._itemAreas.push( area );
			}
		}
	},

	/**
	 * Takes a contentItem or a configuration and optionally a parent
	 * item and returns an initialised instance of the contentItem
	 *
	 * @packagePrivate
	 *
	 * @param   {lm.items.AbtractContentItem|Object} contentItemOrConfig
	 * @param   {lm.items.AbtractContentItem} parent Only necessary when passing in config
	 *
	 * @returns {lm.items.AbtractContentItem}
	 */
	_$normalizeContentItem: function( contentItemOrConfig, parent ) {
		if( !contentItemOrConfig ) {
			throw new Error( 'No content item defined' );
		}

		if( contentItemOrConfig instanceof lm.items.AbstractContentItem ) {
			return contentItemOrConfig;
		}

		if( $.isPlainObject( contentItemOrConfig ) && contentItemOrConfig.type ) {
			var newContentItem = this.createContentItem( contentItemOrConfig, parent );
			newContentItem.callDownwards( '_$init' );
			return newContentItem;
		} else {
			throw new Error( 'Invalid contentItem' );
		}
	},

	/**
	 * Iterates through the array of open popout windows and removes the ones
	 * that are effectively closed. This is necessary due to the lack of reliably
	 * listening for window.close / unload events in a cross browser compatible fashion.
	 *
	 * @packagePrivate
	 *
	 * @returns {void}
	 */
	_$reconcilePopoutWindows: function() {
		var openPopouts = [], i;

		for( i = 0; i < this.openPopouts.length; i++ ) {
			if( this.openPopouts[ i ].getWindow().closed === false ) {
				openPopouts.push( this.openPopouts[ i ] );
			} else {
				this.emit( 'windowClosed', this.openPopouts[ i ] );
			}
		}

		if( this.openPopouts.length !== openPopouts.length ) {
			this.emit( 'stateChanged' );
			this.openPopouts = openPopouts;
		}

	},

	/***************************
	* PRIVATE
	***************************/
	/**
	 * Returns a flattened array of all content items,
	 * regardles of level or type
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_getAllContentItems: function() {
		var allContentItems = [];

		var addChildren = function( contentItem ) {
			allContentItems.push( contentItem );

			if( contentItem.contentItems instanceof Array ) {
				for( var i = 0; i < contentItem.contentItems.length; i++ ) {
					addChildren( contentItem.contentItems[ i ] );
				}
			}
		};

		addChildren( this.root );

		return allContentItems;
	},

	/**
	 * Binds to DOM/BOM events on init
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_bindEvents: function() {
		if( this._isFullPage ) {
			$(window).resize( this._resizeFunction );
		}
	},

	/**
	 * Debounces resize events
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_onResize: function() {
		clearTimeout( this._resizeTimeoutId );
		this._resizeTimeoutId = setTimeout(lm.utils.fnBind( this.updateSize, this ), 100 );
	},

	/**
	 * Extends the default config with the user specific settings and applies
	 * derivations. Please note that there's a seperate method (AbstractContentItem._extendItemNode)
	 * that deals with the extension of item configs
	 *
	 * @param   {Object} config
	 * @static
	 * @returns {Object} config
	 */
	_createConfig: function( config ) {
		var windowConfigKey = lm.utils.getQueryStringParam( 'gl-window' );

		if( windowConfigKey ) {
			this.isSubWindow = true;
			config = localStorage.getItem( windowConfigKey );
			config = JSON.parse( config );
			config = ( new lm.utils.ConfigMinifier() ).unminifyConfig( config );
			localStorage.removeItem( windowConfigKey );
		}

		config = $.extend( true, {}, lm.config.defaultConfig, config );

		var nextNode = function( node ) {
			for( var key in node ) {
				if( key !== 'props' && typeof node[ key ] === 'object' ) {
					nextNode( node[ key ] );
				}
				else if( key === 'type' && node[ key ] === 'react-component' ) {
					node.type = 'component';
					node.componentName = 'lm-react-component';
				}
			}
		}

		nextNode( config );

		if( config.settings.hasHeaders === false ) {
			config.dimensions.headerHeight = 0;
		}

		return config;
	},

	/**
	 * This is executed when GoldenLayout detects that it is run
	 * within a previously opened popout window.
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_adjustToWindowMode: function() {
		var popInButton = $( '<div class="lm_popin" title="' + this.config.labels.popin + '">' +
				'<div class="lm_icon"></div>' +
				'<div class="lm_bg"></div>' +
			'</div>');

		popInButton.click(lm.utils.fnBind(function(){
			this.emit( 'popIn' );
		}, this));

		document.title = lm.utils.stripTags( this.config.content[ 0 ].title );

		$( 'head' ).append( $( 'body link, body style, template, .gl_keep' ) );

		this.container = $( 'body' )
				.html( '' )
				.css( 'visibility', 'visible' )
				.append( popInButton );

		/*
		 * This seems a bit pointless, but actually causes a reflow/re-evaluation getting around
		 * slickgrid's "Cannot find stylesheet." bug in chrome
		 */
		var x = document.body.offsetHeight; // jshint ignore:line

		/*
		 * Expose this instance on the window object
		 * to allow the opening window to interact with
		 * it
		 */
		window.__glInstance = this;
	},

	/**
	 * Creates Subwindows (if there are any). Throws an error
	 * if popouts are blocked.
	 *
	 * @returns {void}
	 */
	_createSubWindows: function() {
		var i, popout;

		for( i = 0; i < this.config.openPopouts.length; i++ ) {
			popout = this.config.openPopouts[ i ];

			this.createPopout(
				popout.content,
				popout.dimensions,
				popout.parentId,
				popout.indexInParent
			);
		}
	},

	/**
	 * Determines what element the layout will be created in
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_setContainer: function() {
		var container = $( this.container || 'body' );

		if( container.length === 0 ) {
			throw new Error( 'GoldenLayout container not found' );
		}

		if( container.length > 1 ) {
			throw new Error( 'GoldenLayout more than one container element specified' );
		}

		if( container[ 0 ] === document.body ) {
			this._isFullPage = true;

			$( 'html, body' ).css({
				height: '100%',
				margin:0,
				padding: 0,
				overflow: 'hidden'
			});
		}

		this.container = container;
	},

	/**
	 * Kicks of the initial, recoursive creation chain
	 *
	 * @param   {Object} config GoldenLayout Config
	 *
	 * @returns {void}
	 */
	_create: function( config ) {
		var errorMsg;

		if( !( config.content instanceof Array ) ) {
			if( config.content === undefined ) {
				errorMsg = 'Missing setting \'content\' on top level of configuration';
			} else {
				errorMsg = 'Configuration parameter \'content\' must be an array';
			}

			throw new lm.errors.ConfigurationError( errorMsg, config );
		}

		if( config.content.length > 1 ) {
			errorMsg = 'Top level content can\'t contain more then one element.';
			throw new lm.errors.ConfigurationError( errorMsg, config );
		}

		this.root = new lm.items.Root( this, { content: config.content }, this.container );
		this.root.callDownwards( '_$init' );

		if( config.maximisedItemId === '__glMaximised' ) {
			this.root.getItemsById( config.maximisedItemId )[ 0 ].toggleMaximise();
		}
	},

	/**
	 * Called when the window is closed or the user navigates away
	 * from the page
	 *
	 * @returns {void}
	 */
	_onUnload: function() {
		if( this.config.settings.closePopoutsOnUnload === true ) {
			for( var i = 0; i < this.openPopouts.length; i++ ) {
				this.openPopouts[ i ].close();
			}
		}
	}
});

/**
 * Expose the Layoutmanager as the single entrypoint using UMD
 */
(function () {
	/* global define */
	if ( typeof define === 'function' && define.amd) {
		define([ 'jquery' ], function( jquery ){ $ = jquery; return lm.LayoutManager; }); // jshint ignore:line
	} else if (typeof exports === 'object') {
		module.exports = lm.LayoutManager;
	} else {
		window.GoldenLayout = lm.LayoutManager;
	}
})();

lm.config.itemDefaultConfig = {
	isClosable: true,
	reorderEnabled: true,
	title: ''
};
lm.config.defaultConfig = {
	openPopouts:[],
	settings:{
		hasHeaders: true,
		constrainDragToContainer: true,
		reorderEnabled: true,
		selectionEnabled: false,
		popoutWholeStack: false,
		blockedPopoutsThrowError: true,
		closePopoutsOnUnload: true,
		showPopoutIcon: true,
		showMaximiseIcon: true,
		showCloseIcon: true
	},
	dimensions: {
		borderWidth: 12,
		minItemHeight: 10,
		minItemWidth: 10,
		headerHeight: 28,
		dragProxyWidth: 300,
		dragProxyHeight: 200
	},
	labels: {
		close: 'close',
		maximise: 'maximise',
		minimise: 'minimise',
		popout: 'open in new window',
		popin: 'pop in'
	}
};
lm.container.ItemContainer = function( config, parent, layoutManager ) {
	lm.utils.EventEmitter.call( this );

	this.width = null;
	this.height = null;
	this.title = config.componentName;
	this.parent = parent;
	this.layoutManager = layoutManager;
	this.isHidden = false;
	
	this._config = config;
	this._element = $([
		'<div class="lm_item_container">',
			'<div class="lm_content"></div>',
		'</div>'
	].join( '' ));
	
	this._contentElement = this._element.find( '.lm_content' );
};

lm.utils.copy( lm.container.ItemContainer.prototype, {

	/**
	 * Get the inner DOM element the container's content
	 * is intended to live in
	 *
	 * @returns {DOM element}
	 */
	getElement: function() {
		return this._contentElement;
	},
	
	/**
	 * Hide the container. Notifies the containers content first
	 * and then hides the DOM node. If the container is already hidden
	 * this should have no effect
	 *
	 * @returns {void}
	 */
	hide: function() {
		this.emit( 'hide' );
		this.isHidden = true;
		this._element.hide();
	},
	
	/**
	 * Shows a previously hidden container. Notifies the
	 * containers content first and then shows the DOM element.
	 * If the container is already visible this has no effect.
	 *
	 * @returns {void}
	 */
	show: function() {
		this.emit( 'show' );
		this.isHidden = false;
		this._element.show();
	},

	/**
	 * Set the size from within the container. Traverses up
	 * the item tree until it finds a row or column element
	 * and resizes its items accordingly.
	 *
	 * If this container isn't a descendant of a row or column
	 * it returns false
	 * @todo  Rework!!!
	 * @param {Number} width  The new width in pixel
	 * @param {Number} height The new height in pixel
	 * 
	 * @returns {Boolean} resizeSuccesful
	 */
	setSize: function( width, height ) {
		var rowOrColumn = this.parent,
			rowOrColumnChild = this,
			totalPixel,
			percentage,
			direction,
			newSize,
			delta,
			i;

		while( !rowOrColumn.isColumn && !rowOrColumn.isRow ) {
			rowOrColumnChild = rowOrColumn;
			rowOrColumn = rowOrColumn.parent;
			

			/**
			 * No row or column has been found
			 */
			if( rowOrColumn.isRoot ) {
				return false;
			}
		}

		direction = rowOrColumn.isColumn ? "height" : "width";
		newSize = direction === "height" ? height : width;

		totalPixel = this[direction] * ( 1 / ( rowOrColumnChild.config[direction] / 100 ) );
		percentage = ( newSize / totalPixel ) * 100;
		delta = ( rowOrColumnChild.config[direction] - percentage ) / rowOrColumn.contentItems.length;

		for( i = 0; i < rowOrColumn.contentItems.length; i++ ) {
			if( rowOrColumn.contentItems[ i ] === rowOrColumnChild ) {
				rowOrColumn.contentItems[ i ].config[direction] = percentage;
			} else {
				rowOrColumn.contentItems[ i ].config[direction] += delta;
			}
		}

		rowOrColumn.callDownwards( 'setSize' );

		return true;
	},
	
	/**
	 * Closes the container if it is closable. Can be called by
	 * both the component within at as well as the contentItem containing
	 * it. Emits a close event before the container itself is closed.
	 *
	 * @returns {void}
	 */
	close: function() {
		if( this._config.isClosable ) {
			this.emit( 'close' );
			this.parent.close();
		}
	},

	/**
	 * Returns the current state object
	 *
	 * @returns {Object} state
	 */
	getState: function() {
		return this._config.componentState;
	},

	/**
	 * Merges the provided state into the current one
	 *
	 * @param   {Object} state
	 *
	 * @returns {void}
	 */
	extendState: function( state ) {
		this.setState( $.extend( true, this.getState(), state ) );
	},

	/**
	 * Notifies the layout manager of a stateupdate
	 *
	 * @param {serialisable} state
	 */
	setState: function( state ) {
		this._config.componentState = state;
		this.parent.emitBubblingEvent( 'stateChanged' );
	},

	/**
	 * Set's the components title
	 *
	 * @param {String} title
	 */
	setTitle: function( title ) {
		this.parent.setTitle( title );
	},

	/**
	 * Set's the containers size. Called by the container's component.
	 * To set the size programmatically from within the container please
	 * use the public setSize method
	 *
	 * @param {[Int]} width  in px
	 * @param {[Int]} height in px
	 * 
	 * @returns {void}
	 */
	_$setSize: function( width, height ) {
		if( true || width !== this.width || height !== this.height ) {
			this.width = width;
			this.height = height;
			if(!this._contentElement.hasClass('lm_item_container')) {
				//this._contentElement.width(this.width).height(this.height);
			}
			this.emit( 'resize' );
		}
	}
});

/**
 * Pops a content item out into a new browser window.
 * This is achieved by
 *
 * 	- Creating a new configuration with the content item as root element
 * 	- Serializing and minifying the configuration
 * 	- Opening the current window's URL with the configuration as a GET parameter
 * 	- GoldenLayout when opened in the new window will look for the GET parameter
 * 	  and use it instead of the provided configuration
 *
 * @param {Object} config GoldenLayout item config
 * @param {Object} dimensions A map with width, height, top and left
 * @param {String} parentId The id of the element the item will be appended to on popIn
 * @param {Number} indexInParent The position of this element within its parent
 * @param {lm.LayoutManager} layoutManager
 */
lm.controls.BrowserPopout = function( config, dimensions, parentId, indexInParent, layoutManager ) {
	lm.utils.EventEmitter.call( this );
	this.isInitialised = false;

	this._config = config;
	this._dimensions = dimensions;
	this._parentId = parentId;
	this._indexInParent = indexInParent;
	this._layoutManager = layoutManager;
	this._popoutWindow = null;
	this._id = null;
	this._createWindow();
};

lm.utils.copy( lm.controls.BrowserPopout.prototype, {

	toConfig: function() {
		return {
			dimensions:{
				width: this.getGlInstance().width,
				height: this.getGlInstance().height,
				left: this._popoutWindow.screenX || this._popoutWindow.screenLeft,
				top: this._popoutWindow.screenY || this._popoutWindow.screenTop
			},
			content: this.getGlInstance().toConfig().content,
			parentId: this._parentId,
			indexInParent: this._indexInParent
		};
	},

	getGlInstance: function() {
		return this._popoutWindow.__glInstance;
	},

	getWindow: function() {
		return this._popoutWindow;
	},

	close: function() {
		if( this.getGlInstance() ) {
			this.getGlInstance()._$closeWindow();
		} else {
			try{
				this.getWindow().close();
			} catch( e ){}
		}
	},

	/**
	 * Returns the popped out item to its original position. If the original 
	 * parent isn't available anymore it falls back to the layout's topmost element
	 */
	popIn: function() {
		var childConfig, 
			parentItem, 
			index = this._indexInParent;

		if( this._parentId ) {
			
			/*
			 * The $.extend call seems a bit pointless, but it's crucial to
			 * copy the config returned by this.getGlInstance().toConfig()
			 * onto a new object. Internet Explorer keeps the references
			 * to objects on the child window, resulting in the following error
			 * once the child window is closed:
			 *
			 * The callee (server [not server application]) is not available and disappeared
			 */
			childConfig = $.extend( true, {}, this.getGlInstance().toConfig() ).content[ 0 ];
			parentItem = this._layoutManager.root.getItemsById( this._parentId )[ 0 ];
			
			/*
			 * Fallback if parentItem is not available. Either add it to the topmost
			 * item or make it the topmost item if the layout is empty
			 */
			if( !parentItem ) {
				if( this._layoutManager.root.contentItems.length > 0 ) {
					parentItem = this._layoutManager.root.contentItems[ 0 ];
				} else {
					parentItem = this._layoutManager.root;
				}
				index = 0;
			}
		}

		parentItem.addChild( childConfig, this._indexInParent );
		this.close();
	},

	/**
	 * Creates the URL and window parameter
	 * and opens a new window
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_createWindow: function() {
		var checkReadyInterval,
			url = this._createUrl(),
			
			/**
			 * Bogus title to prevent re-usage of existing window with the
			 * same title. The actual title will be set by the new window's
			 * GoldenLayout instance if it detects that it is in subWindowMode
			 */
			title = Math.floor( Math.random() * 1000000 ).toString( 36 ),

			/**
			 * The options as used in the window.open string
			 */
			options = this._serializeWindowOptions({
				width: this._dimensions.width,
				height: this._dimensions.height,
				innerWidth: this._dimensions.width,
				innerHeight: this._dimensions.height,
				menubar: 'no',
				toolbar: 'no',
				location: 'no',
				personalbar: 'no',
				resizable: 'yes',
				scrollbars: 'no',
				status: 'no'
			});

		this._popoutWindow = window.open( url, title, options );

		if( !this._popoutWindow ) {
			if( this._layoutManager.config.settings.blockedPopoutsThrowError === true ) {
				var error = new Error( 'Popout blocked' );
				error.type = 'popoutBlocked';
				throw error;
			} else {
				return;
			}
		}

		$( this._popoutWindow )
			.on( 'load', lm.utils.fnBind( this._positionWindow, this ) )
			.on( 'unload beforeunload', lm.utils.fnBind( this._onClose, this ) );

		/**
		 * Polling the childwindow to find out if GoldenLayout has been initialised
		 * doesn't seem optimal, but the alternatives - adding a callback to the parent
		 * window or raising an event on the window object - both would introduce knowledge
		 * about the parent to the child window which we'd rather avoid
		 */
		checkReadyInterval = setInterval(lm.utils.fnBind(function(){
			if( this._popoutWindow.__glInstance && this._popoutWindow.__glInstance.isInitialised ) {
				this._onInitialised();
				clearInterval( checkReadyInterval );
			}
		}, this ), 10 );
	},

	/**
	 * Serialises a map of key:values to a window options string
	 *
	 * @param   {Object} windowOptions
	 *
	 * @returns {String} serialised window options
	 */
	_serializeWindowOptions: function( windowOptions ) {
		var windowOptionsString = [], key;

		for( key in windowOptions ) {
			windowOptionsString.push( key + '=' + windowOptions[ key ] );
		}

		return windowOptionsString.join( ',' );
	},

	/**
	 * Creates the URL for the new window, including the
	 * config GET parameter
	 *
	 * @returns {String} URL
	 */
	_createUrl: function() {
		var config = { content: this._config },
			storageKey = 'gl-window-config-' + lm.utils.getUniqueId(),
			urlParts;

		config = ( new lm.utils.ConfigMinifier() ).minifyConfig( config );
		
		try{
			localStorage.setItem( storageKey, JSON.stringify( config ) );
		} catch( e ) {
			throw new Error( 'Error while writing to localStorage ' + e.toString() );
		}

		urlParts = document.location.href.split( '?' );

		// URL doesn't contain GET-parameters
		if( urlParts.length === 1 ) {
			return urlParts[ 0 ] + '?gl-window=' + storageKey;

		// URL contains GET-parameters
		} else {
			return document.location.href + '&gl-window=' + storageKey;
		}
	},

	/**
	 * Move the newly created window roughly to
	 * where the component used to be. 
	 *
	 * @private
	 * 
	 * @returns {void}
	 */
	_positionWindow: function() {
		this._popoutWindow.moveTo( this._dimensions.left, this._dimensions.top );
		this._popoutWindow.focus();
	},

	/**
	 * Callback when the new window is opened and the GoldenLayout instance
	 * within it is initialised
	 *
	 * @returns {void}
	 */
	_onInitialised: function() {
		this.isInitialised = true;
		this.getGlInstance().on( 'popIn', this.popIn, this );
		this.emit( 'initialised' );
	},

	/**
	 * Invoked 50ms after the window unload event
	 *
	 * @private
	 * 
	 * @returns {void}
	 */
	_onClose: function() {
		setTimeout( lm.utils.fnBind( this.emit, this, [ 'closed' ] ), 50 );
	}
});
/**
 * This class creates a temporary container
 * for the component whilst it is being dragged
 * and handles drag events
 *
 * @constructor
 * @private
 *
 * @param {Number} x              The initial x position
 * @param {Number} y              The initial y position
 * @param {lm.utils.DragListener} dragListener   
 * @param {lm.LayoutManager} layoutManager
 * @param {lm.item.AbstractContentItem} contentItem
 * @param {lm.item.AbstractContentItem} originalParent
 */
lm.controls.DragProxy = function( x, y, dragListener, layoutManager, contentItem, originalParent, onDone ) {

	lm.utils.EventEmitter.call( this );

	this._dragListener = dragListener;
	this._layoutManager = layoutManager;
	this._contentItem = contentItem;
	this._originalParent = originalParent;
	this._originalDimensions = {
		width: contentItem.config.undocked_width || contentItem.config.width || contentItem.parent.config.width || 0,
		height: contentItem.config.undocked_height || contentItem.config.height || contentItem.parent.config.height || 0
	}

	this._area = null;
	this._lastValidArea = null;

	this._dragListener.on( 'drag', this._onDrag, this );
	this._dragListener.on( 'dragStop', this._onDrop, this );

	this.element = $( lm.controls.DragProxy._template );
	this.element.css({ left: x, top: y });
	this.element.find( '.lm_title' ).html( this._contentItem.config.title );
	this.childElementContainer = this.element.find( '.lm_content' );

    //contentItem.rememberPosition();

    //this.childElementContainer.append( contentItem.element );

	//mtch contentItem.element.detach();

	//mtch this._updateTree();
	this._layoutManager._$calculateItemAreas();

	//this._setDimensions();

	var _this = this;

	this.currentWin = null;

	setTimeout(function() {
		$( document.body ).append( _this.element );

		_this._width = _this.element.width();
		_this._height = _this.element.height();

		_this._setContainerDimensions(window);
	},1)

    this._layoutManager.emit('dragStart', this);

    this._onDone = onDone;
	this._currentValidTarget = false;
};

lm.controls.DragProxy._template = '<div class="lm_dragProxy">' +
											'<span class="lm_title"></span>' +
									'<div class="lm_content"></div><div class="lm_invalid_target">Can\'t drop it here.</div>' +
								'</div>';

lm.utils.copy( lm.controls.DragProxy.prototype, {

	_setContainerDimensions: function(win) {
		if(win !== this.currentWin) {
			this.currentWin = win;

			var $cont = $(win.document.body).find('#layout-container');

			var offset = $cont.offset();

			this._minX = offset.left;
			this._minY = offset.top;
			this._maxX = $cont.width() + this._minX;
			this._maxY = $cont.height() + this._minY;
		}
	},

	/**
	 * Callback on every mouseMove event during a drag. Determines if the drag is
	 * still within the valid drag area and calls the layoutManager to highlight the
	 * current drop area
	 *
	 * @param   {Number} offsetX The difference from the original x position in px
	 * @param   {Number} offsetY The difference from the original y position in px
	 * @param   {jQuery DOM event} event
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_setValidTarget: function(v) {
		if(this._currentValidTarget != v) {
			if(v) {
				this.element.find('.lm_invalid_target').hide();
			} else {
				this.element.find('.lm_invalid_target').show();
			}
			this._currentValidTarget = v;
		}
	},
	_onDrag: function( offsetX, offsetY, event ) {
		this._setContainerDimensions(event.view);

		var x = event.pageX,
			y = event.pageY,
			isWithinContainer = x > this._minX && x < this._maxX && y > this._minY && y < this._maxY;

        //console.log(x, y)
	
		if( !isWithinContainer /* && this._layoutManager.config.settings.constrainDragToContainer === true */) {

            this._setValidTarget(false);
            this._lastValidArea = null;
            this._layoutManager.dropTargetIndicator.hide();

			return;
		}

		if(this.element.get(0).ownerDocument.defaultView !== event.view) {
			$(event.view.document.body).append(this.element);
		}
		this.element.css({ left: x + 20, top: y + 20});
		//var area = this._layoutManager._$getArea( x, y, this._contentItem);
        if(x < 4) {
            //debugger;
        }
		var area_info = this._layoutManager._$getBorderArea( x, y, this._contentItem, event.view );

		if(!area_info) {
            this._setValidTarget(false);
            this._lastValidArea = null;
            this._layoutManager.dropTargetIndicator.hide();
		} else {
            var segment = area_info.area.contentItem._$getDropZoneSegment( x, y );

            var valid = true;

            var check_item = area_info.area.contentItem;

            if(check_item && this._contentItem && this._contentItem.config.checkDropArea) {
                valid = this._contentItem.config.checkDropArea.call( this._contentItem, check_item, segment );

                if(!valid) {
                    if((segment == 'left' || segment == 'right') && area_info.pos && (area_info.pos == 'left' || area_info.pos == 'right') ) {
                        //check if parent is valid area
                        check_item = check_item.parent;
                        valid = this._contentItem.config.checkDropArea.call( this._contentItem, check_item, segment );
						/*if(valid) {
							area_info.area.contentItem = check_item;
							segment = area_info.pos;
						}*/
                    }
                }
            }


            if((segment == 'right' || segment == 'left') && check_item.type == 'row') {
				check_item.contentItems.forEach(function(ci) {
					if(ci.config.dontCollapseOnActiveTabClick) valid = false;
				})
			}
            //console.log(segment, check_item)

            /*
            if(!valid && segment == 'body' && (area_info.pos == 'left' || area_info.pos == 'right')) {
                segment = area_info.pos;
                valid = true;
            }*/

            if(area_info.area.contentItem.config.fixedHeight && (segment == 'left' || segment == 'right')) {
                valid = false;
            }

            if(valid && (segment == 'left' || segment == 'right') && check_item.type == 'column') {
                check_item.contentItems.forEach(function(ci) {
                    if(ci.config.fixedHeight) {
                        valid = false;
                    }
                })
            }

            if(!valid) {
				//console.log('INVALID', segment, check_item, area_info)
			} else {
                //console.log('VALID', segment, check_item, area_info, this._contentItem)
            }

            if(valid) {
                this._area = area_info.area;

                this._setValidTarget(true);
                this._lastValidArea = this._area;
				if(x < 8) {
					//debugger;
				}
                this._area.contentItem._$highlightDropZone(x, y, segment, area_info.area, area_info.pos, event.view);
                if (!this._area.contentItem._dropSegment) this._area.contentItem._dropSegment = area_info.pos;
                //if(this._area.contentItem._dropSegment !== 'header') this._area.contentItem._dropSegment = area_info.pos;
            } else {
                this._setValidTarget(false);
			}
		}

		return;

		if(area && area.invalid) {
			//this._area.contentItem._$highlightDropZone(x, y, this._area);
			this._setValidTarget(false);
		} else {
			this._area = area;

			if (this._area !== null) {
				this._setValidTarget(true);
				this._lastValidArea = this._area;
				this._area.contentItem._$highlightDropZone(x, y, this._area);
			} else {
				this._setValidTarget(false);
			}
		}
	},
	
	/**
	 * Callback when the drag has finished. Determines the drop area
	 * and adds the child to it
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_onDrop: function() {
		this._layoutManager.dropTargetIndicator.hide();

		//this._updateTree();
		//mtch
        var parent = null;

        //if(this._area) {

            if (this._contentItem.parent) {
                parent = this._contentItem.parent;
                this._contentItem.parent.removeChild(this._contentItem, true, null, true /* keep empty */);
            }
            //end mtch

            var ok = false;
            /*
             * Valid drop area found
             */
            try {
                if (this._area !== null) {
                    this._area.contentItem._$onDrop(this._contentItem, this);
                    ok = true;

                    /**
                     * No valid drop area available at present, but one has been found before.
                     * Use it
                     */
                } else if (this._lastValidArea !== null) {
                    this._lastValidArea.contentItem._$onDrop(this._contentItem, this);
                    ok = true;

                    /**
                     * No valid drop area found during the duration of the drag. Return
                     * content item to its original position if a original parent is provided.
                     * (Which is not the case if the drag had been initiated by createDragSource)
                     */
                }
            } catch (err) {
                console.log(err);
            }

            if (!ok && this._originalParent) {
                this._originalParent.addChild(this._contentItem);
            }
            if (parent && parent.contentItems.length === 0 && parent.config.isClosable) {
                //close the empty parent
                parent.remove();
            }
        //}

        this._layoutManager.emit('dragStop', this);

		if(this._onDone) this._onDone();

        this.destroy();
	},
	
	/**
	 * Removes the item from it's original position within the tree
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_updateTree: function() {
		
		/**
		 * parent is null if the drag had been initiated by a external drag source
		 */
		if( this._contentItem.parent ) {
			this._contentItem.parent.removeChild( this._contentItem, true );
		}
		
		this._contentItem._$setParent( this );
	},
	
	/**
	 * Updates the Drag Proxie's dimensions
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_setDimensions: function() {
		var dimensions = this._layoutManager.config.dimensions,
			width = dimensions.dragProxyWidth,
			height = dimensions.dragProxyHeight - dimensions.headerHeight;
	
		this.childElementContainer.width( width );
		this.childElementContainer.height( height );
		this._contentItem.element.width( width );
		this._contentItem.element.height( height );
		this._contentItem.callDownwards( '_$show' );
		this._contentItem.callDownwards( 'setSize' );
	},
    destroy: function() {
        this.element.remove();
        this._dragListener.off( 'drag', this._onDrag, this );
        this._dragListener.off( 'dragStop', this._onDrop, this );
    }
});

/**
 * This class creates a temporary container
 * for the component whilst it is being dragged
 * and handles drag events
 *
 * @constructor
 * @private
 *
 * @param {Number} x              The initial x position
 * @param {Number} y              The initial y position
 * @param {lm.utils.DragListener} dragListener
 * @param {lm.LayoutManager} layoutManager
 * @param {lm.item.AbstractContentItem} contentItem
 * @param {lm.item.AbstractContentItem} originalParent
 */
lm.controls.DragProxyForStack = function( x, y, dragListener, layoutManager, contentItem, originalParent, onDone ) {

    lm.utils.EventEmitter.call(this);

    this._dragListener = dragListener;
    this._layoutManager = layoutManager;
    this._contentItem = contentItem;
    this._originalParent = originalParent;

    this._originalDimensions = {
        width: contentItem.config.width || contentItem.parent.config.width || 0,
        height: contentItem.config.height || contentItem.parent.config.height || 0
    }

    if (originalParent) {
        this._originalParentIsClosable = originalParent.config.isClosable || false;
        originalParent.config.isClosable = false;
    }

	this._area = null;
	this._lastValidArea = null;

	this._dragListener.on( 'drag', this._onDrag, this );
	this._dragListener.on( 'dragStop', this._onDrop, this );

	/*this.proxy = this._getProxyForFloating();
	if(this.proxy) {
		//pass events to
		this.proxy.proxyDragStart();
	} else {*/

    contentItem.rememberPosition();

		this.element = $( lm.controls.DragProxy._template );
		this.element.css({ left: x, top: y });

		var title = '';
		for(var i = 0; i < contentItem.contentItems.length; i++) {
			title = contentItem.contentItems[i].config.title;
			if(contentItem.contentItems.length > 1) {
				title += ' + ' + (contentItem.contentItems.length - 1) + ' more';
			}
		}
		this.element.find( '.lm_title' ).html( title );
		this.childElementContainer = this.element.find( '.lm_content' );

		//mtch contentItem.element.detach();

		//this.childElementContainer.append( contentItem.element );//todo30 - something else

		//mtch this._updateTree();
		this._layoutManager._$calculateItemAreas();
		//this._setDimensions();

		var _this = this;

		this.currentWin = null;

		setTimeout(function() {
			$( document.body ).append( _this.element );

			_this._width = _this.element.width();
			_this._height = _this.element.height();

			_this._setContainerDimensions(window);
		},1)

		//$(document.body).append(this.element);

	/*
		var offset = this._layoutManager.container.offset();

		this._minX = offset.left;
		this._minY = offset.top;
		this._maxX = this._layoutManager.container.width() + this._minX;
		this._maxY = this._layoutManager.container.height() + this._minY;
		this._width = this.element.width();
		this._height = this.element.height();
*/

		this._layoutManager.emit('dragStart', this);

		this._onDone = onDone;
	//}
};


lm.utils.copy( lm.controls.DragProxyForStack.prototype, {

	_setContainerDimensions: lm.controls.DragProxy.prototype._setContainerDimensions,
	/**
	 * Callback on every mouseMove event during a drag. Determines if the drag is
	 * still within the valid drag area and calls the layoutManager to highlight the
	 * current drop area
	 *
	 * @param   {Number} offsetX The difference from the original x position in px
	 * @param   {Number} offsetY The difference from the original y position in px
	 * @param   {jQuery DOM event} event
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_setValidTarget: lm.controls.DragProxy.prototype._setValidTarget,
	_getProxyForFloating: function() {
		var p = this;
		while(p) {
			if(p.isFloating && p.dragMoverResizer) {
				return p.dragMoverResizer;
			}
			p = p.parent;
		}
		return null;
	},
	_onDrag: lm.controls.DragProxy.prototype._onDrag,
	/**
	 * Callback when the drag has finished. Determines the drop area
	 * and adds the child to it
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_onDrop: function() {
		this._layoutManager.dropTargetIndicator.hide();

		/*
		 * Valid drop area found
		 */
		var restored = false;

		var area = this._area || this._lastValidArea;

		if(area) {
			if(area.contentItem === this._contentItem || (/* area.contentItem._dropSegment && area.contentItem._dropSegment == 'header' && */ area.contentItem.parent === this._contentItem)) {
				//strange situation, skip
				if(this._onDone) this._onDone();

				this._layoutManager.emit('dragStop', this);

				this.destroy();
				return;
			}
		}

		this._updateTree();

		var _this = this;

		var handleFloating = function() {
			//if it was floating before, it should not be any more
			if( _this._contentItem.isFloating) {
				_this._contentItem.isFloating = false;
				_this._contentItem.config.isFloating = false;
				_this._contentItem.element.removeClass('lm_floating');
			}
		}

		if( this._area !== null ) {
			handleFloating();
			this._area.contentItem._$onDrop( this._contentItem, this );

			/**
			 * No valid drop area available at present, but one has been found before.
			 * Use it
			 */
		} else if( this._lastValidArea !== null ) {
			handleFloating();
			this._lastValidArea.contentItem._$onDrop( this._contentItem, this );

			/**
			 * No valid drop area found during the duration of the drag. Return
			 * content item to its original position if a original parent is provided.
			 * (Which is not the case if the drag had been initiated by createDragSource)
			 */
		} else if ( this._originalParent ){
			this._originalParent.addChild( this._contentItem );
            restored = true;
		}

		if(!restored) {
            if (this._originalParent) {
                this._originalParent.config.isClosable = this._originalParentIsClosable;

                if(this._originalParent.contentItems.length === 0 && !(this._originalParent instanceof lm.items.Root) && this._originalParent.config.isClosable === true ) {
                    this._originalParent.parent.removeChild( this._originalParent );
                }
            }
        }

        if(this._contentItem.parent === this) {
            //tabs from stack were added to another stack and this is the original stack here. remove it
            //no need to remove, will be gcd
        }

        //was moved into another stack
		if(!restored && area && area.contentItem && area.contentItem  !== this._contentItem && area.contentItem._dropSegment && area.contentItem._dropSegment == 'header') {
			this._contentItem.isDockedClosed = false;
		}

		if(this._contentItem.isDockedClosed) {
            this._contentItem.openDocked(true);
            this._contentItem.closeDocked();
        }

		if(this._onDone) this._onDone();

        this._layoutManager.emit('dragStop', this);

		this.destroy();
	},

	/**
	 * Removes the item from it's original position within the tree
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_updateTree: function() {

		/**
		 * parent is null if the drag had been initiated by a external drag source
		 */
		if( this._contentItem.parent ) {
			this._contentItem.parent.removeChild( this._contentItem, true );
		}

		//this._contentItem._$setParent( this ); mtch
	},

	/**
	 * Updates the Drag Proxie's dimensions
	 *
	 * @private
	 *
	 * @returns {void}
	 */
	_setDimensions: function() {
		var dimensions = this._layoutManager.config.dimensions,
			width = dimensions.dragProxyWidth,
			height = dimensions.dragProxyHeight - dimensions.headerHeight;

		this.childElementContainer.width( width );
		this.childElementContainer.height( height );
		this._contentItem.element.width( width );
		this._contentItem.element.height( height );
		this._contentItem.callDownwards( '_$show' );
		this._contentItem.callDownwards( 'setSize' );
	},
    destroy: function() {
        this.element.remove();
        this._dragListener.off( 'drag', this._onDrag, this );
        this._dragListener.off( 'dragStop', this._onDrop, this );
    }
});
/**
 * Allows for any DOM item to create a component on drag
 * start tobe dragged into the Layout
 *
 * @param {jQuery element} element
 * @param {Object} itemConfig the configuration for the contentItem that will be created
 * @param {LayoutManager} layoutManager
 *
 * @constructor
 */
lm.controls.DragSource = function( element, itemConfig, layoutManager ) {
	this._element = element;
	this._itemConfig = itemConfig;
	this._layoutManager = layoutManager;
	this._dragListener = null;

	this._createDragListener();
};

lm.utils.copy( lm.controls.DragSource.prototype, {
	
	/**
	 * Called initially and after every drag
	 *
	 * @returns {void}
	 */
	_createDragListener: function() {
		if( this._dragListener !== null ) {
			this._dragListener.destroy();
		}
		
		this._dragListener = new lm.utils.DragListener( this._element );
		this._dragListener.on( 'dragStart', this._onDragStart, this );
		this._dragListener.on( 'dragStop', this._createDragListener, this );
	},

	/**
	 * Callback for the DragListener's dragStart event
	 *
	 * @param   {int} x the x position of the mouse on dragStart
	 * @param   {int} y the x position of the mouse on dragStart
	 *
	 * @returns {void}
	 */
	_onDragStart: function( x, y ) {
		var contentItem = this._layoutManager._$normalizeContentItem( this._itemConfig ),
			dragProxy = new lm.controls.DragProxy( x, y, this._dragListener, this._layoutManager, contentItem, null );
		
		this._layoutManager.transitionIndicator.transitionElements( this._element, dragProxy.element );
	}
});

lm.controls.DropTargetIndicator = function() {
	this.element = $( lm.controls.DropTargetIndicator._template );
	$(document.body).append( this.element );
};

lm.controls.DropTargetIndicator._template = '<div class="lm_dropTargetIndicator"><div class="lm_inner"></div></div>';

lm.utils.copy( lm.controls.DropTargetIndicator.prototype, {
	destroy: function() {
		this.element.remove();
	},

	highlight: function( x1, y1, x2, y2, win ) {
		this.highlightArea({ x1:x1, y1:y1, x2:x2, y2:y2 }, win);
	},

	highlightArea: function( area, win ) {
		if(this.element.get(0).ownerDocument.defaultView !== win) {
			$(win.document.body).append(this.element);
		}
		this.element.css({
			left: area.x1,
			top: area.y1,
			width: area.x2 - area.x1,
			height: area.y2 - area.y1
		}).removeClass('border').show();
	},

	highlightBorderArea: function( area, segment, win ) {

		if(this.element.get(0).ownerDocument.defaultView !== win) {
			$(win.document.body).append(this.element);
		}

		var size = 4;
		var x, y, w, h;
		switch(segment) {
			case 'top':
				x = area.x1;
				y = area.y1 - 28 - 6;
				w = area.x2 - area.x1;
				h = size;
				break;
			case 'bottom':
				x = area.x1;
				y = area.y2 - size;
				w = area.x2 - area.x1;
				h = size;
				break;
			case 'left':
				x = area.x1 + size/2;
				y = area.y1 - 28;
				w = size;
				h = area.y2 - area.y1 + 28;
				break;
			case 'right':
				x = area.x2 - size/2;
				y = area.y1 - 28;
				w = size;
				h = area.y2 - area.y1 + 28;
				break;
		}
		this.element.css({
			left: x,
			top: y,
			width: w,
			height: h
		}).addClass('border').show();
	},

	hide: function() {
		this.element.hide();
	}
});
/**
 * This class represents a header above a Stack ContentItem.
 *
 * @param {lm.LayoutManager} layoutManager
 * @param {lm.item.AbstractContentItem} parent
 */
lm.controls.Header = function( layoutManager, parent ) {
	lm.utils.EventEmitter.call( this );

	this.layoutManager = layoutManager;
	this.element = $( lm.controls.Header._template );

	if( this.layoutManager.config.settings.selectionEnabled === true ) {
		this.element.addClass( 'lm_selectable' );
		this.element.click( lm.utils.fnBind( this._onHeaderClick, this ) );
	}
	
	this.element.height( layoutManager.config.dimensions.headerHeight );
	this.tabsContainer = this.element.find( '.lm_tabs' );
	this.controlsContainer = this.element.find( '.lm_controls' );
	this.handle = this.element.find( '.lm_handle' );
	this.parent = parent;
	this.parent.on( 'resize', this._updateTabSizes, this );
	this.tabs = [];
	this.activeContentItem = null;

	this._createControls();
};

lm.controls.Header._template = [
	'<div class="lm_header">',
		'<ul class="lm_tabs"></ul>',
		'<ul class="lm_controls"></ul>',
		'<div class="lm_handle"></div>',
	'</div>'
].join( '' );

lm.utils.copy( lm.controls.Header.prototype, {

	/**
	 * Creates a new tab and associates it with a contentItem
	 *
	 * @param   {lm.item.AbstractContentItem} contentItem
	 * @param   {Integer} index The position of the tab
	 *
	 * @returns {void}
	 */
	createTab: function( contentItem, index ) {
		var tab, i;

		//If there's already a tab relating to the
		//content item, update the index if needed
		for( i = 0; i < this.tabs.length; i++ ) {
			if( this.tabs[ i ].contentItem === contentItem ) {
				if(i === index) {
					return; //already there
				} else if(i > index) {
					//no need to change
				} else {
					index--;
				}
				this.tabs.splice(i, 1);
				break;
				//return;
			}
		}

		if(contentItem.tab) {
            tab = contentItem.tab;
            //tab.header.removeTab(contentItem.tab, true);
            tab.header = this;
        } else {
            tab = new lm.controls.Tab(this, contentItem); //MTCH don't create new tab if exists
        }
		
		if( this.tabs.length === 0 ) {
			this.tabs.push( tab );
			this.tabsContainer.append( tab.element );
			return;
		}
	
		if( index === undefined ) {
			index = this.tabs.length;
		}

		if(index > this.tabs.length) {
			index = this.tabs.length;
		}
		if( index > 0 ) {
			this.tabs[ index - 1 ].element.after( tab.element );
		} else {
			this.tabs[ 0 ].element.before( tab.element );
		}
	
		this.tabs.splice( index, 0, tab );
		this._updateTabSizes();
	},

	/**
	 * Finds a tab based on the contentItem its associated with and removes it.
	 *
	 * @param   {lm.item.AbstractContentItem} contentItem
	 *
	 * @returns {void}
	 */
	removeTab: function( contentItem, keep) {
		for( var i = 0; i < this.tabs.length; i++ ) {
			if( this.tabs[ i ].contentItem === contentItem ) {
			    if(keep) {
                    this.tabs[i].element.detach(); //MTCH keep tab
                } else {
                    this.tabs[i]._$destroy();
                }
				this.tabs.splice( i, 1 );
				return;
			}
		}
	
		//throw new Error( 'contentItem is not controlled by this header' );
	},
	
	/**
	 * The programmatical equivalent of clicking a Tab.
	 *
	 * @param {lm.item.AbstractContentItem} contentItem
	 */
	setActiveContentItem: function( contentItem ) {
		var i, isActive;

		for( i = 0; i < this.tabs.length; i++ ) {
			isActive = this.tabs[ i ].contentItem === contentItem;
			this.tabs[ i ].setActive( isActive );
			if( isActive === true ) {
				this.activeContentItem = contentItem;
				this.parent.config.activeItemIndex = i;
			}
		}

		this._updateTabSizes();
		this.parent.emitBubblingEvent( 'stateChanged' );
	},

	/**
	 * Destroys the entire header
	 *
	 * @package private
	 * 
	 * @returns {void}
	 */
	_$destroy: function() {
		this.emit( 'destroy' );
	
		for( var i = 0; i < this.tabs.length; i++ ) {
			this.tabs[ i ]._$destroy();
		}
	
		this.element.remove();
	},

	/**
	 * Creates the popout, maximise and close buttons in the header's top right corner
	 *
	 * @returns {void}
	 */
	_createControls: function() {
		var closeStack,
			popout,
			label,
			maximiseLabel,
			minimiseLabel,
			maximise,
			maximiseButton;

		/**
		 * Popout control to launch component in new window.
		 */
		if( this.layoutManager.config.settings.showPopoutIcon ) {
			popout = lm.utils.fnBind( this._onPopoutClick, this );
			label = this.layoutManager.config.labels.popout;
			new lm.controls.HeaderButton( this, label, 'lm_popout', popout );
		}

		/**
		 * Maximise control - set the component to the full size of the layout
		 */
		if( this.layoutManager.config.settings.showMaximiseIcon ) {
			maximise = lm.utils.fnBind( this.parent.toggleMaximise, this.parent );
			maximiseLabel = this.layoutManager.config.labels.maximise;
			minimiseLabel = this.layoutManager.config.labels.minimise;
			maximiseButton = new lm.controls.HeaderButton( this, maximiseLabel, 'lm_maximise', maximise );
			
			this.parent.on( 'maximised', function(){
				maximiseButton.element.attr( 'title', minimiseLabel );
			});

			this.parent.on( 'minimised', function(){
				maximiseButton.element.attr( 'title', maximiseLabel );
			});
		}

		/**
		 * Close button
		 */
		if( this.parent.config.isClosable && this.layoutManager.config.settings.showCloseIcon ) {
			closeStack = lm.utils.fnBind( this.parent.remove, this.parent );
			label = this.layoutManager.config.labels.close;
			new lm.controls.HeaderButton( this, label, 'lm_close', closeStack );
		}
	},

	_onPopoutClick: function() {
		if( this.layoutManager.config.settings.popoutWholeStack === true ) {
			this.parent.popout();
		} else {
			this.activeContentItem.popout();
		}
	},

	/**
	 * Invoked when the header's background is clicked (not it's tabs or controls)
	 *
	 * @param   {jQuery DOM event} event
	 *
	 * @returns {void}
	 */
	_onHeaderClick: function( event ) {
		if( event.target === this.element[ 0 ] ) {
			this.parent.select();
		}
	},

	/**
	 * Shrinks the tabs if the available space is not sufficient
	 *
	 * @returns {void}
	 */
	_updateTabSizes: function() {
		if( this.tabs.length === 0 ) {
			return;
		}
		
		var availableWidth = this.element.outerWidth() - this.controlsContainer.outerWidth(),
			totalTabWidth = 0,
			tabElement,
			i,
			marginLeft,
			gap;

		var max_w = Math.floor((availableWidth - 50) / this.tabs.length);

		for( i = 0; i < this.tabs.length; i++ ) {
			tabElement = this.tabs[ i ].element;

			/*
			 * In order to show every tab's close icon, decrement the z-index from left to right
			 */
			tabElement.css( 'z-index', this.tabs.length - i );
			totalTabWidth += tabElement.css({
				'max-width': 'none', 'padding-right': 5
			}).outerWidth() + parseInt( tabElement.css( 'margin-right' ), 10 );
		}

		gap = ( totalTabWidth - availableWidth ) / ( this.tabs.length - 1 );

		var narrow = totalTabWidth + 25 * this.tabs.length > availableWidth - 50;

		for( i = 0; i < this.tabs.length; i++ ) {

			/*
			 * The active tab keeps it's original width
			 */
			if( !this.tabs[ i ].isActive && gap > 0 ) {
				marginLeft = '-' + Math.floor( gap )+ 'px';
			} else {
				marginLeft = '';
			}

			var spc = (this.tabs[i].isClosable || !narrow) ? 25 : 5;

			//this.tabs[ i ].element.css( 'margin-left', marginLeft );
			this.tabs[ i ].element.css( {
				'max-width': max_w - spc,
				'padding-right': spc
			} );
		}

		if( availableWidth < totalTabWidth ) {
			this.element.css( 'overflow', 'hidden' );
		} else {
			this.element.css( 'overflow', 'visible' );
			//this.handle.css('width', (totalTabWidth - availableWidth) + 'px')
		}
	}
});


lm.controls.HeaderButton = function( header, label, cssClass, action ) {
	this._header = header;
	this.element = $( '<li class="' + cssClass + '" title="' + label + '"></li>' );
	this._header.on( 'destroy', this._$destroy, this );
	this._action = action;
	this.element.click( this._action );
	this._header.controlsContainer.append( this.element );
};

lm.utils.copy( lm.controls.HeaderButton.prototype, {
	_$destroy: function() {
		this.element.off();
		this.element.remove();
	}
});
lm.controls.Splitter = function( isVertical, size ) {
	this._isVertical = isVertical;
	this._size = size;

	this.element = this._createElement();
	this._dragListener = new lm.utils.DragListener( this.element, null, false);
};

lm.utils.copy( lm.controls.Splitter.prototype, {
	on: function( event, callback, context ) {
		this._dragListener.on( event, callback, context );
	},

    update: function() {
	    var positions = [];
        var $next = this.element.next();
        var min = 100;

        var _this = this;
        var dim = !this._isVertical ? 'height' : 'width';
        var dist = !this._isVertical ? 'top' : 'left';

        if($next.hasClass(!this._isVertical ? 'lm_column' : 'lm_row')) {

            $next.find('> .lm_stack:visible').each(function(i, stack) {
                var $stack = $(stack);
                var pos = $stack.position();
                var size = $stack[dim]();
                if(size > min) {
                    positions.push(pos[dist] + Math.floor(size/2));
                }
            })
        } else {
            positions.push(Math.floor($next[dim]() / 2));
        }
        var $is = this.element.find('i.icon');
        for(var i = $is.length; i < positions.length; i++) {
            $is = $is.add($('<i class="icon icon225 ' + (_this._isVertical ? 'icon-drag-vert-x225' : 'icon-drag-horiz-x225') + '"></i>').appendTo(_this.element));
        }

        $is.each(function(i, ie) {
            var $i = $(ie);
            if(i < positions.length) {
                var css = {
                    display: 'block'
                }
                css[dist] = positions[i] + 'px';
                $i.css(css)
            } else {
                $i.css('display', 'none');
            }
        })
    },

	_$destroy: function() {
		this.element.remove();
	},

	_createElement: function() {
		var element = $( '<div class="lm_splitter"><div class="lm_drag_handle"></div></div>' );
		element.addClass( 'lm_' + ( this._isVertical ? 'vertical' : 'horizontal' ) );
		element[ this._isVertical ? 'height' : 'width' ]( this._size );

		$('<i class="icon icon225 ' + (this._isVertical ? 'icon-drag-vert-x225' : 'icon-drag-horiz-x225') + '"></i>').appendTo(element);

		return element;
	}
});

/**
 * Represents an individual tab within a Stack's header
 *
 * @param {lm.controls.Header} header
 * @param {lm.items.AbstractContentItem} contentItem
 *
 * @constructor
 */
lm.controls.Tab = function( header, contentItem ) {
	this.header = header;
	this.contentItem = contentItem;
	this.element = $( lm.controls.Tab._template );
	this.titleElement = this.element.find( '.lm_title' );
	this.closeElement = this.element.find( '.lm_close_tab' );
	this.closeElement[ contentItem.config.isClosable ? 'show' : 'hide' ]();
	this.isActive = false;

    this.isClosable = contentItem.config.isClosable;
	
	this.setTitle( contentItem.config.title );
	this.contentItem.on( 'titleChanged', this.setTitle, this );

	this._layoutManager = this.contentItem.layoutManager;

	if( 
		this._layoutManager.config.settings.reorderEnabled === true &&
		contentItem.config.reorderEnabled === true
	) {
		this._dragListener = new lm.utils.DragListener( this.element );
		this._dragListener.on( 'dragStart', this._onDragStart, this );
	}
	
	this._onTabClickFn = lm.utils.fnBind( this._onTabClick, this );
    this._onTabDoubleClickFn = lm.utils.fnBind( this._onTabDoubleClick, this );
	this._onCloseClickFn = lm.utils.fnBind( this._onCloseClick, this );

	this.element.click( this._onTabClickFn );
    this.element.on('dblclick', this._onTabDoubleClickFn);

	if( this._layoutManager.config.settings.showCloseIcon === true ) {
		this.closeElement.click( this._onCloseClickFn );
	} else {
		this.closeElement.remove();
		this.closeElement = null;
	}
	
	this.contentItem.tab = this;
	this.contentItem.emit( 'tab', this );
	this.contentItem.layoutManager.emit( 'tabCreated', this );

	if( this.contentItem.isComponent ) {
		this.contentItem.container.tab = this;
		this.contentItem.container.emit( 'tab', this );
	}
};

/**
 * The tab's html template
 *
 * @type {String}
 */
lm.controls.Tab._template = '<li class="lm_tab"><i class="lm_left"></i>' +
							'<span class="lm_title"></span><div class="lm_close_tab"></div>' +
							'<i class="lm_right"></i></li>';

lm.utils.copy( lm.controls.Tab.prototype,{

	/**
	 * Sets the tab's title to the provided string and sets
	 * its title attribute to a pure text representation (without 
	 * html tags) of the same string.
	 *
	 * @public
	 * @param {String} title can contain html
	 */
	setTitle: function( title ) {
		//this.element.attr( 'title', lm.utils.stripTags( title ) );
		this.titleElement.html( title );
	},

	/**
	 * Sets this tab's active state. To programmatically 
	 * switch tabs, use header.setActiveContentItem( item ) instead.
	 *
	 * @public
	 * @param {Boolean} isActive
	 */
	setActive: function( isActive ) {
		if( isActive === this.isActive ) {
			return;
		}
		this.isActive = isActive;

		if( isActive ) {
			this.element.addClass( 'lm_active' );
		} else {
			this.element.removeClass( 'lm_active');
		}
	},

	/**
	 * Destroys the tab
	 *
	 * @private
	 * @returns {void}
	 */
	_$destroy: function() {
		this.element.off( 'click', this._onTabClickFn );
		this.closeElement.off( 'click', this._onCloseClickFn );
        this.element.off('dblclick', this._onTabDoubleClickFn);
		this.element.remove();
	},

	/**
	 * Callback for the DragListener
	 *
	 * @param   {Number} x The tabs absolute x position
	 * @param   {Number} y The tabs absolute y position
	 *
	 * @private
	 * @returns {void}
	 */
	_onDragStart: function( x, y ) {
        var drag_proxy;

		if( this.contentItem.parent.isMaximised === true ) {
			this.contentItem.parent.toggleMaximise();
		}
        var drag_item = this.contentItem;

        if(drag_item.parent.contentItems.length === 1 && !drag_item.parent.config.notDraggable) {
            //drag whole stack
            drag_item = drag_item.parent;

			if(drag_item.config.notDraggable) {
				this._layoutManager.emit('dragNotAllowed', this);
				return;
			}

			if(drag_item.parent.isColumn && drag_item.parent.contentItems.indexOf(this) === 0) {
                //drag whole column
                drag_item = drag_item.parent;
            }

            drag_proxy = new lm.controls.DragProxyForStack(
                x,
                y,
                this._dragListener,
                drag_item.layoutManager,
                drag_item,
                drag_item.parent,
                function() {
                    drag_proxy = null;
                }
            );

        } else {
            if(drag_item.parent.config.tabsNotDraggable) {
                this._layoutManager.emit('tabDragNotAllowed', this);
                return;
            }

            drag_proxy = new lm.controls.DragProxy(
                x,
                y,
                this._dragListener,
                this._layoutManager,
                drag_item,
                drag_item.parent,
                function() {
                    drag_proxy = null;
                }
            );

        }

	},
	_ignoreNextClick: function() {
		//ignore next click in case user uses double-click to uncollapse the panel
		this._layoutManager.setIgnoreNextClick();
	},
	/**
	 * Callback when the tab is clicked
	 *
	 * @param {jQuery DOM event} event
	 * 
	 * @private
	 * @returns {void}
	 */
	_onTabClick: function( event ) {
		// left mouse button
		if(this._layoutManager.ignoreNextClick()) return;

		if( event.button === 0 ) {
		    if(this.header.parent.getActiveContentItem() != this.contentItem) {
                this.header.parent.setActiveContentItem(this.contentItem);

                if (this.header.parent.isDocked) {
                    if(!this.header.parent.isDockedOpen()) {
						this.header.parent._activeContentItemBeforeCollapse = null;
						this.header.parent.openDocked();
						this._ignoreNextClick();
					}
                }
            } else {
                if(!this.header.parent.config.dontCollapseOnActiveTabClick) {
                    if (!this.header.parent.isDockedOpen()) {
						this.header.parent._activeContentItemBeforeCollapse = null;
                        this.header.parent.openDocked();
						this.header.parent.setActiveContentItem(this.contentItem);
						this._ignoreNextClick();
                    } else {
                        //this._layoutManager.emit('singleClickOnActiveTab', this);
                        /*
                        if (!this.header.parent.isDocked) {
                            this.header.parent.setDocked(true);
                        } else {
                            this.header.parent.closeDocked();
                        }
                        this._layoutManager.emit('stackCollapsedOnActiveTabClick', this);
                        */
                    }
                } else {
                    this.header.parent.emit( 'activeContentItemClicked', this.contentItem );
                }
            }

		// middle mouse button
		} else if( event.button === 1 && this.contentItem.config.isClosable ) {
			this._onCloseClick( event );
		}
	},
    _onTabDoubleClick: function( event ) {
        // left mouse button
		if(this._layoutManager.ignoreNextClick()) return;

        if( event.button === 0 ) {

            if (!this.header.parent.config.dontCollapseOnActiveTabClick) {
                //if (this.header.parent.isDocked) {
                    if (!this.header.parent.isDockedOpen()) {
                        //is closed. open it
                        this.header.parent.setActiveContentItem(this.contentItem);
                        this.header.parent._activeContentItemBeforeCollapse = null;
                        this.header.parent.openDocked();
                    } else {
                        //close it
                        if (!this.header.parent.isDocked) {
                            this.header.parent.setDocked(true);
                        } else {
                            this.header.parent.closeDocked();
                        }
						this.header.parent.autoCollapsed = false;
                        this._layoutManager.emit('stackCollapsedOnActiveTabClick', this);
                    }
               // }
            }
        }
    },

	/**
	 * Callback when the tab's close button is
	 * clicked
	 *
	 * @param   {jQuery DOM event} event
	 *
	 * @private
	 * @returns {void}
	 */
	_onCloseClick: function( event ) {
		event.stopPropagation();
        if(this.onBeforeClose) {
            if(!this.onBeforeClose()) return;
        }
		this.header.parent.removeChild( this.contentItem );
	}
});

lm.controls.TransitionIndicator = function() {
	this._element = $( '<div class="lm_transition_indicator"></div>' );
	$( document.body ).append( this._element );

	this._toElement = null;
	this._fromDimensions = null;
	this._totalAnimationDuration = 200;
	this._animationStartTime = null;
};

lm.utils.copy( lm.controls.TransitionIndicator.prototype, {
	destroy: function() {
		this._element.remove();
	},

	transitionElements: function( fromElement, toElement ) {
		/**
		 * TODO - This is not quite as cool as expected. Review.
		 */
		return;
		this._toElement = toElement;
		this._animationStartTime = lm.utils.now();
		this._fromDimensions = this._measure( fromElement );
		this._fromDimensions.opacity = 0.8;
		this._element.show().css( this._fromDimensions );
		lm.utils.animFrame( lm.utils.fnBind( this._nextAnimationFrame, this ) );
	},

	_nextAnimationFrame: function() {
		var toDimensions = this._measure( this._toElement ),
			animationProgress = ( lm.utils.now() - this._animationStartTime ) / this._totalAnimationDuration,
			currentFrameStyles = {},
			cssProperty;

		if( animationProgress >= 1 ) {
			this._element.hide();
			return;
		}

		toDimensions.opacity = 0;

		for( cssProperty in this._fromDimensions ) {
			currentFrameStyles[ cssProperty ] = this._fromDimensions[ cssProperty ] +
			( toDimensions[ cssProperty] - this._fromDimensions[ cssProperty ] ) *
			animationProgress;
		}
		
		this._element.css( currentFrameStyles );
		lm.utils.animFrame( lm.utils.fnBind( this._nextAnimationFrame, this ) );
	},

	_measure: function( element ) {
		var offset = element.offset();

		return {
			left: offset.left,
			top: offset.top,
			width: element.outerWidth(),
			height: element.outerHeight()
		};
	}
});

/**
 * This is the baseclass that all content items inherit from.
 * Most methods provide a subset of what the sub-classes do.
 *
 * It also provides a number of functions for tree traversal
 *
 * @param {lm.LayoutManager} layoutManager
 * @param {item node configuration} config
 * @param {lm.item} parent
 *
 * @event stateChanged
 * @event beforeItemDestroyed
 * @event itemDestroyed
 * @event itemCreated
 * @event componentCreated
 * @event rowCreated
 * @event columnCreated
 * @event stackCreated
 *
 * @constructor
 */
lm.items.AbstractContentItem = function( layoutManager, config, parent ) {
	lm.utils.EventEmitter.call( this );

	this.config = this._extendItemNode( config );
	this.type = config.type;
	this.contentItems = [];
	this.parent = parent;

	this.isInitialised = false;
	this.isMaximised = false;
	this.isRoot = false;
	this.isRow = false;
	this.isColumn = false;
	this.isStack = false;
	this.isComponent = false;
    this.isFloating = false;
	this.rememberedParent = null;
	this.rememberedIndex = null;

	this.layoutManager = layoutManager;
	this._pendingEventPropagations = {};
	this._throttledEvents = [ 'stateChanged' ];

	this.on( lm.utils.EventEmitter.ALL_EVENT, this._propagateEvent, this );
	
	if( config.content ) {
		this._createContentItems( config );
	}
};

lm.utils.copy( lm.items.AbstractContentItem.prototype, {
	
	/**
	 * Set the size of the component and its children, called recoursively
	 *
	 * @abstract
	 * @returns void
	 */
	setSize: function() {
		throw new Error( 'Abstract Method' );
	},

	/**
	 * Calls a method recoursively downwards on the tree
	 *
	 * @param   {String} functionName      the name of the function to be called
	 * @param   {[Array]}functionArguments optional arguments that are passed to every function
	 * @param   {[bool]} bottomUp          Call methods from bottom to top, defaults to false
	 * @param   {[bool]} skipSelf          Don't invoke the method on the class that calls it, defaults to false
	 *
	 * @returns {void}
	 */
	callDownwards: function( functionName, functionArguments, bottomUp, skipSelf ) {
		var i;

		if(functionName == 'setSize' && this.layoutManager && this.layoutManager._skipUpdateSize) return;

		if( bottomUp !== true && skipSelf !== true ) {
			var r = this[ functionName ].apply( this, functionArguments || [] );
            if(r === 'cancel') return;
		}
		for( i = 0; i < this.contentItems.length; i++ ) {
			this.contentItems[ i ].callDownwards( functionName, functionArguments, bottomUp );
		}
		if( bottomUp === true && skipSelf !== true ) {
			this[ functionName ].apply( this, functionArguments || [] );
		}
	},
	rememberPosition: function() {
		this.rememberedParent = this.parent;
		if(this.parent) {
			this.rememberedIndex = this.parent.contentItems.indexOf(this);
			if(this.rememberedIndex < 0) {
				//strange
				this.rememberedIndex = null;
				this.rememberedParent = null;
			}
		}
	},
	restoreAtRememberedPosition: function(current_parent, ignore_floating_or_visible) {
		//return false;
		var parent_ok = false;
		if(this.rememberedParent) {
			var p = this.rememberedParent;
			while(true) {
				if(!p.element.get(0).parentNode) break;

				if(p === this.layoutManager.root) {
					parent_ok = true;
					break;
				}
				if(!p) break;
				p = p.parent || null;
			}
		}
		if(this.rememberedParent && parent_ok && (ignore_floating_or_visible || (this.rememberedParent.element.is(':visible') && this.rememberedParent.parent.element.closest('.lm_floating').length === 0))) {
			//parent is still there
			if(this.rememberedParent === current_parent) {
				return false; //don't add to same position
			}
			try {
				//debugger;
				this.rememberedParent.addChild(this, this.rememberedIndex);
				return true;
			} catch(err) {
				console.log('Restore position error ', err)
			}
		}
		return false;
	},
	/**
	 * Removes a child node (and its children) from the tree
	 *
	 * @param   {lm.items.ContentItem} contentItem
	 *
	 * @returns {void}
	 */
	removeChild: function( contentItem, keepChild, dummy, keepEmpty ) {
		
		/*
		 * Get the position of the item that's to be removed within all content items this node contains
		 */
		var index = lm.utils.indexOf( contentItem, this.contentItems );

		/*
		 * Make sure the content item to be removed is actually a child of this item
		 */
		if( index === -1 ) {
			throw new Error( 'Can\'t remove child item. Unknown content item' );
		}

		/**
		 * Call ._$destroy on the content item. This also calls ._$destroy on all its children
		 */
		if( keepChild !== true ) {
			this.contentItems[ index ]._$destroy();
		} else {
            this.contentItems[ index ].element.detach();
        }
		
		/**
		 * Remove the content item from this nodes array of children
		 */
		this.contentItems.splice( index, 1 );

		/**
		 * Remove the item from the configuration
		 */
		this.config.content.splice( index, 1 );

		/**
		 * If this node still contains other content items, adjust their size
		 */
		if( this.contentItems.length > 0 ) {
			this.callDownwards( 'setSize' );

		/**
		 * If this was the last content item, remove this node as well
		 */
		} else if( !(this instanceof lm.items.Root) && this.config.isClosable === true && !keepEmpty) {
			this.parent.removeChild( this );
		}
	},

	/**
	 * Sets up the tree structure for the newly added child
	 * The responsibility for the actual DOM manipulations lies
	 * with the concrete item
	 *
	 * @param {lm.items.AbstractContentItem} contentItem
	 * @param {[Int]} index If omitted item will be appended
	 */
	addChild: function( contentItem, index ) {
		if ( index === undefined ) {
			index = this.contentItems.length;
		}

		var idx = this.contentItems.indexOf(contentItem);

		if(idx >= 0) {
			if(idx === index) {
				//nothing
			} else if(idx < index) {
				index--;
			}
			this.contentItems.splice( idx, 1);
		}
		this.contentItems.splice( index, 0, contentItem );

		if( this.config.content === undefined ) {
			this.config.content = [];
		}

		this.config.content.splice( index, 0, contentItem.config );
		contentItem.parent = this;
		
		if( contentItem.parent.isInitialised === true && contentItem.isInitialised === false ) {
			contentItem._$init();
		}
	},

	/**
	 * Replaces oldChild with newChild. This used to use jQuery.replaceWith... which for
	 * some reason removes all event listeners, so isn't really an option.
	 *
	 * @param   {lm.item.AbstractContentItem} oldChild
	 * @param   {lm.item.AbstractContentItem} newChild
	 *
	 * @returns {void}
	 */
	replaceChild: function( oldChild, newChild, _$destroyOldChild ) {

		newChild = this.layoutManager._$normalizeContentItem( newChild );

		var index = lm.utils.indexOf( oldChild, this.contentItems ),
			parentNode = oldChild.element[ 0 ].parentNode;

		if( index === -1 ) {
			throw new Error( 'Can\'t replace child. oldChild is not child of this' );
		}

		parentNode.replaceChild( newChild.element[ 0 ], oldChild.element[ 0 ] );

		/*
		 * Optionally destroy the old content item
		 */
		if( _$destroyOldChild === true ) {
			oldChild.parent = null;
			oldChild._$destroy();
		}
		
		/*
		 * Wire the new contentItem into the tree
		 */
		this.contentItems[ index ] = newChild;
		newChild.parent = this;

		//TODO This doesn't update the config... refactor to leave item nodes untouched after creation
		if( newChild.parent.isInitialised === true && newChild.isInitialised === false ) {
			newChild._$init();
		}

		this.callDownwards( 'setSize' );
	},

	/**
	 * Convenience method. 
	 * Shorthand for this.parent.removeChild( this )
	 *
	 * @returns {void}
	 */
	remove: function() {
		this.parent.removeChild( this );
	},

	/**
	 * Removes the component from the layout and creates a new 
	 * browser window with the component and its children inside
	 *
	 * @returns {lm.controls.BrowserPopout}
	 */
	popout: function() {
		var browserPopout = this.layoutManager.createPopout( this );
		this.emitBubblingEvent( 'stateChanged' );
		return browserPopout;
	},

	/**
	 * Maximises the Item or minimises it if it is already maximised
	 *
	 * @returns {void}
	 */
	toggleMaximise: function() {
		if( this.isMaximised === true ) {
			this.layoutManager._$minimiseItem( this );
		} else {
			this.layoutManager._$maximiseItem( this );
		}

		this.isMaximised = !this.isMaximised;
		this.emitBubblingEvent( 'stateChanged' );
	},

	/**
	 * Selects the item if it is not already selected
	 *
	 * @returns {void}
	 */
	select: function() {
		if( this.layoutManager.selectedItem !== this ) {
			this.layoutManager.selectItem( this, true );
			this.element.addClass( 'lm_selected' );
		}
	},

	/**
	 * De-selects the item if it is selected
	 *
	 * @returns {void}
	 */
	deselect: function() {
		if( this.layoutManager.selectedItem === this ) {
			this.layoutManager.selectedItem = null;
			this.element.removeClass( 'lm_selected' );
		}
	},

	/**
	 * Set this component's title
	 * 
	 * @public
	 * @param {String} title
	 *
	 * @returns {void}
	 */
	setTitle: function( title ) {
		this.config.title = title;
		this.emit( 'titleChanged', title );
		this.emit( 'stateChanged' );
	},

	/**
	 * Checks whether a provided id is present
	 *
	 * @public
	 * @param   {String}  id
	 *
	 * @returns {Boolean} isPresent
	 */
	hasId: function( id ) {
		if( !this.config.id ) {
			return false;
		} else if( typeof this.config.id === 'string' ) {
			return this.config.id === id;
		} else if( this.config.id instanceof Array ) {
			return lm.utils.indexOf( id, this.config.id ) !== -1;
		}
	},

	/**
	 * Adds an id. Adds it as a string if the component doesn't
	 * have an id yet or creates/uses an array
	 *
	 * @public
	 * @param {String} id
	 *
	 * @returns {void}
	 */
	addId: function( id ) {
		if( this.hasId( id ) ) {
			return;
		}

		if( !this.config.id ) {
			this.config.id = id;
		} else if( typeof this.config.id === 'string' ) {
			this.config.id = [ this.config.id, id ];
		} else if( this.config.id instanceof Array ) {
			this.config.id.push( id );
		}
	},

	/**
	 * Removes an existing id. Throws an error
	 * if the id is not present
	 *
	 * @public
	 * @param   {String} id
	 *
	 * @returns {void}
	 */
	removeId: function( id ) {
		if( !this.hasId( id ) ) {
			throw new Error( 'Id not found' );
		}
		
		if( typeof this.config.id === 'string' ) {
			delete this.config.id;
		} else if( this.config.id instanceof Array ) {
			var index = lm.utils.indexOf( id, this.config.id );
			this.config.id.splice( index, 1 );
		}
	},

	/****************************************
	* SELECTOR
	****************************************/
	getItemsByFilter: function( filter ) {
		var result = [],
			next = function( contentItem ) {
				for( var i = 0; i < contentItem.contentItems.length; i++ ) {
					
					if( filter( contentItem.contentItems[ i ] ) === true ) {
						result.push( contentItem.contentItems[ i ] );
					}

					next( contentItem.contentItems[ i ] );
				}
			};

		next( this );
		return result;
	},

	getItemsById: function( id ) {
		return this.getItemsByFilter( function( item ){
			if( item.config.id instanceof Array ) {
				return lm.utils.indexOf( id, item.config.id ) !== -1;
			} else {
				return item.config.id === id;
			}
		});
	},

	getItemsByType: function( type ) {
		return this._$getItemsByProperty( 'type', type );
	},

	getComponentsByName: function( componentName ) {
		var components = this._$getItemsByProperty( 'componentName', componentName ),
			instances = [],
			i;

		for( i = 0; i < components.length; i++ ) {
			instances.push( components[ i ].instance );
		}

		return instances;
	},

	findItemWithDOMElement: function(el) {
		var r = this.getItemsByFilter(function(item) {
			return item.element.get(0) === el;
		})
		return r.length ? r[0] : null;
	},

    updateSplitters: function() {

    },

	/****************************************
	* PACKAGE PRIVATE
	****************************************/
	_$getItemsByProperty: function( key, value ) {
		return this.getItemsByFilter( function( item ){
			return item[ key ] === value;
		});
	},

	_$setParent: function( parent ) {
		this.parent = parent;
	},
    _$getDropZoneSegment: function( x, y ) {
        return 'body';
    },
	_$highlightDropZone: function( x, y, segment, area, def_segment, win ) {
		this.layoutManager.dropTargetIndicator.highlightArea( area, win );
	},

	_$onDrop: function( contentItem, dragHelper ) {
		this.addChild( contentItem, dragHelper._area.childPos || 0 );
	},

	_$hide: function(skip_update_size) {
		this._callOnActiveComponents( 'hide' );
		this.element.hide();
        if(!skip_update_size) {
            this.layoutManager.updateSize();
        }
	},

	_$show: function() {
		this._callOnActiveComponents( 'show' );
		this.element.show();
		this.layoutManager.updateSize();
	},

	_callOnActiveComponents: function( methodName ) {
		var stacks = this.getItemsByType( 'stack' ),
			activeContentItem,
			i;

		for( i = 0; i < stacks.length; i++ ) {
			activeContentItem = stacks[ i ].getActiveContentItem();

			if( activeContentItem && activeContentItem.isComponent ) {
				activeContentItem.container[ methodName ]();
			}
		}
	},
	
	/**
	 * Destroys this item ands its children
	 *
	 * @returns {void}
	 */
	_$destroy: function() {
		this.emitBubblingEvent( 'beforeItemDestroyed' );
		this.callDownwards( '_$destroy', [], true, true );
		this.element.remove();
		this.emitBubblingEvent( 'itemDestroyed' );
		this.rememberedParent = null;
	},

	/**
	 * Returns the area the component currently occupies in the format
	 *
	 * {
	 *		x1: int
	 *		xy: int
	 *		y1: int
	 *		y2: int
	 *		contentItem: contentItem
	 * }
	 */
	_$getArea: function( element ) {
		element = element || this.element;

		var offset = element.offset(),
			width = element.width(),
			height = element.height();

		return {
			x1: offset.left,
			y1: offset.top,
			x2: offset.left + width,
			y2: offset.top + height,
			surface: width * height,
			contentItem: this,
			win: element.get(0).ownerDocument.defaultView
		};
	},

	/**
	 * The tree of content items is created in two steps: First all content items are instantiated,
	 * then init is called recoursively from top to bottem. This is the basic init function,
	 * it can be used, extended or overwritten by the content items
	 * 
	 * Its behaviour depends on the content item
	 *
	 * @package private
	 * 
	 * @returns {void}
	 */
	_$init: function() {
		var i;
		this.setSize();

		for( i = 0; i < this.contentItems.length; i++ ) {
			this.childElementContainer.append( this.contentItems[ i ].element );
		}

		this.isInitialised = true;
		this.emitBubblingEvent( 'itemCreated' );
		this.emitBubblingEvent( this.type + 'Created' );
	},

	/**
	 * Emit an event that bubbles up the item tree.
	 *
	 * @param   {String} name The name of the event
	 *
	 * @returns {void}
	 */
	emitBubblingEvent: function( name ) {
		var event = new lm.utils.BubblingEvent( name, this );
		this.emit( name, event );
	},

	/**
	 * Private method, creates all content items for this node at initialisation time
	 * PLEASE NOTE, please see addChild for adding contentItems add runtime
	 * @private
	 * @param   {configuration item node} config
	 *
	 * @returns {void}
	 */
	_createContentItems: function( config ) {
		var oContentItem, i;

		if( !( config.content instanceof Array ) ) {
			throw new lm.errors.ConfigurationError( 'content must be an Array', config );
		}

		for( i = 0; i < config.content.length; i++ ) {
			oContentItem = this.layoutManager.createContentItem( config.content[ i ], this );
			this.contentItems.push( oContentItem );
		}
	},

	/**
	 * Extends an item configuration node with default settings
	 * @private
	 * @param   {configuration item node} config
	 *
	 * @returns {configuration item node} extended config
	 */
	_extendItemNode: function( config ) {
		
		for( var key in lm.config.itemDefaultConfig ) {
			if( config[ key ] === undefined ) {
				config[ key ] = lm.config.itemDefaultConfig[ key ];
			}
		}
		
		return config;
	},

	/**
	 * Called for every event on the item tree. Decides whether the event is a bubbling
	 * event and propagates it to its parent
	 *
	 * @param	{String} name the name of the event
	 * @param   {lm.utils.BubblingEvent} event 
	 *
	 * @returns {void}
	 */
	_propagateEvent: function( name, event ) {
		if( event instanceof lm.utils.BubblingEvent &&
			event.isPropagationStopped === false &&
			this.isInitialised === true ) {
			
			/**
			 * In some cases (e.g. if an element is created from a DragSource) it
			 * doesn't have a parent and is not below root. If that's the case
			 * propagate the bubbling event from the top level of the substree directly
			 * to the layoutManager
			 */
			if( this.isRoot === false && this.parent ) {
				this.parent.emit.apply( this.parent, Array.prototype.slice.call( arguments, 0 ) );
			} else {
				this._scheduleEventPropagationToLayoutManager( name, event );
			}
		}
	},

	/**
	 * All raw events bubble up to the root element. Some events that
	 * are propagated to - and emitted by - the layoutManager however are
	 * only string-based, batched and sanitized to make them more usable
	 *
	 * @param {String} name the name of the event
	 *
	 * @private
	 * @returns {void}
	 */
	_scheduleEventPropagationToLayoutManager: function( name, event ) {
		if( lm.utils.indexOf( name, this._throttledEvents ) === -1 ) {
			this.layoutManager.emit( name, event.origin );
		} else {
			if( this._pendingEventPropagations[ name ] !== true ) {
				this._pendingEventPropagations[ name ] = true;
				lm.utils.animFrame( lm.utils.fnBind( this._propagateEventToLayoutManager, this, [ name, event ] ) );
			}
		}
		
	},

	/**
	 * Callback for events scheduled by _scheduleEventPropagationToLayoutManager
	 *
	 * @param {String} name the name of the event
	 *
	 * @private
	 * @returns {void}
	 */
	_propagateEventToLayoutManager: function( name, event ) {
		this._pendingEventPropagations[ name ] = false;
		this.layoutManager.emit( name, event );
	}
});

/**
 * @param {[type]} layoutManager [description]
 * @param {[type]} config      [description]
 * @param {[type]} parent        [description]
 */
lm.items.Component = function( layoutManager, config, parent ) {
	lm.items.AbstractContentItem.call( this, layoutManager, config, parent );

	var ComponentConstructor = layoutManager.getComponent( this.config.componentName ),
		componentConfig = $.extend( true, {}, this.config.componentState || {} );

	componentConfig.componentName = this.config.componentName;
	this.componentName = this.config.componentName;

	if( this.config.title === '' ) {
		this.config.title = this.config.componentName;
	}

	this.isComponent = true;
	this.container = new lm.container.ItemContainer( this.config, this, layoutManager );
	this.instance = new ComponentConstructor( this.container, componentConfig  );
	this.element = this.container._element;
};

lm.utils.extend( lm.items.Component, lm.items.AbstractContentItem );

lm.utils.copy( lm.items.Component.prototype, {

	close: function() {
		this.parent.removeChild( this );
	},

	setSize: function() {
		this.container._$setSize(0, 0);
        this.emit( 'resize ');
	    return;

	    var _this = this;
	    //fastdom.measure(function() {
	        var w = _this.element.width();
            var h = _this.element.height();

            //fastdom.mutate(function() {
                _this.container._$setSize(w, h);
                _this.emit( 'resize ');
            //})
       // })
        return;
		this.container._$setSize( this.element.width(), this.element.height() );
		this.emit( 'resize ');
	},

	_$init: function() {
		lm.items.AbstractContentItem.prototype._$init.call( this );
		this.container.emit( 'open' );
	},

	_$hide: function(skip_update_size) {
		this.container.hide();
		lm.items.AbstractContentItem.prototype._$hide.call( this, skip_update_size );
	},

	_$show: function() {
		this.container.show();
		lm.items.AbstractContentItem.prototype._$show.call( this );
	},

	_$destroy: function() {
		this.container.emit( 'destroy' );
		lm.items.AbstractContentItem.prototype._$destroy.call( this );
	},

	/**
	 * Dragging onto a component directly is not an option
	 *
	 * @returns null
	 */
	_$getArea: function() {
		return null;
	}
});
lm.items.Root = function( layoutManager, config, containerElement ) {
	lm.items.AbstractContentItem.call( this, layoutManager, config, null );
	this.isRoot = true;
	this.type = 'root';
	this.element = $( '<div class="lm_goldenlayout lm_item lm_root"></div>' );
	this.childElementContainer = this.element;
	this._containerElement = containerElement;
	this._containerElement.append( this.element );
};

lm.utils.extend( lm.items.Root, lm.items.AbstractContentItem );

lm.utils.copy( lm.items.Root.prototype, {
	addChild: function( contentItem ) {
		if( this.contentItems.length > 0 ) {
			throw new Error( 'Root node can only have a single child' );
		}

		contentItem = this.layoutManager._$normalizeContentItem( contentItem, this );
		this.childElementContainer.append( contentItem.element );
		lm.items.AbstractContentItem.prototype.addChild.call( this, contentItem );
		
		this.callDownwards( 'setSize' );
		this.emitBubblingEvent( 'stateChanged' );
	},

	setSize: function() {
		var width = this._containerElement.width(),
			height = this._containerElement.height();

		this.element.width( width );
		this.element.height( height );

		/*
		 * Root can be empty
		 */
		if( this.contentItems[ 0 ] ) {
			this.contentItems[ 0 ].element.width( width );
			this.contentItems[ 0 ].element.height( height );
		}
	},

	_$onDrop: function( contentItem ) {
		var stack;

		if( contentItem.isComponent === true ) {
			stack = this.layoutManager.createContentItem( {type: 'stack' }, this );
			stack.addChild( contentItem );
			this.addChild( stack );
		} else {
			this.addChild( contentItem );
		}
	}
});



lm.items.RowOrColumn = function( isColumn, layoutManager, config, parent ) {
	lm.items.AbstractContentItem.call( this, layoutManager, config, parent );

	this.isRow = !isColumn;
	this.isColumn = isColumn;
	
	this.element = $( '<div class="lm_item lm_' + ( isColumn ? 'column' : 'row' ) + '"></div>' );
	this.childElementContainer = this.element;
	this._splitterSize = 0; //layoutManager.config.dimensions.borderWidth; splitter is on top
	this._isColumn = isColumn;
	this._dimension = isColumn ? 'height' : 'width';
	this._splitter = [];
	this._splitterPosition = null;
	this._splitterMinPosition = null;
	this._splitterMaxPosition = null;
};

lm.utils.extend( lm.items.RowOrColumn, lm.items.AbstractContentItem );

lm.utils.copy( lm.items.RowOrColumn.prototype, {
	
	/**
	 * Add a new contentItem to the Row or Column
	 *
	 * @param {lm.item.AbstractContentItem} contentItem
	 * @param {[int]} index The position of the new item within the Row or Column.
	 *                      If no index is provided the item will be added to the end
	 * @param {[bool]} _$suspendResize If true the items won't be resized. This will leave the item in
	 *                                 an inconsistent state and is only intended to be used if multiple
	 *                                 children need to be added in one go and resize is called afterwards
	 *
	 * @returns {void}
	 */
	addChild: function( contentItem, index, _$suspendResize, force_main_win ) {
	
		var newItemSize, itemSize, i, splitterElement;
	
		contentItem = this.layoutManager._$normalizeContentItem( contentItem, this );

		if( index === undefined ) {
			index = this.contentItems.length;

			if(force_main_win) {
				for(var i = 0; i < this.contentItems.length; i++) {
					if(this.contentItems[i].element.get(0).ownerDocument.defaultView === window) {
						index = i + 1;
					} else {

					}
				}
			}
		}

		//Maybe needs stack if is Component?
		if(contentItem.isComponent) {
			var new_stack = this.layoutManager._$normalizeContentItem({
				title: 'Stack',
				type: 'stack',
				width: 17
			});

			contentItem.element.detach();

			new_stack.addChild(contentItem);
			contentItem = new_stack;
		}
	
		if( this.contentItems.length > 0 ) {

			if(index > this.contentItems.length) {
				index = this.contentItems.length;
			}
			splitterElement = this._createSplitter( Math.max( 0, index - 1 ) ).element;

			if (index > 0) {
				//take care of floating
				while(this.contentItems[index - 1].isFloating && index > 0) {
					index--;
				}
				if(index > 0) {
					this.contentItems[index - 1].element.after(splitterElement);
					splitterElement.after(contentItem.element);
				}
			}
			if(index === 0) {
				//error if 0 is floating
				this.element.prepend(splitterElement);
				//this.contentItems[0].element.before(splitterElement);
				splitterElement.before(contentItem.element);
			}

			if(contentItem.config.noSplitter) {
				splitterElement.hide();
			}
		} else {
			this.childElementContainer.append( contentItem.element );
		}
		
		lm.items.AbstractContentItem.prototype.addChild.call( this, contentItem, index );
	
		newItemSize = ( 1 / this.contentItems.length ) * 100;
		
		if( _$suspendResize === true ) {
			this.emitBubblingEvent( 'stateChanged' );
			return;
		}
		
		for( i = 0; i < this.contentItems.length; i++ ) {
			if( this.contentItems[ i ] === contentItem ) {
				contentItem.config[ this._dimension ] = newItemSize;
			} else {
				if(this.contentItems[ i ].isFloating) continue;
				if(this.contentItems[ i ].config.isHidden) continue;

				itemSize = this.contentItems[ i ].config[ this._dimension ] *= ( 100 - newItemSize ) / 100;
				this.contentItems[ i ].config[ this._dimension ] = itemSize;
			}
		}
		
		this.callDownwards( 'setSize' );
		this.emitBubblingEvent( 'stateChanged' );
	},

	/**
	 * Removes a child of this element
	 *
	 * @param   {lm.items.AbstractContentItem} contentItem
	 * @param   {boolean} keepChild   If true the child will be removed, but not destroyed
	 *
	 * @returns {void}
	 */
	removeChild: function( contentItem, keepChild, dummy, keepEmpty ) {
		var removedItemSize = contentItem.config[ this._dimension ],
			index = lm.utils.indexOf( contentItem, this.contentItems ),
			splitterIndex = Math.max( index - 1, 0 ),
			i,
			childItem;

		if( index === -1 ) {
			throw new Error( 'Can\'t remove child. ContentItem is not child of this Row or Column' );
		}
		
		/**
		 * Remove the splitter before the item or after if the item happens
		 * to be the first in the row/column
		 */
		if( this._splitter[ splitterIndex ] ) {
			this._splitter[ splitterIndex ]._$destroy();
			this._splitter.splice( splitterIndex, 1 );
		}
		
		/**
		 * Allocate the space that the removed item occupied to the remaining items
		 */
		for( i = 0; i < this.contentItems.length; i++ ) {
			if(this.contentItems[ i ].isFloating) continue;
			if(this.contentItems[ i ].config.isHidden) continue;

			if( this.contentItems[ i ] !== contentItem ) {
				this.contentItems[ i ].config[ this._dimension ] += removedItemSize / ( this.contentItems.length - 1 );
			}
		}
	
		lm.items.AbstractContentItem.prototype.removeChild.call( this, contentItem, keepChild, dummy, keepEmpty );

		if( this.contentItems.length === 1 && this.config.isClosable === true && !this.isFloating) {
			childItem = this.contentItems[ 0 ];
			if(this.isFloating) {
				childItem.isFloating = true;
				childItem.config.isFloating = true;
			}
			this.contentItems = [];
			this.parent.replaceChild( this, childItem, true );
		} else {
			this.callDownwards( 'setSize' );
			this.emitBubblingEvent( 'stateChanged' );
		}
	},
	
	/**
	 * Replaces a child of this Row or Column with another contentItem
	 *
	 * @param   {lm.items.AbstractContentItem} oldChild
	 * @param   {lm.items.AbstractContentItem} newChild
	 *
	 * @returns {void}
	 */
	replaceChild: function( oldChild, newChild ) {
		var size = oldChild.config[ this._dimension ];
		lm.items.AbstractContentItem.prototype.replaceChild.call( this, oldChild, newChild );
		newChild.config[ this._dimension ] = size;
		this.callDownwards( 'setSize' );
		this.emitBubblingEvent( 'stateChanged' );
	},
	
	/**
	 * Called whenever the dimensions of this item or one of its parents change
	 *
	 * @returns {void}
	 */
	setSize: function() {
		if(this.config.isFloating && !this.element.is(':visible')) return 'cancel';

		if( this.contentItems.length > 0 ) {
			this._calculateRelativeSizes();
			this._setAbsoluteSizes();
		}
		this.emitBubblingEvent( 'stateChanged' );
		this.emit( 'resize' );
	},
	
	/**
	 * Invoked recoursively by the layout manager. AbstractContentItem.init appends
	 * the contentItem's DOM elements to the container, RowOrColumn init adds splitters
	 * in between them
	 *
	 * @package private
	 * @override AbstractContentItem._$init
	 * @returns {void}
	 */
	_$init: function() {
		if( this.isInitialised === true ) return;

		var i;

        lm.items.AbstractContentItem.prototype._$init.call( this );

        for( i = 0; i < this.contentItems.length - 1; i++ ) {
        	var s = this._createSplitter( i ).element;

			this.contentItems[ i ].element.after( s );

			if(i + 1 < this.contentItems.length && this.contentItems[ i + 1].config.noSplitter) {
				s.hide().addClass('never-show');
			}
		}
    },
	
	/**
	 * Turns the relative sizes calculated by _calculateRelativeSizes into
	 * absolute pixel values and applies them to the children's DOM elements
	 *
	 * Assigns additional pixels to counteract Math.floor
	 * 
	 * @private
	 * @returns {void}
	 */
	_setAbsoluteSizes: function() {
		var i,
			totalSplitterSize = ( this.contentItems.length - 1 ) * this._splitterSize,
			totalWidth = this.element.width(),
			totalHeight = this.element.height(),
			totalAssigned = 0,
			additionalPixel,
			itemSize,
			itemSizes = [];

        var x = 0;
		var y = 0;

		var ss = this._splitterSize;
		//if(this._isColumn) ss = 6;

		totalSplitterSize = ss * this.element.find('>.lm_splitter:visible').length;

		if( this._isColumn ) {
			totalHeight -= totalSplitterSize;
		} else {
			totalWidth -= totalSplitterSize;
		}
	
		for( i = 0; i < this.contentItems.length; i++ ) {
			itemSizes.push(0);

            if(this.contentItems[ i ].isFloating) continue;

			if( this._isColumn ) {
				itemSize = Math.floor( totalHeight * ( this.contentItems[ i ].config.height / 100 ) );
			} else {
			    //console.log(i + ' = ' + this.contentItems[ i ].config.width);
				itemSize = Math.floor( totalWidth * ( this.contentItems[ i ].config.width / 100 ) );
			}

			totalAssigned += itemSize;
			itemSizes[i] = itemSize;
		}

		additionalPixel = ( this._isColumn ? totalHeight : totalWidth ) - totalAssigned;

        //console.log( itemSizes);

		for( i = 0; i < this.contentItems.length; i++ ) {

		    var shown = true;

            if(this.contentItems[ i ].isFloating || this.contentItems[ i ].config.isHidden) {
                shown = false;
            }

			if(shown && additionalPixel - i > 0 ) {
				itemSizes[ i ]++;
			}

			if( this._isColumn ) {
			    if(shown) {
                    this.contentItems[i].element.width(totalWidth);
                    this.contentItems[i].element.height(itemSizes[i]);
                }
				var $splitter = this.contentItems[ i ].element.prev();
				if($splitter.is('.lm_splitter:visible')) {
					$splitter.css('top', (y - 8) + 'px');
					y += this._splitterSize;
				}
				if(shown) {
                    y += itemSizes[i];
                }

			} else {
			    if(shown) {
                    this.contentItems[i].element.width(itemSizes[i]);
                    this.contentItems[i].element.height(totalHeight);
                    this.contentItems[i].element.css('left', x + 'px');
                    x += itemSizes[i];
                }
                var $splitter = this.contentItems[ i ].element.next();
                if($splitter.is('.lm_splitter:visible')) {
                    $splitter.css('left', x + 'px');
                    x += this._splitterSize;
                }
			}
		}

		//this.updateSplitters();
	},

	updateSplitters: function() {
		this._splitter.forEach(function(s) {
			s.update();
		})
	},
	
	/**
	 * Calculates the relative sizes of all children of this Item. The logic
	 * is as follows:
	 * 
	 * - Add up the total size of all items that have a configured size
	 *
	 * - If the total == 100 (check for floating point errors)
	 *		Excellent, job done
	 * 
	 * - If the total is > 100, 
	 *		set the size of items without set dimensions to 1/3 and add this to the total
	 *		set the size off all items so that the total is hundred relative to their original size 
	 *
	 * - If the total is < 100
	 *		If there are items without set dimensions, distribute the remainder to 100 evenly between them
	 *		If there are no items without set dimensions, increase all items sizes relative to
	 *		their original size so that they add up to 100
	 *
	 * @private
	 * @returns {void}
	 */
	_calculateRelativeSizes: function() {
		
		var i,
			total = 0,
			itemsWithoutSetDimension = [],
			dimension = this._isColumn ? 'height' : 'width',
			fixedDimension = this._isColumn ? 'fixedHeight' : 'fixedWidth';

        var my_size = this._isColumn ? this.element.height() : this.element.width();

        if(my_size == 0) return;

        var dockedClosedSize = 35.0 / my_size * 100.0;

        var fixedTotal = 0; //don't add size to fixed els
	
		for( i = 0; i < this.contentItems.length; i++ ) {

            if(this.contentItems[ i ].isFloating) continue;
            if(this.contentItems[ i ].config.isHidden) continue;

            if(this.contentItems[ i ].config.debug) {
                debugger;
            }

			var is_wrong_dim = false;

			if(!this.contentItems[ i ].isCollapsedHorizontally) {
				if(dimension === 'height') {
					is_wrong_dim = true;
				}
			}

			/*
			if(this.contentItems[i].isRow || this.contentItems[i].isColumn) {
			    var stacks = this.contentItems[i].getItemsByFilter(function(i) { return i.type == 'stack'});
            }
            */

            if(this.contentItems[i].isDockedClosed && !this.contentItems[i].parent.isDockedClosed /*&& !is_wrong_dim */) {
                this.contentItems[ i ].config[ dimension ] = dockedClosedSize;
                this.contentItems[ i ].isFixedSize = true;
            } else {
                this.contentItems[ i ].isFixedSize = false;
            }

            if(!this.contentItems[i].isDockedClosed && this.contentItems[i].config.undocked_width_px /*&& !this._isColumn*/) {
                this.contentItems[ i ].config[ dimension ] = this.contentItems[i].config.undocked_width_px / my_size * 100.0;
                this.contentItems[ i ].isFixedSize = true;
                delete this.contentItems[i].config.undocked_width_px;
            }

			if(this.contentItems[i].config[ fixedDimension ]) {
				//debugger;
				this.contentItems[ i ].config[ dimension ] = this.contentItems[i].config[ fixedDimension ] / my_size * 100.0
				this.contentItems[ i ].isFixedSize = true;
			}

			if(isNaN(this.contentItems[ i ].config[ dimension ])) {
				delete this.contentItems[ i ].config[ dimension ];
			}

			if( this.contentItems[ i ].config[ dimension ] !== undefined ) {
				total += this.contentItems[ i ].config[ dimension ];
			} else {
				itemsWithoutSetDimension.push( this.contentItems[ i ] );
			}
            if(this.contentItems[ i ].isFixedSize) {
                fixedTotal += this.contentItems[ i ].config[ dimension ];
            }
		}
	
		/**
		 * Everything adds up to hundred, all good :-)
		 */
		if( Math.round( total ) === 100 && itemsWithoutSetDimension.length == 0) {
			return;
		}
	
		/**
		 * Allocate the remaining size to the items without a set dimension
		 */
		if( Math.round( total ) < 100 && itemsWithoutSetDimension.length > 0 ) {
			for( i = 0; i < itemsWithoutSetDimension.length; i++ ) {
				itemsWithoutSetDimension[ i ].config[ dimension ] = ( 100 - total ) / itemsWithoutSetDimension.length;
			}
			return;
		}
	
		/**
		 * If the total is > 100, but there are also items without a set dimension left, assing 50
		 * as their dimension and add it to the total
		 *
		 * This will be reset in the next step
		 */
		if( Math.round( total ) > 100 ) {
			for( i = 0; i < itemsWithoutSetDimension.length; i++ ) {
				itemsWithoutSetDimension[ i ].config[ dimension ] = 50;
				total += 50;
			}
		}

		/**
		 * Set every items, except fixed sized, size relative to 100 relative to its size to total
		 */
		for( i = 0; i < this.contentItems.length; i++ ) {
            if(this.contentItems[ i ].isFloating) continue;
            if(this.contentItems[ i ].isFixedSize) continue;

			this.contentItems[ i ].config[ dimension ] = ( this.contentItems[ i ].config[ dimension ] / (total - fixedTotal) ) * (100 - fixedTotal);
		}
	},
	
	/**
	 * Instantiates a new lm.controls.Splitter, binds events to it and adds
	 * it to the array of splitters at the position specified as the index argument
	 *
	 * What it doesn't do though is append the splitter to the DOM
	 *
	 * @param   {Int} index The position of the splitter
	 *
	 * @returns {lm.controls.Splitter}
	 */
	_createSplitter: function( index ) {
		var splitter;
		splitter = new lm.controls.Splitter( this._isColumn, this._splitterSize );
		splitter.on( 'drag', lm.utils.fnBind( this._onSplitterDrag, this, [ splitter ] ), this );
		splitter.on( 'dragStop', lm.utils.fnBind( this._onSplitterDragStop, this, [ splitter ] ), this );
		splitter.on( 'dragStart', lm.utils.fnBind( this._onSplitterDragStart, this, [ splitter ] ), this );
		this._splitter.splice( index, 0, splitter );
		return splitter;
	},
	
	/**
	 * Locates the instance of lm.controls.Splitter in the array of
	 * registered splitters and returns a map containing the contentItem
	 * before and after the splitters, both of which are affected if the
	 * splitter is moved
	 *
	 * @param   {lm.controls.Splitter} splitter
	 *
	 * @returns {Object} A map of contentItems that the splitter affects
	 */
	_getItemsForSplitter: function( splitter ) {
		var index = lm.utils.indexOf( splitter, this._splitter );

		index = this.element.find('> .lm_splitter').index(splitter.element);

		if(index < 0) index = 0;

        var after_idx = index;
        var before = this.contentItems[ after_idx ];
        while(before && (before.isDockedClosed || before.config.fixedHeight || before.config.isHidden)) {
            after_idx--;
            if(after_idx >= 0) {
                before = this.contentItems[ after_idx ];
            } else {
                before = null;
            }
        }

        return {
            before: before,
            after: this.contentItems[ index + 1 ]
        };

        var after_idx = index + 1;
        var after = this.contentItems[ after_idx ];
        while(after && (after.isDockedClosed || after.config.fixedHeight || after.config.isHidden) ) {
            after_idx++;
            if(after_idx < this.contentItems.length) {
                after = this.contentItems[ after_idx ];
            } else {
                after = null;
            }
        }
		
		return {
			before: this.contentItems[ index ],
			after: after
		};
	},
	
	/**
	 * Invoked when a splitter's dragListener fires dragStart. Calculates the splitters
	 * movement area once (so that it doesn't need calculating on every mousemove event)
	 *
	 * @param   {lm.controls.Splitter} splitter
	 *
	 * @returns {void}
	 */
	_onSplitterDragStart: function( splitter ) {
		var items = this._getItemsForSplitter( splitter ),
			minSize = this.layoutManager.config.dimensions[ this._isColumn ? 'minItemHeight' : 'minItemWidth' ];
	
		this._splitterPosition = 0;
		this._splitterStartingPoint = splitter.element.position()[this._isColumn ? 0 : 'left'];
		this._splitterMinPosition = -1 * ( items.before.element[ this._dimension ]() - minSize );
		this._splitterMaxPosition = items.after ? items.after.element[ this._dimension ]() - minSize : 0;

        this._splitterDrag_sizeBefore = items.before.element[ this._dimension ]();
        this._splitterDrag_sizeAfter = items.after.element[ this._dimension ]();
        this._splitterDrag_totalRelativeSize = items.before.config[ this._dimension ] + items.after.config[ this._dimension ];
        this._splitterDrag_frameCount = 0;

		splitter.element.addClass('in-drag');

		this.layoutManager.emit('dragStart', this);
	},
	
	/**
	 * Invoked when a splitter's DragListener fires drag. Updates the splitters DOM position,
	 * but not the sizes of the elements the splitter controls in order to minimize resize events
	 *
	 * @param   {lm.controls.Splitter} splitter
	 * @param   {Int} offsetX  Relative pixel values to the splitters original position. Can be negative
	 * @param   {Int} offsetY  Relative pixel values to the splitters original position. Can be negative
	 *
	 * @returns {void}
	 */
	_onSplitterDrag: function( splitter, offsetX, offsetY ) {
		var offset = this._isColumn ? offsetY : offsetX;
	
		if( offset > this._splitterMinPosition && offset < this._splitterMaxPosition ) {
			this._splitterPosition = offset;
			splitter.element.css( this._isColumn ? 'top' : 'left', this._splitterStartingPoint + offset );

            var items = this._getItemsForSplitter( splitter ),
                sizeBefore = this._splitterDrag_sizeBefore, /*items.before.element[ this._dimension ](),*/
                sizeAfter = this._splitterDrag_sizeAfter, /*items.after.element[ this._dimension ](),*/
                splitterPositionInRange = ( this._splitterPosition + sizeBefore ) / ( sizeBefore + sizeAfter ),
                totalRelativeSize = this._splitterDrag_totalRelativeSize /*items.before.config[ this._dimension ] + items.after.config[ this._dimension ]*/;

            items.before.config[ this._dimension ] = splitterPositionInRange * totalRelativeSize;
            items.after.config[ this._dimension ] = ( 1 - splitterPositionInRange ) * totalRelativeSize;

            this._splitterDrag_frameCount++;

            if(this._splitterDrag_repaintTimeout) {
                clearTimeout(this._splitterDrag_repaintTimeout);
                this._splitterDrag_repaintTimeout = null;
            }

            if(this._splitterDrag_frameCount % 5 === 0) {
                lm.utils.animFrame(lm.utils.fnBind(this.callDownwards, this, ['setSize']));
            } else {
                var _this = this;
                this._splitterDrag_repaintTimeout = setTimeout(function() {
                    lm.utils.animFrame(lm.utils.fnBind(_this.callDownwards, _this, ['setSize']));
                    this._splitterDrag_repaintTimeout = null;
                }, 200);
            }
		}
	},
	
	/**
	 * Invoked when a splitter's DragListener fires dragStop. Resets the splitters DOM position,
	 * and applies the new sizes to the elements before and after the splitter and their children
	 * on the next animation frame
	 *
	 * @param   {lm.controls.Splitter} splitter
	 *
	 * @returns {void}
	 */
	_onSplitterDragStop: function( splitter ) {

		var items = this._getItemsForSplitter( splitter ),
			sizeBefore = items.before.element[ this._dimension ](),
			sizeAfter = items.after.element[ this._dimension ](),
			splitterPositionInRange = ( this._splitterPosition + sizeBefore ) / ( sizeBefore + sizeAfter ),
			totalRelativeSize = items.before.config[ this._dimension ] + items.after.config[ this._dimension ];

        var items = this._getItemsForSplitter( splitter ),
            sizeBefore = this._splitterDrag_sizeBefore, /*items.before.element[ this._dimension ](),*/
            sizeAfter = this._splitterDrag_sizeAfter, /*items.after.element[ this._dimension ](),*/
            splitterPositionInRange = ( this._splitterPosition + sizeBefore ) / ( sizeBefore + sizeAfter ),
            totalRelativeSize = this._splitterDrag_totalRelativeSize /*items.before.config[ this._dimension ] + items.after.config[ this._dimension ]*/;
	
		items.before.config[ this._dimension ] = splitterPositionInRange * totalRelativeSize;
		items.after.config[ this._dimension ] = ( 1 - splitterPositionInRange ) * totalRelativeSize;
	
		splitter.element.css({
			'top': 0,
			'left': 0
		});

		splitter.element.removeClass('in-drag');
		
		lm.utils.animFrame( lm.utils.fnBind( this.callDownwards, this, [ 'setSize' ] ) );

        if(this._splitterDrag_repaintTimeout) {
            clearTimeout(this._splitterDrag_repaintTimeout);
            this._splitterDrag_repaintTimeout = null;
        }

		this.layoutManager.emit('dragStop', this);
	}
});
lm.items.Stack = function( layoutManager, config, parent ) {
	lm.items.AbstractContentItem.call( this, layoutManager, config, parent );

	this.element = $( '<div class="lm_item lm_stack"></div>' );
	this._activeContentItem = null;

	this._dropZones = {};
	this._dropSegment = null;
	this._contentAreaDimensions = null;
	this._dropIndex = null;

	this.isStack = true;

    this.isDocked = false;
    this.hasVerticalTabs = false;

	this.childElementContainer = $( '<div class="lm_items"></div>' );
	this.header = new lm.controls.Header( layoutManager, this );

	if( layoutManager.config.settings.hasHeaders === true && !config.noHeaders) {
		this.element.append( this.header.element );
	}

	this.element.append( this.childElementContainer );

    //mt
	this._dragListener = new lm.utils.DragListener(this.header.handle);
	this._dragListener.on('dragStart', this._onDragStart, this);

	if(this.config.fixedHeight) {
		this.element.addClass('lm_fixed_size');
	}
};

lm.utils.extend( lm.items.Stack, lm.items.AbstractContentItem );

lm.utils.copy( lm.items.Stack.prototype, {

	setSize: function() {
		var _this = this;
		//fastdom.measure(function() {
		/*
			var i,
				contentWidth = _this.element.width(),
				contentHeight = _this.element.height();

			if(!_this.config.noHeaders) {
				if (_this.hasVerticalTabs) {
					contentWidth -= _this.layoutManager.config.dimensions.headerHeight;
				} else {
					contentHeight -= _this.layoutManager.config.dimensions.headerHeight;
				}
			}

		//	fastdom.mutate(function() {
				_this.childElementContainer.width( contentWidth );
				_this.childElementContainer.height( contentHeight );*/

				_this.emit( 'resize' );
				_this.emitBubblingEvent( 'stateChanged' );
			//})
		//})
	},

	_$init: function() {
		var i, initialItem;

		if( this.isInitialised === true ) return;

		lm.items.AbstractContentItem.prototype._$init.call( this );

		for( i = 0; i < this.contentItems.length; i++ ) {
			this.header.createTab( this.contentItems[ i ] );
			this.contentItems[ i ]._$hide();
		}

		if( this.contentItems.length > 0 ) {
			initialItem = this.contentItems[ this.config.activeItemIndex || 0 ];

			if( !initialItem ) {
				throw new Error( 'Configured activeItemIndex out of bounds' );
			}
			
			this.setActiveContentItem( initialItem );
		} else {
			//debugger;
		}
	},

	setActiveContentItem: function( contentItem ) {
		if( lm.utils.indexOf( contentItem, this.contentItems ) === -1 ) {
			throw new Error( 'contentItem is not a child of this stack' );
		}

		if( this._activeContentItem !== null ) {
			this._activeContentItem._$hide( true /* skip layout update size */);
		}

		this._activeContentItem = contentItem;
		this.header.setActiveContentItem( contentItem );
		contentItem._$show();
		this.emit( 'activeContentItemChanged', contentItem );
		this.emitBubblingEvent( 'stateChanged' );
	},

	getActiveContentItem: function() {
		return this.header.activeContentItem;
	},

	addChild: function( contentItem, index ) {
		contentItem = this.layoutManager._$normalizeContentItem( contentItem, this );
		lm.items.AbstractContentItem.prototype.addChild.call( this, contentItem, index );
		this.childElementContainer.append( contentItem.element );
		this.header.createTab( contentItem, index );
		this.setActiveContentItem( contentItem );
		this.callDownwards( 'setSize' );
		this.emitBubblingEvent( 'stateChanged' );
	},

	removeChild: function( contentItem, keepChild, keepTab, keepEmpty ) {
		if(!keepChild) {
			var event = new lm.utils.BubblingEvent('beforeTabClosed', this);
			contentItem.container.emit('beforeTabClosed', event);
		}
		this.header.removeTab( contentItem, keepChild);

		var index = lm.utils.indexOf( contentItem, this.contentItems );
		lm.items.AbstractContentItem.prototype.removeChild.call( this, contentItem, keepChild, null, keepEmpty );

		if( this.contentItems.length > 0 ) {
			this.setActiveContentItem( this.contentItems[ Math.max( index -1 , 0 ) ] );
		} else {
			this._activeContentItem = null;
		}
		if(!keepChild) {
			var event = new lm.utils.BubblingEvent('tabClosed', this);
			contentItem.container.emit('tabClosed', event);
		}

		this.emitBubblingEvent( 'stateChanged' );
	},

    setDocked: function(docked, no_peers) {

		if(docked) {
			var p = this;
			while(p) {
				if(p.isFloating) return;
				p = p.parent;
			}
		}

		var allowed = true;

        //normalize
        while((this.parent.isRow || this.parent.isColumn) && this.parent.contentItems.length == 1 && !this.parent.parent.isRoot) {
            this.parent.parent.replaceChild(this.parent, this, false);
        }

		var parentColumn = this.parent.isColumn ? this.parent : this.parent;//.parent;

		if(parentColumn && !parentColumn.parent.isRoot) {
			parentColumn.contentItems.forEach(function (item) {
				if(item.config.dontCollapseOnActiveTabClick) {
					collapseHorizontal = true;
					allowed = false;
				} else {
					item.contentItems.forEach(function (item) {
						if(item.config.dontCollapseOnActiveTabClick) {
							collapseHorizontal = true;
							allowed = false;
						}
					})
				}
			})
			collapseHorizontal = allowed && parentColumn.isRow && parentColumn.contentItems.length > 1;
		}
		if(!allowed) return;

	    this.isDocked = docked;
        if(docked) {
            this.element.addClass('lm_docked');
            this.hasVerticalTabs = true;
            this.closeDocked(no_peers);

            if(this.config.isAutoDocked) {
                this.element
                    .on('mouseover', stack.openDocked)
                    .on('mouseleave', stack.closeDocked)
            }
        } else {
            this.hasVerticalTabs = false;
            this.openDocked(no_peers);

            this.element
                .off('mouseover', stack.openDocked)
                .off('mouseleave', stack.closeDocked)
        }
    },

    _resizePeersOnDocking: function(new_w, horizontal) {

    	var dim = horizontal ? 'height' : 'width';

        var row = this.parent;

		if(!row.contentItems) return;

        var flexible = [];
        var total_flexible_width = 0;
        for(var i = 0; i < row.contentItems.length; i++ ) {
            if (row.contentItems[i].isFloating) continue;
            if (row.contentItems[i] == this) continue;
            if(row.contentItems[i].config.isFlexible) {
                flexible.push(row.contentItems[i]);
                total_flexible_width += row.contentItems[i].config[dim];
            } else {

			}
        }

        if(flexible.length) {
            var diff = (new_w - this.config[dim])/total_flexible_width;
            flexible.forEach(function(p) {
                p.config[dim] = p.config[dim] - (p.config[dim] * diff);
            })
        }
    },
    hideStack: function() {
        var dim = (this.parent && !this.parent.isColumn) ? 'width' : 'height';
		if(!this.config.isHidden) {
			this.config.undocked_width_px = (dim == 'height') ? this.element.height() : this.element.width();
			this.config.isHidden = true;
		}
        this._$hide();
        this.updateSplittersVisibility();
		this.parent && lm.utils.animFrame(lm.utils.fnBind(this.parent.callDownwards, this.parent, ['setSize']));
    },

    showStack: function() {
		if(!this.config.isHidden) return;
        var dim = (this.parent && !this.parent.isColumn) ? 'width' : 'height';
        this.config.isHidden = false;
        this._$show();
        this.updateSplittersVisibility();
		this.parent && lm.utils.animFrame(lm.utils.fnBind(this.parent.callDownwards, this.parent, ['setSize']));
    },

    openDocked: function(no_peers) {
    	var parent_size;
		var collapseParentType;
		var dim;

		if(this.isCollapsedHorizontally) {
			parent_size = this.parent.element.height();
			collapseParentType = 'isRow';
			dim = 'height';
		} else {
			parent_size = this.parent.element.width();
			collapseParentType = 'isColumn';
			dim = 'width';
		}

        this.element.removeClass('lm_docked_closed lm_docked_closed_v lm_docked_closed_h');
        var restored_width = this.config.undocked_width_px / parent_size * 100.0;

		this.hasVerticalTabs = this.isDockedClosed = false;

        this.config.isDocked = false;

        this._resizePeersOnDocking(restored_width, this.isCollapsedHorizontally);

		delete this.config.undocked_height;
		delete this.config.undocked_width;

		if(!no_peers && this.parent[ collapseParentType ]) {
			this.parent.contentItems.forEach(function (item) {
				delete item.config.undocked_width_px;
			})
		}
		var _this = this;
		this.layoutManager.withoutUpdateSize(function() {
			if(_this._activeContentItemBeforeCollapse) {
				_this.setActiveContentItem(_this._activeContentItemBeforeCollapse);
			}
		})


        //this.config.width = restored_width;

        //show splitter
        //this.element.next('.lm_splitter').show();
		this.updateSplittersVisibility();

		var _this = this;

		var updateParent = this.parent;

		if(!no_peers) {
			if(this.parent[ collapseParentType ]) {
				this.parent.isDockedClosed = false;

				this.parent.contentItems.forEach(function(item) {
					if(item != _this && item.openDocked) {
						item.openDocked(true);
					}
				})
				//this.parent.config[ dim ] = this.parent.config.undocked_width_px;
				updateParent = updateParent.parent;
				this.parent.element.removeClass('lm_docked_closed');
				this.updateSplittersVisibility(this.parent);
			}
			//updateParent.callDownwards( 'setSize' );
			if(updateParent.callDownwards) {
				lm.utils.animFrame(lm.utils.fnBind(updateParent.callDownwards, updateParent, ['setSize']));
			}
		}
    },
	updateSplittersVisibility: function(item) {
    	item = item || this;
		this.layoutManager.updateSplittersVisibility(item);
	},
    closeDocked: function(no_peers, collapseHorizontal, ignore_not_allowed) {

	    if(this.config.notCollapsable) return;

		//check if it is in the floating panel
		var p = this;
		while(p) {
			if(p.isFloating) return;
			p = p.parent;
		}

		//normalize
        while((this.parent.isRow || this.parent.isColumn) && this.parent.contentItems.length == 1 && !this.parent.parent.isRoot) {
            this.parent.parent.replaceChild(this.parent, this, false);
        }

		if(collapseHorizontal === undefined) collapseHorizontal = false;

		var parentColumn = this.parent.isColumn ? this.parent : this.parent;//.parent;

        var allowed = true;

		if(parentColumn && !parentColumn.parent.isRoot) {
			parentColumn.contentItems.forEach(function (item) {
				if(item.config.dontCollapseOnActiveTabClick) {
					collapseHorizontal = true;
                    allowed = false;
				} else {
					item.contentItems.forEach(function (item) {
						if(item.config.dontCollapseOnActiveTabClick) {
							collapseHorizontal = true;
                            allowed = false;
						}
					})
				}
			})
			collapseHorizontal = allowed && parentColumn.isRow && parentColumn.contentItems.length > 1;
		}

		if(!allowed) {
			if(!ignore_not_allowed) {
				this.layoutManager.emit('collapseNotAllowed', this);
			}
            return;
        }

		var collapseParentType = collapseHorizontal ? 'isRow' : 'isColumn';

        this.element.addClass('lm_docked_closed ' + (collapseHorizontal ? 'lm_docked_closed_h' : 'lm_docked_closed_v'));
        if(!this.isDockedClosed) {
            this.config.undocked_width_px = collapseHorizontal ? this.element.height() : this.element.width();
			this.config.undocked_width = this.config.width;
			this.config.undocked_height = this.config.height;
        }
		this.hasVerticalTabs = this.isDockedClosed = this.isDocked;

        this.config.isDocked = this.isDocked;

		this.isCollapsedHorizontally = collapseHorizontal;

		var parent_size = collapseHorizontal ? this.parent.element.height() : this.parent.element.width();

        this._resizePeersOnDocking(35.0 / parent_size * 100.0, collapseHorizontal);
        //this.config.width = 1.0;

        //hide splitter
		//this.element.next('.lm_splitter').hide();
		this.updateSplittersVisibility();

		var _this = this;

		var updateParent = this.parent;

		this._activeContentItemBeforeCollapse = this.header.activeContentItem;

		if( this._activeContentItem !== null ) {
			this._activeContentItem._$hide( true /* skip layout update size */);
		}
		this.header.setActiveContentItem(null);
		//this.header.element.find('.lm_tab.lm_active').removeClass('lm_active');
		//this.header.activeContentItem = null;

		if(!no_peers) {
			if(this.parent[ collapseParentType ]) {
				this.parent.isDockedClosed = true;

				this.parent.contentItems.forEach(function(item) {
					if(item != _this && item.closeDocked) {
						if(!item.isDocked) {
							item.setDocked(true, true);
						}
						item.closeDocked(true, collapseHorizontal, ignore_not_allowed);
					}
				})
				this.parent.config.undocked_width_px = collapseHorizontal ? this.parent.element.height() : this.parent.element.width();
				updateParent = updateParent.parent;
				this.parent.element.addClass('lm_docked_closed');
				this.updateSplittersVisibility(this.parent);
			}
			//updateParent.callDownwards( 'setSize' );
			if(updateParent.callDownwards) {
				lm.utils.animFrame(lm.utils.fnBind(updateParent.callDownwards, updateParent, ['setSize']));
			}
		}
    },

    isDockedOpen: function() {
        return !this.element.hasClass('lm_docked_closed');
    },
    /**
     * Callback for the DragListener
     *
     * @param   {Number} x The tabs absolute x position
     * @param   {Number} y The tabs absolute y position
     *
     * @private
     * @returns {void}
     */
    _onDragStart: function( x, y ) {
    	var drag_item = this;

		if(this.config.notDraggable) {
			this.layoutManager.emit('dragNotAllowed', this);
			return;
		}

    	if(this.parent.isColumn && this.parent.contentItems.indexOf(this) === 0) {
    		//drag whole column
			drag_item = this.parent;
		}

		drag_item.parent.contentItems.forEach(function(item) {
			item.width_before_drag = item.config.width;
		})

		var _this = this;

		if(this.config.canStartDrag) {
			if(!this.config.canStartDrag()) return;
		}

        var drag_proxy = new lm.controls.DragProxyForStack(
            x,
            y,
            this._dragListener,
            this.layoutManager,
            drag_item,
            drag_item.parent,
			function() {
            	drag_proxy = null;
				_this.updateSplittersVisibility();
			}
        );
    },
	_$destroy: function() {
		lm.items.AbstractContentItem.prototype._$destroy.call( this );
		this.header._$destroy();
	},


	/**
	 * Ok, this one is going to be the tricky one: The user has dropped {contentItem} onto this stack.
	 *
	 * It was dropped on either the stacks header or the top, right, bottom or left bit of the content area
	 * (which one of those is stored in this._dropSegment). Now, if the user has dropped on the header the case
	 * is relatively clear: We add the item to the existing stack... job done (might be good to have 
	 * tab reordering at some point, but lets not sweat it right now)
	 *
	 * If the item was dropped on the content part things are a bit more complicated. If it was dropped on either the
	 * top or bottom region we need to create a new column and place the items accordingly. 
	 * Unless, of course if the stack is already within a column... in which case we want 
	 * to add the newly created item to the existing column... 
	 * either prepend or append it, depending on wether its top or bottom.
	 *
	 * Same thing for rows and left / right drop segments... so in total there are 9 things that can potentially happen
	 * (left, top, right, bottom) * is child of the right parent (row, column) + header drop
	 * 
	 * @param   {lm.item} contentItem
	 *
	 * @returns {void}
	 */
	_$onDrop: function( contentItem, dragProxy ) {

		/*
		 * The item was dropped on the header area. Just add it as a child of this stack and
		 * get the hell out of this logic
		 */
		if( this._dropSegment === 'header' ) {
			this._resetHeaderDropZone();
			var items = [];

			var getItems = function(item) {
				if(item.isComponent) {
					items.push(item);
					return;
				}
				if(item.contentItems) {
					item.contentItems.forEach(function (i) {
						if (i.isComponent) {
							items.push(i);
						} else {
							getItems(i);
						}
					});
				}
			}

			getItems(contentItem);

			var _this = this;

			items.forEach(function(item) {
				_this.addChild(item, _this._dropIndex);
			})

			return;
		}

		/*
		 * The stack is empty. Let's just add the element.
		 */
		if( this._dropSegment === 'body' ) {
			this.addChild( contentItem );
			return;
		}

		/*
		 * The item was dropped on the top-, left-, bottom- or right- part of the content. Let's
		 * aggregate some conditions to make the if statements later on more readable
		 */
		var isVertical = this._dropSegment === 'top' || this._dropSegment === 'bottom',
			isHorizontal = this._dropSegment === 'left' || this._dropSegment === 'right',
			insertBefore = this._dropSegment === 'top' || this._dropSegment === 'left',
			hasCorrectParent = ( isVertical && this.parent.isColumn ) || ( isHorizontal && this.parent.isRow ),
			type = isVertical ? 'column' : 'row',
			dimension = isVertical ? 'height' : 'width',
			index,
			stack,
			rowOrColumn;

		/*
		 * The content item can be either a component or a stack. If it is a component, wrap it into a stack
		 */
		var def_dim_size = dimension == 'height' ? 40 : 15;
		var min_size = {
			width: 150 / this.parent.element.width() * 100.0,
			height: 150 / this.parent.element.height() * 100.0
		}

		if( contentItem.isComponent ) {
			var config = {}
			if(this.config.newStackDef) {
				config = $.extend(config, this.config.newStackDef)
			}
			if(this.config.getNewStackDef) {
				config = $.extend(config, this.config.getNewStackDef(this, contentItem))
			}
			config.type = 'stack';
			if(this.config.newStackDef) config.newStackDef = this.config.newStackDef;
			stack = this.layoutManager.createContentItem(config, this );
			stack._$init();
			stack.addChild( contentItem );
			stack.config[dimension] = dragProxy._originalDimensions[dimension] || def_dim_size;
			if(stack.config[dimension] < min_size[dimension]) {
				stack.config[dimension] = min_size[dimension];
			}
			contentItem = stack;
		}

		/*
		 * If the item is dropped on top or bottom of a column or left and right of a row, it's already
		 * layd out in the correct way. Just add it as a child
		 */
		if( hasCorrectParent ) {
			index = lm.utils.indexOf( this, this.parent.contentItems );
			this.parent.addChild( contentItem, insertBefore ? index : index + 1, true );

			if(!this.isDockedClosed && !this.config.fixedHeight) {
				this.config[dimension] *= 0.5;  //MTCH keep the original size
				contentItem.config[dimension] = this.config[dimension];
			}
			if(this.config.fixedHeight) {
				contentItem.config[dimension] = dragProxy._originalDimensions[dimension] || def_dim_size;
			}

			if(dragProxy && dragProxy._originalParent == contentItem.parent) {
				contentItem.parent.contentItems.forEach(function (item) {
					if ('width_before_drag' in item) {
						item.config.width = item.width_before_drag;
						delete item.width_before_drag;
					}
				})
			}

			this.parent.callDownwards( 'setSize' );
		/*
		 * This handles items that are dropped on top or bottom of a row or left / right of a column. We need
		 * to create the appropriate contentItem for them to life in
		 */
		} else {
			type = isVertical ? 'column' : 'row';
			rowOrColumn = this.layoutManager.createContentItem({ type: type }, this );
			this.parent.replaceChild( this, rowOrColumn );

			rowOrColumn.addChild( contentItem, insertBefore ? 0 : undefined, true );
			rowOrColumn.addChild( this, insertBefore ? undefined : 0, true );

			this.config[ dimension ] = 50;
			contentItem.config[ dimension ] = 50;
			rowOrColumn.callDownwards( 'setSize' );
		}
		this.layoutManager.updateSplittersVisibility(this);
	},

	/**
	 * If the user hovers above the header part of the stack, indicate drop positions for tabs.
	 * otherwise indicate which segment of the body the dragged item would be dropped on
	 *
	 * @param   {Int} x Absolute Screen X
	 * @param   {Int} y Absolute Screen Y
	 *
	 * @returns {void}
	 */
	_$getDropZoneSegment: function( x, y ) {
		var segment, area;

		for( segment in this._contentAreaDimensions ) {
			area = this._contentAreaDimensions[ segment ].hoverArea;

			if( area.x1 < x && area.x2 > x && area.y1 < y && area.y2 > y ) {
				return segment;
			}
		}
		return null;
	},
	_$highlightDropZone: function( x, y, segment, def_area, def_segment, win ) {
		segment = segment || this._$getDropZoneSegment(x, y);

		if(segment) {
			if (segment === 'header') {
				this._dropSegment = 'header';
				this._highlightHeaderDropZone(x, win);
			} else {
				this._resetHeaderDropZone();
				this._highlightBodyDropZone(segment, win);
			}
		} else {
			if(def_area && def_segment) {
				this.layoutManager.dropTargetIndicator.highlightBorderArea( def_area , def_segment, win);
			}
		}
	},

	_$getArea: function() {
		if( this.element.is( ':visible' ) === false ) {
			return null;
		}
		
		var getArea = lm.items.AbstractContentItem.prototype._$getArea,
			headerArea = getArea.call( this, this.header.element ),
			contentArea = getArea.call( this, this.childElementContainer ),
			contentWidth = contentArea.x2 - contentArea.x1,
			contentHeight = contentArea.y2 - contentArea.y1;

		this._contentAreaDimensions = {
			header: {
				hoverArea: {
					x1: headerArea.x1,
					y1: headerArea.y1,
					x2: headerArea.x2,
					y2: headerArea.y2
				},
				highlightArea: {
					x1: headerArea.x1,
					y1: headerArea.y1,
					x2: headerArea.x2,
					y2: headerArea.y2
				}
			}
		};

		/**
		 * If this Stack is a parent to rows, columns or other stacks only its
		 * header is a valid dropzone.
		 */
		if( this._activeContentItem && this._activeContentItem.isComponent === false ) {
			return headerArea;
		}

		/**
		 * Highlight the entire body if the stack is empty
		 */
		if( this.contentItems.length === 0 ) {

			this._contentAreaDimensions.body = {
				hoverArea: {
					x1: contentArea.x1,
					y1: contentArea.y1,
					x2: contentArea.x2,
					y2: contentArea.y2
				},
				highlightArea: {
					x1: contentArea.x1,
					y1: contentArea.y1,
					x2: contentArea.x2,
					y2: contentArea.y2
				}
			};

			return getArea.call( this, this.element );
		}

		this._contentAreaDimensions.left = {
			hoverArea: {
				x1: contentArea.x1,
				y1: contentArea.y1,
				x2: contentArea.x1 + contentWidth * 0.25,
				y2: contentArea.y2
			},
			highlightArea: {
				x1: contentArea.x1,
				y1: contentArea.y1,
				x2: contentArea.x1 + contentWidth * 0.5,
				y2: contentArea.y2
			}
		};

		this._contentAreaDimensions.top = {
			hoverArea: {
				x1: contentArea.x1 + contentWidth * 0.25,
				y1: contentArea.y1,
				x2: contentArea.x1 + contentWidth * 0.75,
				y2: contentArea.y1 + contentHeight * 0.5
			},
			highlightArea: {
				x1: contentArea.x1,
				y1: contentArea.y1,
				x2: contentArea.x2,
				y2: contentArea.y1 + contentHeight * 0.5
			}
		};
		
		this._contentAreaDimensions.right = {
			hoverArea: {
				x1: contentArea.x1 + contentWidth * 0.75,
				y1: contentArea.y1,
				x2: contentArea.x2,
				y2: contentArea.y2
			},
			highlightArea: {
				x1: contentArea.x1 + contentWidth * 0.5,
				y1: contentArea.y1,
				x2: contentArea.x2,
				y2: contentArea.y2
			}
		};

		this._contentAreaDimensions.bottom = {
			hoverArea: {
				x1: contentArea.x1 + contentWidth * 0.25,
				y1: contentArea.y1 + contentHeight * 0.5,
				x2: contentArea.x1 + contentWidth * 0.75,
				y2: contentArea.y2
			},
			highlightArea: {
				x1: contentArea.x1,
				y1: contentArea.y1 + contentHeight * 0.5,
				x2: contentArea.x2,
				y2: contentArea.y2
			}
		};

		return getArea.call( this, this.element );
	},

	_highlightHeaderDropZone: function( x, win ) {
		var i,
			tabElement,
			tabsLength = this.header.tabs.length,
			isAboveTab = false,
			tabTop,
			tabLeft,
			offset,
			placeHolderLeft,
			headerOffset,
			tabWidth,
			halfX;

		// Empty stack
		if( tabsLength === 0 ) {
			headerOffset = this.header.element.offset();

			this.layoutManager.dropTargetIndicator.highlightArea({
				x1: headerOffset.left,
				x2: headerOffset.left + 100,
				y1: headerOffset.top + this.header.element.height() - 20,
				y2: headerOffset.top + this.header.element.height()
			}, win);

			return;
		}

		for( i = 0; i < tabsLength; i++ ) {
			tabElement = this.header.tabs[ i ].element;
			offset = tabElement.offset();
			tabLeft = offset.left;
			tabTop = offset.top;
			tabWidth = tabElement.width();

			if( x > tabLeft && x < tabLeft + tabWidth ) {
				isAboveTab = true;
				break;
			}
		}

		if( isAboveTab === false && x < tabLeft ) {
			return;
		}

		halfX = tabLeft + tabWidth / 2;

		if( x < halfX ) {
			this._dropIndex = i;
			tabElement.before( this.layoutManager.tabDropPlaceholder );
		} else {
			this._dropIndex = Math.min( i + 1, tabsLength );
			tabElement.after( this.layoutManager.tabDropPlaceholder );
		}


		placeHolderLeft = this.layoutManager.tabDropPlaceholder.offset().left;

		this.layoutManager.dropTargetIndicator.highlightArea({
			x1: placeHolderLeft,
			x2: placeHolderLeft + this.layoutManager.tabDropPlaceholder.width(),
			y1: tabTop,
			y2: tabTop + tabElement.innerHeight()
		}, win);
	},

	_resetHeaderDropZone: function() {
		this.layoutManager.tabDropPlaceholder.remove();
	},

	_highlightBodyDropZone: function( segment, win ) {
		var highlightArea = this._contentAreaDimensions[ segment ].highlightArea;
		this.layoutManager.dropTargetIndicator.highlightBorderArea( highlightArea , segment, win);
		this._dropSegment = segment;
	}
});

lm.errors.ConfigurationError = function( message, node ) {
	Error.call( this );

	this.name = 'Configuration Error';
	this.message = message;
	this.node = node;
};

lm.errors.ConfigurationError.prototype = new Error();

lm.utils.BubblingEvent = function( name, origin ) {
	this.name = name;
	this.origin = origin;
	this.isPropagationStopped = false;
};

lm.utils.BubblingEvent.prototype.stopPropagation = function() {
	this.isPropagationStopped = true;
};
/**
 * Minifies and unminifies configs by replacing frequent keys
 * and values with one letter substitutes
 *
 * @constructor
 */
lm.utils.ConfigMinifier = function(){
	this._keys = [
		'settings',
		'hasHeaders',
		'constrainDragToContainer',
		'selectionEnabled',
		'dimensions',
		'borderWidth',
		'minItemHeight',
		'minItemWidth',
		'headerHeight',
		'dragProxyWidth',
		'dragProxyHeight',
		'labels',
		'close',
		'maximise',
		'minimise',
		'popout',
		'content',
		'componentName',
		'componentState',
		'id',
		'width',
		'type',
		'height',
		'isClosable',
		'title',
		'popoutWholeStack',
		'openPopouts',
		'parentId',
		'activeItemIndex',
		'reorderEnabled'





		//Maximum 36 entries, do not cross this line!
	];

	this._values = [
		true,
		false,
		'row',
		'column',
		'stack',
		'component',
		'close',
		'maximise',
		'minimise',
		'open in new window'
	];
};

lm.utils.copy( lm.utils.ConfigMinifier.prototype, {

	/**
	 * Takes a GoldenLayout configuration object and
	 * replaces its keys and values recoursively with
	 * one letter counterparts
	 *
	 * @param   {Object} config A GoldenLayout config object
	 *
	 * @returns {Object} minified config
	 */
	minifyConfig: function( config ) {
		var min = {};
		this._nextLevel( config, min, '_min' );
		return min;
	},

	/**
	 * Takes a configuration Object that was previously minified
	 * using minifyConfig and returns its original version
	 *
	 * @param   {Object} minifiedConfig
	 *
	 * @returns {Object} the original configuration
	 */
	unminifyConfig: function( minifiedConfig ) { 
		var orig = {};
		this._nextLevel( minifiedConfig, orig, '_max' );
		return orig;
	},

	/**
	 * Recoursive function, called for every level of the config structure
	 *
	 * @param   {Array|Object} orig
	 * @param   {Array|Object} min
	 * @param 	{String} translationFn
	 *
	 * @returns {void}
	 */
	_nextLevel: function( from, to, translationFn ) {
		var key, minKey;

		for( key in from ) {

			/**
			 * For in returns array indices as keys, so let's cast them to numbers
			 */
			if( from instanceof Array ) key = parseInt( key, 10 );

			/**
			 * In case something has extended Object prototypes
			 */
			if( !from.hasOwnProperty( key ) ) continue;

			/**
			 * Translate the key to a one letter substitute
			 */
			minKey = this[ translationFn ]( key, this._keys );

			/**
			 * For Arrays and Objects, create a new Array/Object
			 * on the minified object and recourse into it
			 */
			if( typeof from[ key ] === 'object' ) {
				to[ minKey ] = from[ key ] instanceof Array ? [] : {};
				this._nextLevel( from[ key ], to[ minKey ], translationFn );

			/**
			 * For primitive values (Strings, Numbers, Boolean etc.)
			 * minify the value
			 */
			} else {
				to[ minKey ] = this[ translationFn ]( from[ key ], this._values );
			}
		}
	},

	/**
	 * Minifies value based on a dictionary
	 *
	 * @param   {String|Boolean} value
	 * @param   {Array<String|Boolean>} dictionary
	 *
	 * @returns {String} The minified version
	 */
	_min: function( value, dictionary ) {
		/**
		 * If a value actually is a single character, prefix it
		 * with ___ to avoid mistaking it for a minification code
		 */
		if( typeof value === 'string' && value.length === 1 ) {
			return '___' + value;
		}

		var index = lm.utils.indexOf( value, dictionary );
		
		/**
		 * value not found in the dictionary, return it unmodified
		 */
		if( index === -1 ) {
			return value;

		/**
		 * value found in dictionary, return its base36 counterpart
		 */
		} else {
			return index.toString( 36 );
		}
	},

	_max: function( value, dictionary ) {
		/**
		 * value is a single character. Assume that it's a translation
		 * and return the original value from the dictionary
		 */
		if( typeof value === 'string' && value.length === 1 ) {
			return dictionary[ parseInt( value, 36 ) ];
		}

		/**
		 * value originally was a single character and was prefixed with ___
		 * to avoid mistaking it for a translation. Remove the prefix
		 * and return the original character
		 */
		if( typeof value === 'string' && value.substr( 0, 3 ) === '___' ) {
			return value[ 3 ];
		}
		/**
		 * value was not minified
		 */
		return value;
	}
});

/**
 * An EventEmitter singleton that propagates events
 * across multiple windows. This is a little bit trickier since
 * windows are allowed to open childWindows in their own right
 *
 * This means that we deal with a tree of windows. Hence the rules for event propagation are:
 *
 * - Propagate events from this layout to both parents and children
 * - Propagate events from parent to this and children
 * - Propagate events from children to the other children (but not the emitting one) and the parent
 *
 * @constructor
 * 
 * @param {lm.LayoutManager} layoutManager
 */
lm.utils.EventHub = function( layoutManager ) {
	lm.utils.EventEmitter.call( this );
	this._layoutManager = layoutManager;
	this._dontPropagateToParent = null;
	this._childEventSource = null;
	this.on( lm.utils.EventEmitter.ALL_EVENT, lm.utils.fnBind( this._onEventFromThis, this ) );
	$(window).on( 'gl_child_event', lm.utils.fnBind( this._onEventFromChild, this ) );
};

/**
 * Called on every event emitted on this eventHub, regardles of origin.
 *
 * @private
 *
 * @param {Mixed}
 * 
 * @returns {void}
 */
lm.utils.EventHub.prototype._onEventFromThis = function() {
	var args = Array.prototype.slice.call( arguments );

	if( this._layoutManager.isSubWindow && args[ 0 ] !== this._dontPropagateToParent ) {
		this._propagateToParent( args );
	}
	this._propagateToChildren( args );

	//Reset
	this._dontPropagateToParent = null;
	this._childEventSource = null;
};

/**
 * Called by the parent layout.
 *
 * @param   {Array} args Event name + arguments
 *
 * @returns {void}
 */
lm.utils.EventHub.prototype._$onEventFromParent = function( args ) {
	this._dontPropagateToParent = args[ 0 ];
	this.emit.apply( this, args );
};

/**
 * Callback for child events raised on the window
 *
 * @param   {DOMEvent} event
 * @private
 *
 * @returns {void}
 */
lm.utils.EventHub.prototype._onEventFromChild = function( event ) {
	this._childEventSource = event.originalEvent.__gl;
	this.emit.apply( this, event.originalEvent.__glArgs );
};

/**
 * Propagates the event to the parent by emitting
 * it on the parent's DOM window
 *
 * @param   {Array} args Event name + arguments
 * @private
 *
 * @returns {void}
 */
lm.utils.EventHub.prototype._propagateToParent = function( args ) {
	var event,
		eventName = 'gl_child_event'; 

	if (document.createEvent) {
		event = window.opener.document.createEvent( 'HTMLEvents' );
		event.initEvent( eventName, true, true);
	} else {
		event = window.opener.document.createEventObject();
		event.eventType = eventName;
	}

	event.eventName = eventName;
	event.__glArgs = args;
	event.__gl = this._layoutManager;

	if (document.createEvent) {
		window.opener.dispatchEvent(event);
	} else {
		window.opener.fireEvent( 'on' + event.eventType, event );
	}
};

/**
 * Propagate events to children
 *
 * @param   {Array} args Event name + arguments
 * @private
 *
 * @returns {void}
 */
lm.utils.EventHub.prototype._propagateToChildren = function( args ) {
	var childGl, i;

	for( i = 0; i < this._layoutManager.openPopouts.length; i++ ) {
		childGl = this._layoutManager.openPopouts[ i ].getGlInstance();

		if( childGl !== this._childEventSource ) {
			childGl.eventHub._$onEventFromParent( args );
		}
	}
};
/**
 * A specialised GoldenLayout component that binds GoldenLayout container
 * lifecycle events to react components
 *
 * @constructor
 *
 * @param {lm.container.ItemContainer} container
 * @param {Object} state state is not required for react components
 */
lm.utils.ReactComponentHandler = function( container, state ) {
	this._reactComponent = null;
	this._originalComponentWillUpdate = null;
	this._container = container;
	this._initialState = state;
	this._reactClass = this._getReactClass();
	this._container.on( 'open', this._render, this );
	this._container.on( 'destroy', this._destroy, this );
};

lm.utils.copy( lm.utils.ReactComponentHandler.prototype, {

	/**
	 * Creates the react class and component and hydrates it with
	 * the initial state - if one is present
	 *
	 * By default, react's getInitialState will be used
	 *
	 * @private
	 * @returns {void}
	 */
	_render: function() {
		this._reactComponent = ReactDOM.render( this._getReactComponent(), this._container.getElement()[ 0 ]);
		this._originalComponentWillUpdate = this._reactComponent.componentWillUpdate || function(){};
		this._reactComponent.componentWillUpdate = this._onUpdate.bind( this );
		if( this._container.getState() ) {
			this._reactComponent.setState( this._container.getState() );
		}
	},

	/**
	 * Removes the component from the DOM and thus invokes React's unmount lifecycle
	 *
	 * @private
	 * @returns {void}
	 */
	_destroy: function() {
		ReactDOM.unmountComponentAtNode( this._container.getElement()[ 0 ]);
		this._container.off( 'open', this._render, this );
		this._container.off( 'destroy', this._destroy, this );
	},

	/**
	 * Hooks into React's state management and applies the componentstate
	 * to GoldenLayout
	 *
	 * @private
	 * @returns {void}
	 */
	_onUpdate: function( nextProps, nextState ) {
		this._container.setState( nextState );
		this._originalComponentWillUpdate.call( this._reactComponent, nextProps, nextState );
	},

	/**
	 * Retrieves the react class from GoldenLayout's registry
	 *
	 * @private
	 * @returns {React.Class}
	 */
	_getReactClass: function() {
		var componentName = this._container._config.component;
		var reactClass;

		if( !componentName ) {
			throw new Error( 'No react component name. type: react-component needs a field `component`' );
		}

		reactClass = this._container.layoutManager.getComponent( componentName );

		if( !reactClass ) {
			throw new Error( 'React component "' + componentName + '" not found. ' +
				'Please register all components with GoldenLayout using `registerComponent(name, component)`' );
		}

		return reactClass;
	},

	/**
	 * Copies and extends the properties array and returns the React element
	 *
	 * @private
	 * @returns {React.Element}
	 */
	_getReactComponent: function() {
		var defaultProps = {
			glEventHub: this._container.layoutManager.eventHub,
			glContainer: this._container,
		};
		var props = $.extend( defaultProps, this._container._config.props );
		return React.createElement( this._reactClass, props );
	}
});})(window.$);