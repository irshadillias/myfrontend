define([
  'jquery',
  'underscore',
  'backbone',
  'models/user/UserModel',
  'text!templates/login/loginTemplate.html',
  
], function($, _,Backbone,UserModel,loginTemplate){

  var LoginView = Backbone.View.extend({
    el: $("#page"),
    
	events: {
        'submit .user-login-form': 'doLogin',
    },
	doLogin: function (ev) {
        var userDetails = $(ev.currentTarget).serializeObject();;
        var user = new UserModel({"query":userDetails.username});
		user.fetch({
          success: function (user) {
            //router.navigate('', {trigger:true});
              if(typeof(user.id)!="undefined"){
                  var myAppRouter = new Backbone.Router();
                  myAppRouter.navigate('showProjects',{trigger:true});
                  
               }else {
                alert("No such user");
               }
			
          }
        });
        return false;
    },
    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(loginTemplate);
    }

  });

  return LoginView;
  
});
