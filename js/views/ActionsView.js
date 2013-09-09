define([
	'backbone'
], function(Backbone){

	var ActionsView = Backbone.View.extend({

		el: $('#actions-container'),

		initialize: function(){
			this.template = _.template($('#actions-template').html());

			_.bindAll(this, 'render');
			this.collection.bind('change', this.render);
			this.collection.bind('add', this.render);
			this.collection.bind('remove', this.render);

			this.render();
		},

		render: function(){
			var renderedContent = this.template({ actions: this.collection.toJSON() });
			$(this.el).html(renderedContent);
			return this;
		}

	});

	return ActionsView;

});