// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/projects/ProjectsView',
  'views/login/LoginView',
  'views/contributors/ContributorsView',
  'views/footer/FooterView',
  'views/uml/CreateUmlView'
], function($, _, Backbone, HomeView, ProjectsView, LoginView, ContributorsView, FooterView,UmlView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users': 'showContributors',
      'login': 'loginApp',
      'uml' : 'createUml',
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showProjects', function(){
   
        // Call render on the module we loaded in via the dependency array
        var projectsView = new ProjectsView();
        projectsView.render();

    });

    app_router.on('route:showContributors', function () {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var contributorsView = new ContributorsView();
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });
	
	app_router.on('route:loginApp', function (actions) {
     
       // We have no matching route, lets display the home page 
        var loginView = new LoginView();
        loginView.render();
    });
    
    app_router.on('route:createUml', function (actions) {
     
       // We have no matching route, lets display the home page 
        var umlView = new UmlView();
        umlView.render();
    });
      
      

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
