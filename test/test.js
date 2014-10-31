(function() {
    var assert = require("assert");
    
    suite("Dial", function() {
    	var Dial = require("../applications/dial");	
        test('test application name', function() {
        	var dial = new Dial("SIP/120");
            return assert.equal(dial.getName(), 'Dial');
        });
        test('check output format 1', function() {
        	var dial = new Dial("SIP/120");
            return assert.equal(dial.getAsString(), 'Dial(SIP/120)');
        });
        test('check output format 2', function() {
        	var dial = new Dial("SIP/120", 180);
            return assert.equal(dial.getAsString(), 'Dial(SIP/120,180)');
        });
        test('check output format 3', function() {
        	var dial = new Dial("SIP/120", 180, 'tTO');
            return assert.equal(dial.getAsString(), 'Dial(SIP/120,180,tTO)');
        });
    });

    suite("Hangup", function() {
    	var Hangup = require("../applications/hangup");	
        test('test application name', function() {
        	var hangup = new Hangup();
            return assert.equal(hangup.getName(), 'Hangup');
        });
        test('check output format 1', function() {
        	var hangup = new Hangup();
            return assert.equal(hangup.getAsString(), 'Hangup()');
        });
        test('check output format 2', function() {
        	var hangup = new Hangup(22);
            return assert.equal(hangup.getAsString(), 'Hangup(22)');
        });
    });

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