var jsdom = require("jsdom").jsdom;
var sinon = require('sinon');

global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert;
var app = require('../source/js/accounts.js');


describe('test accounts', function() {

	it('should pull test account from stub', function(){
		//assert.equal(1, 1 );
	});

});