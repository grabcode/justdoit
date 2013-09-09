define([
	'backbone'
], function(Backbone){

	var ActionView = Backbone.View.extend({

		initialize: function(){
			this.el = $('#action-container');
			this.template = _.template($('#action-template').html());

			_.bindAll(this, 'render');
			this.model.bind('change:text', this.render);

			this.render();
		},

		setModel: function(model){
			this.model = model;
			return this;
		},

		render: function(){
			var renderedContent = this.template(this.model.toJSON());
			$(this.el).html(renderedContent);
			return this;
		}

	});

	return ActionView;

});