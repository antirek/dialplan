(function() {
    var assert = require("assert");
    
    suite("System", function() {
    	var System = require("../../applications/system");	
        test('test application name', function() {
        	var system = new System("/tmp/bash.sh");
            return assert.equal(system.getName(), 'System');
        });
        test('check output format 1', function() {
        	var system = new System("/tmp/bash.sh --qwerty");
            return assert.equal(system.getAsString(), 'System(/tmp/bash.sh --qwerty)');
        });
        test('check throw error 1', function() {
            var system = new System();
            return assert.throws(function(){
                system.getAsString()
            }, Error);
        });
    });

}).call(this);