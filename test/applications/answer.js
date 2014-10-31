(function() {
    var assert = require("assert");
    
    suite("Answer", function() {
    	var Answer = require("../../applications/answer");	
        test('test application name', function() {
        	var answer = new Answer();
            return assert.equal(answer.getName(), 'Answer');
        });
        test('check output format 1', function() {
        	var answer = new Answer();
            return assert.equal(answer.getAsString(), 'Answer()');
        });
        test('check output format 2', function() {
            var answer = new Answer("10");
            return assert.equal(answer.getAsString(), 'Answer(10)');
        });
        test('check output format 3', function() {
            var answer = new Answer(500);
            return assert.equal(answer.getAsString(), 'Answer(500)');
        });
    });

}).call(this);