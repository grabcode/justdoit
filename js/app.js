define([
	'backbone',
	'collections/ActionsCollection',
	'models/ActionModel',
	'views/ActionView',
	'views/ActionsView',
	'views/ActionFormView'
], function(Backbone, ActionsCollection, ActionModel, ActionView, ActionsView, ActionFormView){

	var initialize = function(){
	
		action1 = new ActionModel({id: '001', text: 'do that 1'});
		action2 = new ActionModel({id: '002', text: 'do that 2'});
		action3 = new ActionModel({id: '003', text: 'do that 3'});

		actions = new ActionsCollection(); //{name: 'Just do it', deadline: 'End of september'}

		//actions.add([action1, action3]);
		actions.fetch();

		//actionView = new ActionView({model: action1});
		//actionView.setModel(actions.get('001')).render();

		actionFormView = new ActionFormView({collection: actions});
		actionsView = new ActionsView({collection: actions});

		actionsView.render();

		/*project2 = new ActionsCollection();

		project1.add([action1, action3]);
		project2.add([action2, action3]);*/

	};

	return {
		initialize: initialize
	};
});