define([
	'backbone'
], function(Backbone){

	var ActionFormView = Backbone.View.extend({

		el: $('#actionform-container'),

		events: {
			'submit form': 'addAction'
		},

		initialize: function(prop){
			this.template = _.template($('#actionForm-template').html());
			this.contexts = prop.contexts;
		},

		addAction: function(e) {
			e.preventDefault(); //prevent form post

			var contexts = [];
			this.$('input[type="checkbox"]:checked').each(function(){
				contexts.push(this.value);
			});

			//todo: add action to context array

			this.collection.add({
				title : this.$('.title').val(),
				desc : this.$('.desc').val(),
				contexts: contexts,
				projects: []
			}, { invalid : _.bind(this.error, this) });

			this.$('input[type="text"]').val('');
		},

		error : function(model, error) {
			console.log(model, error);
			return this;
		},

		render: function(){
			var renderedContent = this.template({contexts: this.contexts.toJSON() });
			this.$el.html(renderedContent);
			return this;
		},

		close: function(){
			this.remove();
			this.unbind();
		}

	});

	return ActionFormView;

});
