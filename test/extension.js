(function() {
    var assert = require("assert");
    
    suite("Extension", function() {
    	var Extension = require("../extension");	
        var Dial = require('../applications/dial');

        test('test extension template', function() {
        	var extension = new Extension('_2XXXXXX');
            return assert.equal(extension.template, '_2XXXXXX');
        });

        test('check extension sequence', function() {
        	var extension = new Extension('_2XXXXXX');
            extension.append(new Dial('qw',120));
            var result = [];
            result.push('_2XXXXXX,1,Dial(qw,120)');
            return assert.deepEqual(extension.getDialplanSequence(), result);
        });

        test('check throw error with append not application', function() {
            var extension = new Extension('_2XXXXXX');            
            return assert.throws(function(){
                gotoiftime.getAsString('Dial');
            }, Error);
        });
        
    });

}).call(this);