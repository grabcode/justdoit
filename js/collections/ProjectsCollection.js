define([
	'backbone',
	'localstorage',
	'models/ProjectModel'
], function(Backbone, localstorage, ProjectModel){

	var ProjectsCollection = Backbone.Collection.extend({

		model: ProjectModel,

		localStorage: new Store('projects'),

		initialize: function(prop){
			console.log('ProjectsCollection initialized');
		}

	});

	return ProjectsCollection;

});