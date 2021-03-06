//Filename: boilerplate.js

define([
	'backbone',
	'collections/ActionsCollection',
	'collections/ContextsCollection',
	'views/ActionView',
	'views/ContextView',
	'views/ListView',
	'views/ActionFormView',
	'views/ContextFormView'
], function(Backbone, ActionsCollection, ContextsCollection, ActionView, ContextView, ListView, ActionFormView, ContextFormView){

	function AppView($container){

		this.show = function(view){
			if(this.currentView){
				this.currentView.close();
			}

			this.currentView = view;
			this.currentView.render();

			$container.html(this.currentView.el);
		}

		this.showList = function(collection){
			var listView = new ListView(collection);
			this.show(listView);
		}

		this.hide = function(){
			if(this.currentView){
				this.currentView.close();
			}

			$container.html('');
		}
	}

	var AppRouter = Backbone.Router.extend({

		routes: {
			'item/:id/:mode': 'item',
			'actions': 'actions',
			'action/:id/:mode': 'action',
			'contexts': 'contexts',
			'context/:id/:mode': 'context',
			'.*': 'default'
		}

	});

	var initialize = function(){

		/* Init app */
		var collections = {};

		var actions = new ActionsCollection();
		actions.fetch({silent: true});
		collections['actions'] = actions;

		var contexts = new ContextsCollection();
		contexts.fetch({silent: true});
		collections['contexts'] = contexts;

		/* Start routing */
		var appRouter = new AppRouter();

		var actionFormView  = new ActionFormView({collection: collections.actions, contexts: collections.contexts});
		var contextFormView = new ContextFormView({collection: collections.contexts});

		var pageView = new AppView($('.page'));
		var formView = new AppView($('#test'));

		appRouter.on('route:actions', function(){
			var collection = {collection: collections.actions};
			pageView.showList(collection);
			formView.show(actionFormView);
		});

		appRouter.on('route:action', function(id, mode){
			var actionView = new ActionView(actions.get(id), collections.contexts);
			formView.hide();
		});

		appRouter.on('route:contexts', function(){
			var collection = {collection: collections.contexts};
			pageView.showList(collection);
			formView.show(contextFormView);
		});

		appRouter.on('route:item', function(id, mode){
			var actionView = new ActionView(actions.get(id), collections.contexts);
			formView.hide();
		});

		appRouter.on('route:default', function(){
			this.navigate('actions', {trigger: true});
		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});