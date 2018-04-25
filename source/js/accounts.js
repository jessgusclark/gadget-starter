(function(exports) {
	"use strict";

	//public functions:
	var accounts = {

		view : function(){
			var deferred = $.Deferred();

	  		var data = {
	  			"authorization_token" : gadget.token,
	  			"account" : gadget.account
	  		}
	  		
	  		$.ajax({
				dataType: "json",
				url: gadget.apihost + "/accounts/view",
				data: data
			}).done(function(data){
				//console.log("accounts success", data);
				deferred.resolve(data);
			}).fail(function(err){
				console.log("accounts error", err);
			});

			return deferred.promise();
	  	}
	}

	exports.accounts = accounts;

})(this);