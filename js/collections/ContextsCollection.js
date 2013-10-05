define([
	'backbone',
	'localstorage',
	'models/ContextModel'
], function(Backbone, localstorage, ContextModel){

	var ContextsCollection = Backbone.Collection.extend({

		defaults: {
			model: 'context'
		},

		model: ContextModel,

		localStorage: new Store('contexts'),

		initialize: function(prop){
			//properties and default values
			this.prop = prop ? _.defaults(prop, this.defaults) : this.defaults;

			this.bind('add', function(model){
				model.save();
				if(model.validationError !== null){
					console.log('error!', this.remove(model));
				}
			});
		}

	});

	return ContextsCollection;

});