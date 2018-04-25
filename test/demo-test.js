var jsdom = require("jsdom").jsdom;
var sinon = require('sinon');

global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert;
var app = require('../source/js/demo.js');


describe('test ', function() {

	it('should say Hello', function(){
		assert.equal( app.demo.helloWorld(), "Hello World!" );
	});

	it('should say goodbye', function(){
		assert.equal( app.demo.byeWorld(), "Goodbye!" );
	})

});