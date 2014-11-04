(function() {
    var assert = require("assert");
    
    suite("Echo", function() {
    	var Echo = require("../../applications/echo");	
        test('test application name', function() {
        	var echo = new Echo();
            return assert.equal(echo.getName(), 'Echo');
        });
        test('check output format 1', function() {
        	var echo = new Echo();
            return assert.equal(echo.getAsString(), 'Echo()');
        });
        test('check throw error 1', function() {
            var echo = new Echo(10);
            return assert.throws(function(){
                echo.getAsString() 
            }, Error);
        });
    });

}).call(this);