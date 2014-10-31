(function() {
    var assert = require("assert");
    
    suite("GotoIf", function() {
    	var GotoIf = require("../applications/gotoif");	
        test('test application name', function() {
        	var gotoif = new GotoIf("SIP/120");
            return assert.equal(gotoif.getName(), 'GotoIf');
        });
        test('check output format 1', function() {
        	var gotoif = new GotoIf("condition");
            return assert.equal(gotoif.getAsString(), 'GotoIf(condition?)');
        });
        test('check output format 2', function() {
        	var gotoif = new GotoIf("condition", 1);
            return assert.equal(gotoif.getAsString(), 'GotoIf(condition?1)');
        });
        test('check output format 3', function() {
        	var gotoif = new GotoIf("condition", 1, 2);
            return assert.equal(gotoif.getAsString(), 'GotoIf(condition?1:2)');
        });
    });

}).call(this);