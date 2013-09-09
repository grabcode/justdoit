define([
	'backbone',
	'localstorage',
	'models/ContextModel'
], function(Backbone, localstorage, ContextModel){

	var ContextsCollection = Backbone.Collection.extend({

		model: ContextModel,

		localStorage: new Store('contexts'),

		initialize: function(prop){
			console.log('ProjectsCollection initialized');
		}

	});

	return ContextsCollection;

});