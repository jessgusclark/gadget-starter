var jsdom = require("jsdom").jsdom;
var sinon = require('sinon');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");


global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 

chai.use(chaiAsPromised);

var assert = chai.assert; //require('assert');
var app = require('../source/js/demo.js');


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

});