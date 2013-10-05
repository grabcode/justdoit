define([
	'router',
	'fastclick'
], function(Router, FastClick){

	var initialize = function(){

		//noBounce.init({preventDefault: true, animate: true}); //
		FastClick.attach(document.body);
		setTimeout(function(){
			// Hide the address bar!
			window.scrollTo(0, 1);
		}, 0);

		Router.initialize();
	};

	return {
		initialize: initialize
	};
});