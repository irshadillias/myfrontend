define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
   var  appUtilitis  = {
    appInitialize   : function (){
	   console.log("enter application utilities...");
       this.JrylibSerilization ()
    },
    JrylibSerilization  : function (){
		$.fn.serializeObject = function() {
			var o = {};
			var a = this.serializeArray();
			$.each(a, function() {
				if (o[this.name] !== undefined) {
					if (!o[this.name].push) {
						o[this.name] = [o[this.name]];
					}
					o[this.name].push(this.value || '');
				} else {
					o[this.name] = this.value || '';
				}
			});
			return o;
		};
    },
    ajaxPrefixing   : function (){
		$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
			options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
        });
    }	
     
   }
    
   return appUtilitis;

});