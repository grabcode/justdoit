define([
	'backbone'
], function(Backbone){

	var ActionView = Backbone.View.extend({

		el: $('.actions-list__container'),

		initialize: function(action, contexts){

			console.log('action view initialized');

			this.template = _.template($('#actions-template').html());

			this.setModels(action, contexts);

			_.bindAll(this, 'render');
			this.model.bind('change', this.render);
			this.render();
		},

		setModels: function(actions, contexts){
			this.model    = actions;
			this.contexts = contexts;
		},

		render: function(){
			this.resolveModelDep();
			/*var fakeActions = [
				{id: '01', title: 'Do that'},
				{id: '02', title: 'Do this'},
				{id: '03', title: 'And that'},
				{id: '04', title: 'Take him'},
				{id: '05', title: 'Execute it'}
			];*/
			var renderedContent = this.template({actions: this.model.toJSON()});
			this.$el.html(renderedContent);
			return this;
		},

		resolveModelDep: function(){
			var _this    = this;
			this.data    = this.model.toJSON();
			var contexts = [];
			_.each(this.data.contexts, function(id){
				contexts.push({
					id: id,
					title: _this.contexts.get(id).attributes.title
				});
			});
			this.data.contexts = contexts;
		}

	});

	return ActionView;

});