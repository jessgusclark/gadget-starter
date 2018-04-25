(function(exports) {
	"use strict";

	//public functions:
	var demo = {

	  	helloWorld : function(){
	  		return "Hello World!";
	  	},
	  	byeWorld : function(){
	  		return goodbyeWorld();
	  	},
	  	getPromise : function() {
			var deferred = $.Deferred();

			setTimeout(function(){
		    	deferred.resolve("hurray");
			}, 100);

			return deferred.promise();
		},
		getAccount : function(){
			return gadget.account;
		}

	};


	//private functions:
	function goodbyeWorld(){
		return "Goodbye!";
	}
	
   exports.demo = demo;

})(this);