(function() {
    var assert = require("assert");
    
    suite("Goto", function() {
    	var Goto = require("../../applications/goto");	
        test('test application name', function() {
        	var goto = new Goto("context,extension,priority");
            return assert.equal(goto.getName(), 'Goto');
        });
        test('check output format 1', function() {
        	var goto = new Goto("context, extension, priority");
            return assert.equal(goto.getAsString(), 'Goto(context,extension,priority)');
        });
        test('check throw error 1', function() {
            var goto = new Goto();
            return assert.throws(function(){
                goto.getAsString() 
            }, Error);
        });
    });

}).call(this);