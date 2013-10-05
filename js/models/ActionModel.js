define([
	'backbone',
	'services/utils'
], function(Backbone, Utils){

	var ActionModel = Backbone.Model.extend({

		defaults: {
			id: Utils.guid(),
			title: '',
			desc: '',
			status: 'todo',
			contexts: [],
			projects: []
		},

		initialize: function(){
			this.bind('invalid', function(model, error){
				return error;
			});
		},

		validate: function(attrs) {
			var validations = {};

			if(attrs.text === '') {
				validations['ERRVAL101'] = 'title must be non empty';
			}

			if(_.keys(validations).length === 0)
				return null;
			else
				return validations;
		},

		remove: function(){
			this.destroy();
		},

		setStatus: function(status){
			this.status = status;
		}

	});

	return ActionModel;

});