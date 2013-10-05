'use strict';

define([
	'zepto'
], function($){

	var MainView = function(){
		var _this = this;

		//todo: smarter and flex cache, build dynamically on the app (so abstract from business rules)
		var cache = {
			'projects': {
				'$': $('#projects'),
				'expandable': true,
			},
			'actions': {
				'$': $('#actions'),
				'expandable': true,
			},
			'contexts': {
				'$': $('#contexts'),
				'expandable': true
			},
			'interactions': {
				'$': $('#interactions')
			}
		};

		$('.projects-list__item, .contexts-list__item').click(function(){
			console.log('click');
			$(this).toggleClass('app-list__item--unselected app-list__item--selected');
		});

		$('button#add').click(function(){
			$('#'+_this.prop.main).find('.app-slide-component').toggleClass('app-slide-component__top');
		});

		this.prop = {
			main: '',
			windows: ['actions', 'projects', 'contexts']
		};

		this._bind = function(){
			$.each(_this.prop.windows, function(key, name){
				$('.'+name+'-list__header').click(function(){
					window.location.hash = '#list/'+name
				});
			});
		};

		this._expand = function($that){
			var axe;
			var tb;
			var toggle = {
				'vertical': 'horizontal',
				'horizontal': 'vertical',
				'top': 'bottom',
				'bottom': 'top',
				'right': 'left',
				'left': 'right'
			};

			if( $that.hasClass('collapse-vertical') ){
				axe = 'vertical';
			}else if( $that.hasClass('collapse-horizontal') ){
				axe = 'horizontal';
			}

			if(axe){
				//main div toggle
				var $fullScreen = $('.expand-vertical.expand-horizontal');
				$fullScreen.toggleClass('expand-'+axe+' collapse-'+axe);
				$that.toggleClass('expand-'+axe+' collapse-'+axe);

				var toggleInt = '';
				var side      = $that.hasClass('top-right') || $that.hasClass('bottom-right') ? 'left' : 'right';

				if(axe==='vertical'){
					toggleInt = 'top-'+side+' bottom-'+side;
					$that.find('ul').toggleClass('app-list--vertical');
					$fullScreen.find('ul').toggleClass('app-list--vertical');
				}else{
					var level = $that.hasClass('top-right') || $that.hasClass('top-left') ? 'bottom' : 'top';
					toggleInt = level+'-left '+level+'-right';
				}

				$('.expand-'+axe+'.collapse-'+toggle[axe]).toggleClass(toggleInt);
				$('.collapse-horizontal.collapse-vertical').toggleClass(toggleInt);

			}
		};

		this.setMain = function(name){
			if(name!=_this.prop.main){
				_this.prop.main = name;
				_this._expand(cache[name].$);
			}
		};

		return {
			init: function(main){
				_this._bind();
			},
			setMain: _this.setMain
		};

	};

	//console.log('mainview', MainView);

	return MainView;

});