define([
	'backbone'
], function(Backbone){

	var ContextFormView = Backbone.View.extend({

		el: $('#contextform-container'),

		events: {
			'submit form': 'add'
		},

		initialize: function(prop){
			this.template = _.template($('#contextForm-template').html());
		},

		add: function(e) {
			e.preventDefault(); //prevent form post

			var hash = {
				title: this.$('.title').val(),
				desc: this.$('.desc').val(),
				nature: this.$('.nature').val()
			};

			this.collection.add(hash, { invalid : _.bind(this.error, this) });

			this.$('input[type="text"]').val('');
		},

		error : function(model, error) {
			console.log(model, error);
			return this;
		},

		render: function(){
			var renderedContent = this.template();
			this.$el.html(renderedContent);
			return this;
		},

		close: function(){
			this.remove();
			this.unbind();
		}

	});

	return ContextFormView;

});
