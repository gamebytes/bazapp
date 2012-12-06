define([
  'backbone'
], function(Backbone){
	var Router = Backbone.Router.extend({
        routes: {
            'letters' : 'letters',
            'numbers' : 'numbers',
            ''  : 'all'
        }
    });

    return Router;
});