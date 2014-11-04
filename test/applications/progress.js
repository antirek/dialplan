(function() {
    var assert = require("assert");
    
    suite("Progress", function() {
    	var Progress = require("../../applications/progress");	
        test('test application name', function() {
        	var progress = new Progress();
            return assert.equal(progress.getName(), 'Progress');
        });
        test('check output format 1', function() {
        	var progress = new Progress();
            return assert.equal(progress.getAsString(), 'Progress()');
        });
        test('check throw error 1', function() {
            var progress = new Progress(10);
            return assert.throws(function(){
                progress.getAsString() 
            }, Error);
        });
    });

}).call(this);