define([
	'backbone',
	'services/utils'
], function(Backbone, Utils){

	var ContextModel = Backbone.Model.extend({

		defaults: {
			id: Utils.guid(),
			title: '',
			details: '',
			nature: ''
		},

		initialize: function (){
			this.bind('invalid', function(model, error){
				console.log( error );
			});
		},

		validate: function(attrs) {
			var validations = {};

			if(attrs.text === '') {
				validations['ERRVAL201'] = 'title must be non empty';
			}

			if(_.keys(validations).length === 0)
				return null;
			else
				return validations;
		},

		remove: function(){
			this.destroy();
		}

	});

	return ContextModel;

});