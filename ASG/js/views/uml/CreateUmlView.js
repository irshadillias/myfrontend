define([
  'jquery',
  'underscore',
  'backbone',
  'models/user/UserModel',
  'views/uml/UmlDiagremView',
  'text!templates/uml/createUmlTemplate.html',
  
], function($, _,Backbone,UserModel,UmlDiagramView,umlPageTemplate){

  var CreateUmlView = Backbone.View.extend({
    el: $("#page"),
	
	 render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(umlPageTemplate);
      var umlView   = new UmlDiagramView();
      umlView.render();
    }

  });

  return CreateUmlView;
  
});
