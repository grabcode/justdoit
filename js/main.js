// Filename: main.js

require.config({
  urlArgs: "ts="+new Date().getTime(),
  paths: {
    zepto: '../vendors/zepto',
    underscore: '../vendors/underscore',
    backbone: '../vendors/backbone',
    localstorage: '../vendors/backbone-localStorage',
    fastclick: '../vendors/fastclick',
    'overthrow-detect': '../vendors/overthrow/overthrow-detect',
    'overthrow-polyfill': '../vendors/overthrow/overthrow-polyfill',
    'overthrow-toss': '../vendors/overthrow/overthrow-toss',
    'overthrow-init': '../vendors/overthrow/overthrow-init'
  },
  shim: {
    zepto: {
      exports: '$'
    },
    backbone: {
      deps: ['underscore', 'zepto'],
      exports: 'Backbone'
    }/*,
    overthrow: {
      deps: ['overthrow-detect', 'overthrow-polyfill', 'overthrow-toss', 'overthrow-init']
    }*/
  }

});

require([
  'app'
], function(App){
  App.initialize();
});