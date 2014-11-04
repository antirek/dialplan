(function() {
    var assert = require("assert");
    
    suite("AGI", function() {
    	var AGI = require("../../applications/agi");	
        test('test application name', function() {
        	var agi = new AGI("/tmp/init.sh");
            return assert.equal(agi.getName(), 'AGI');
        });
        test('check output format 1', function() {
        	var agi = new AGI("http://127.0.0.1:3000/init");
            return assert.equal(agi.getAsString(), 'AGI(http://127.0.0.1:3000/init)');
        });
        test('check output format 2', function() {
            var agi = new AGI("http://127.0.0.1:3000/init","param1");
            return assert.equal(agi.getAsString(), 'AGI(http://127.0.0.1:3000/init,param1)');
        });
        test('check output format 3', function() {
            var agi = new AGI("http://127.0.0.1:3000/init", "param1", "param2", "param3");
            return assert.equal(agi.getAsString(), 'AGI(http://127.0.0.1:3000/init,param1,param2,param3)');
        });
        test('check throw error', function() {
            var agi = new AGI();
            return assert.throws(function(){ 
                agi.getAsString() 
            }, Error);
        });  
    });

}).call(this);