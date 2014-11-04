(function() {
    var assert = require("assert");
    
    suite("ExecIf", function() {
    	var ExecIf = require("../../applications/execif");
        var Dial = require("../../applications/dial");
        test('test application name', function() {
        	var execif = new ExecIf("SIP/120");
            return assert.equal(execif.getName(), 'ExecIf');
        });        
        test('check output format 1', function() {
        	var execif = new ExecIf("condition", new Dial("SIP/1000"));
            return assert.equal(execif.getAsString(), 'ExecIf(condition?Dial(SIP/1000):)');
        });
        test('check output format 2', function() {
        	var execif = new ExecIf("condition", new Dial("SIP/1000"), new Dial("SIP/1002"));
            return assert.equal(execif.getAsString(), 'ExecIf(condition?Dial(SIP/1000):Dial(SIP/1002))');
        });
        test('check throw error 1', function() {
            var execif = new ExecIf();
            return assert.throws(function(){
                execif.getAsString() 
            }, Error);
        });
        test('check throw error 2', function() {
            var execif = new ExecIf('condition', 'Dial(SIP/100)');
            return assert.throws(function(){
                execif.getAsString() 
            }, Error);
        });
        test('check throw error 3', function() {
            var execif = new ExecIf('condition', new Dial('SIP/100'), 'Dial(SIP/102)');
            return assert.throws(function(){
                execif.getAsString() 
            }, Error);
        });
    });

}).call(this);