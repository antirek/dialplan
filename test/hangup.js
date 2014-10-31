(function() {
    var assert = require("assert");
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
}).call(this);