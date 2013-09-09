define([
	'backbone'
], function(Backbone){

	var ActionModel = Backbone.Model.extend({

		defaults: {
			id: '???',
			label: 'Do that',
			text: 'lorem ipsum',
			keywords: 'w1, w2, w3'
		},

		initialize: function (){
			console.log( 'ActionModel initialized:' + this.getId() );

			this.bind('invalid', function(model, error){
				console.log( error );
			});

		},

		getId: function(){
			return this.get('id');
		},

		setText : function(value) {
			this.set({ text : value, validate: true });
		},

		validate: function( attrs ) {
			console.log('validate');
			if(attrs.text === '') {
				return 'text must be non empty';
			}
		}

	});

	return ActionModel;

});