define([
	'backbone',
	'localstorage',
	'models/ActionModel'
], function(Backbone, localstorage, ActionModel){

	var ActionsCollection = Backbone.Collection.extend({

		defaults: {
			name: 'unamed',
			desc: 'list of actions'
		},

		model: ActionModel,

		localStorage: new Store('actions'),

		initialize: function(prop){
			//properties and default values
			this.prop = prop ? _.defaults(prop, this.defaults) : this.defaults;
			console.log('ActionsCollection initialized: ' + this.getProp('name'));

			this.bind('add', function(model){
				model.save();
			});
		},

		getProp: function(key){
			return this.prop[key];
		},

		setProp: function(key, value){
			this.prop[key] = value;
		},

	});

	return ActionsCollection;

});