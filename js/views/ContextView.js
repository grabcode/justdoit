define([
	'backbone'
], function(Backbone){

	var ContextView = Backbone.View.extend({

		el: $('#sub-container'),

		initialize: function(model){

			this.template = _.template($('#context-template').html());

			this.setModel(model);

			_.bindAll(this, 'render');
			this.model.bind('change', this.render);
			this.render();
		},

		setModel: function(model){
			this.model = model;
		},

		render: function(){
			var renderedContent = this.template(this.model.toJSON());
			this.$el.html(renderedContent);
			return this;
		}

	});

	return ContextView;

});