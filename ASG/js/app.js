// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
  'appUtilitis'  
], function($, _, Backbone, Router,appUtilitis){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
	appUtilitis.appInitialize();
  };

  return { 
    initialize: initialize
  };
});
