(function() {
    var assert = require("assert");
    
    suite("SayNumber", function() {
    	var SayNumber = require("../../applications/saynumber");	
        test('test application name', function() {
        	var saynumber = new SayNumber("123");
            return assert.equal(saynumber.getName(), 'SayNumber');
        });
        test('check output format 1', function() {
        	var saynumber = new SayNumber("123");
            return assert.equal(saynumber.getAsString(), 'SayNumber(123)');
        });
        test('check output format 2', function() {
        	var saynumber = new SayNumber("123", 'male');
            return assert.equal(saynumber.getAsString(), 'SayNumber(123,male)');
        });        
        test('check throw error 1', function() {
            var saynumber = new SayNumber();
            return assert.throws(function(){
                saynumber.getAsString() 
            }, Error);
        });
    });

}).call(this);