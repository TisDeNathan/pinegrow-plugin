(function( $ ) {
	'use strict';

	window.addEventListener('message', function(event) {
		if(event.data.action === 'pgStartedLoadingProject') {
			var $pg = $('.pinegrow-editor-wrapper');
			var w = $pg.width();
			var h = $pg.height();
			var pos = $pg.offset();
			$pg
				.css({
					top: pos.top + 'px',
					left: pos.left + 'px',
					width: w + 'px',
					height: h + 'px',
					zIndex: 100000,
					position: 'fixed'
				})
				//.addClass('pinegrow-editor-full');

			setTimeout(function() {
				$pg.css({
					width: '100vw',
					height: '100vh',
					top: 0,
					left: 0,
					transition: 'none'
				},2);
			})
		}
		if(event.data.action === 'pgProjectClosed') {
			var $pg = $('.pinegrow-editor-wrapper');
			var $p = $pg.parent();
			var w = $p.width();
			var h = $p.height();
			var pos = $p.offset();


			//setTimeout(function() {
				$pg.css({
					position: 'relative',
					left: 0,//pos.left + 'px',
					top: 0,//pos.top + 'px',
					width: '',
					height: '',
					transition: ''
				})
			//},500)
		}
		if(event.data.action === 'pgAppLoaded') {
			$('.pinegrow-editor-wrapper').addClass('pinegrow-loaded');
			setTimeout(function() {
				$('.pinegrow-editor-wrapper').css({
					opacity: 1
				},2);
			})
		}
	}, false);

})( jQuery );
