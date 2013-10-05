// Filename: main.js

require.config({
  urlArgs: "ts="+new Date().getTime(),
  paths: {
    zepto: '../vendors/zepto',
    underscore: '../vendors/underscore',
    backbone: '../vendors/backbone',
    localstorage: '../vendors/backbone-localStorage'
  },
  shim: {
		/*zepto: {exports: '$'},
    underscore: {exports: '_'},*/
    backbone: {
      deps: ['underscore', 'zepto'],
      exports: 'Backbone'
    }
  }

});

require([
  'app',
], function(App){
  App.initialize();
});