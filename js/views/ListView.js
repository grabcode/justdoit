define([
	'backbone'
], function(Backbone){

	var ListView = Backbone.View.extend({

		el: $('#sub-container'),

		events: {
			'click .remove': 'removeModel'
		},

		initialize: function(){
			var $tpl = $('#list-template');
			this.template = _.template($tpl.html());

			_.bindAll(this, 'render');
			this.listenTo(this.collection, 'change', this.render);
			this.listenTo(this.collection, 'add', this.render);
			this.listenTo(this.collection, 'remove', this.render);

			this.render();
		},

		render: function(){
			var renderedContent = this.template({ items: this.collection.toJSON() });
			this.$el.html(renderedContent);
			return this;
		},

		getModelId: function(ev){
			return $(ev.currentTarget).parent('li').attr('id');
		},

		//todo: set status of action

		removeModel: function(ev){
			this.collection.get(this.getModelId(ev)).remove();
		},

		close: function(){
			this.remove();
			this.unbind();
		}

	});

	return ListView;

});