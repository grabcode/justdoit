define([
	'backbone',
	'localstorage',
	'models/ProjectModel'
], function(Backbone, localstorage, ProjectModel){

	var ProjectsCollection = Backbone.Collection.extend({

		model: ProjectModel,

		localStorage: new Store('projects'),

		initialize: function(prop){
			this.bind('add', function(model){
				model.save();
				if(model.validationError !== null){
					console.log('error!', this.remove(model));
				}
			});
		}

	});

	return ProjectsCollection;

});