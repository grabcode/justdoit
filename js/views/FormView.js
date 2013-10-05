define([
	'backbone'
], function(Backbone){

	var FormView = Backbone.View.extend({

		el: $('#form-container'),

		events: {
			'submit form': 'add'
		},

		initialize: function(prop){
			console.log(prop);
			this.template = _.template($('#'+type+'Form-template').html());
			this.render();
		},

		add: function(e) {
			e.preventDefault(); //prevent form post

			var hash = {};
			hash = {
				description : this.$('.descrition').val(),
				text : this.$('.text').val()
			}

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
		}

	});

	return FormView;

});
