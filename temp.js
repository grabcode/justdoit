$(document).ready(function(){

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

	var app = {
		prop: {
			main: '',
			windows: ['actions', 'projects', 'contexts']
		},
		init: function(main){
			this.setMain(main);
			this._bind();
		},
		setMain: function(name){
			if(name!=this.prop.main){
				this.prop.main = name;
				this._expand(cache[name].$);
			}
		},
		_bind: function(){
			var _this = this;
			$.each(this.prop.windows, function(key, name){
				$('.'+name+'-list__header').click(function(){
					_this.setMain(name);
				});
			});
		},
		_expand: function($that){
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
		}
	};

	var main = window.location.hash && window.location.hash.split('#').length > 1 ? window.location.hash.split('#')[1] : 'actions';

	app.init(main);

	$('.projects-list__item, .contexts-list__item').click(function(){
		console.log('click');
		$(this).toggleClass('app-list__item--unselected app-list__item--selected');
	});

	$('button#add').click(function(){
		$('#'+app.prop.main).find('.app-slide-component').toggleClass('app-slide-component__top');
	});

	/*setTimeout(function(){
		$('.contexts-list__header').trigger('click');
		
		setTimeout(function(){
			$('.projects-list__header').trigger('click');
		}, 500);
	}, 500);*/



});