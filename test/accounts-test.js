var jsdom = require("jsdom").jsdom;
var sinon = require('sinon');

global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert;
var app = require('../source/js/accounts.js');

//stubbed:
global.gadget = {
					token:"token",
					account : "hello",
					apihost: null
				}

describe('test accounts', function() {

	it('should pull test account data from stub', function(){
		
		// a sample response from ou campus:
		var staticResponse = {"country":"US","institution":"University of Northern Colorado"}
		// stub the a.jax call:
		sinon.stub($, "ajax").returns($.Deferred().resolve( staticResponse ));

		app.accounts.view().done(function(data){
			assert.equal("US", data.country);
			assert.equal("University of Northern Colorado", data.institution);
		});

	});

});