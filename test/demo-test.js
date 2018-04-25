var jsdom = require("jsdom").jsdom;
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");


global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 

chai.use(chaiAsPromised);

var assert = chai.assert; //require('assert');
var app = require('../source/js/demo.js');

//stubbed:
global.gadget = { account : "hello" }

describe('test demo', function() {

	it('should say Hello', function(){
		assert.equal( app.demo.helloWorld(), "Hello World!" );
	});

	it('should say goodbye', function(){
		assert.equal( app.demo.byeWorld(), "Goodbye!" );
	});

	it('should say hurray via a promise', function(){
		return assert.eventually.equal( app.demo.getPromise(), "hurray" );
	});

	it('should return global gadget.account from demo', function(){	
		assert.equal("hello", app.demo.getAccount() );
	})

});