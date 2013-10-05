define([
	'backbone',
	'services/utils'
], function(Backbone, Utils){

	var ProjectModel = Backbone.Model.extend({

		defaults: {
			id: Utils.guid(),
			title: '',
			desc: '',
			rate: ''
		},

		initialize: function (){
			this.bind('invalid', function(model, error){
				console.log( error );
			});

			//todo: listen to action status change to update rate
		},

		validate: function(attrs) {
			var validations = {};

			if(attrs.title === '') {
				validations['ERRVAL301'] = 'title must be non empty';
			}

			if(_.keys(validations).length === 0)
				return null;
			else
				return validations;
		},

	});

	return ProjectModel;

});