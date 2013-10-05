define([
	'backbone',
	'localstorage',
	'models/ActionModel'
], function(Backbone, localstorage, ActionModel){

	var ActionsCollection = Backbone.Collection.extend({

		model: ActionModel,

		localStorage: new Store('actions'),

		initialize: function(){
			//properties and default values
			//this.prop = prop ? _.defaults(prop, this.defaults) : this.defaults;

			this.bind('add', function(model){
				model.save();
				if(model.validationError !== null){
					console.log('error!', this.remove(model));
				}
			});
		}

	});

	return ActionsCollection;

});