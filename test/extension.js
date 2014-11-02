(function() {
    var assert = require("assert");
    
    suite("Extension", function() {
        var Extension = require("../extension");

        test('test extension template', function() {
            var extension = new Extension('_2XXXXXX');
            return assert.equal(extension.template, '_2XXXXXX');
        });

        test('check extension sequence', function() {
            var extension = new Extension('_2XXXXXX');
            var Dial = require('../applications/dial');
            extension.append(new Dial('qw', 120));
            
            return assert.deepEqual(
                extension.getDialplanSequence(), 
                ['_2XXXXXX,1,Dial(qw,120)']
                );
        });

        test('check throw error with append not application', function() {
            var extension = new Extension('_2XXXXXX');
            return assert.throws(function(){
                gotoiftime.getAsString('Dial');
            }, Error);
        });
        
    });

}).call(this);