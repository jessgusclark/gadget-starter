(function(exports) {
	"use strict";

	//public functions:
	var demo = {

	  	helloWorld : function(){
	  		return "Hello World!";
	  	},
	  	byeWorld : function(){
	  		return goodbyeWorld();
	  	}

	};


	//private functions:
	function goodbyeWorld(){
		return "Goodbye!";
	}

   exports.demo = demo;

})(this);