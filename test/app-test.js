var jsdom = require("jsdom").jsdom;
var sinon = require('sinon');

global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert;
//var app = require('../source/js/sourceFile.js');


describe('test ', function() {

	it('should pass', function(){
		assert.equal(1, 1 );
	});

});