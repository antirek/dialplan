(function() {
    var assert = require("assert");    
    
    suite("Verbose", function() {
    	var Verbose = require("../applications/verbose");	
        test('test application name', function() {
        	var verbose = new Verbose();
            return assert.equal(verbose.getName(), 'Verbose');
        });
        test('check output format 1', function() {
        	var verbose = new Verbose('Hello');
            return assert.equal(verbose.getAsString(), 'Verbose(0,Hello)');
        });
        test('check output format 2', function() {
        	var verbose = new Verbose(2, 'Hello as 2');
            return assert.equal(verbose.getAsString(), 'Verbose(2,Hello as 2)');
        });
        
    });

}).call(this);