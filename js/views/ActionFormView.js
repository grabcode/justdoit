define([
	'backbone'
], function(Backbone){

	var ActionFormView = Backbone.View.extend({

		el: $('#action-form-container'),

		initialize: function(){
			console.log('events', this.events);
		},

		events: {
			'submit form': 'addAction'
		},

		addAction: function(e) {
			console.log('add action');

			e.preventDefault(); //prevent form post

			this.collection.add({
				id : this.$('.id').val(),
				label : this.$('.label').val(),
				text : this.$('.text').val()
			}, { error : _.bind(this.error, this) });

			this.$('input[type="text"]').val('');
		},

		error : function(model, error) {
			console.log(model, error);
			return this;
		}

	});

	return ActionFormView;

});