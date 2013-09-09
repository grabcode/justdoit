define([
	'backbone'
], function(Backbone){

	var ContextModel = Backbone.Model.extend({

		defaults: {
			id: '???',
			label: 'Be home',
			nature: 'geographical'
		},

		initialize: function (){
			console.log( 'ContextModel initialized:' + this.getId() );

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

	return ContextModel;

});