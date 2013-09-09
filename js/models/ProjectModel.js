define([
	'backbone'
], function(Backbone){

	var ProjectModel = Backbone.Model.extend({

		defaults: {
			id: '???',
			name: 'Project name'
		},

		initialize: function (){
			console.log( 'ProjectModel initialized:' + this.getId() );

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

	return ProjectModel;

});