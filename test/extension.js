(function() {
    var assert = require("assert");
    
    suite("Extension", function() {
        var Extension = require("../extension");

        test('test extension template', function() {
            var extension = new Extension('_2XXXXXX');
            return assert.equal(extension.template, '_2XXXXXX');
        });

        test('check extension append', function() {
            var extension = new Extension('_2XXXXXX');
            var Dial = require('../applications/dial');
            extension.append(new Dial('qw', 120));
            
            return assert.deepEqual(
                extension.getDialplanSequence(), 
                ['_2XXXXXX,1,Dial(qw,120)']
                );
        });

        test('check extension append with label', function() {
            var extension = new Extension('_2XXXXXX');
            var Dial = require('../applications/dial');
            extension.append('dial', new Dial('qw', 120));
            
            return assert.deepEqual(
                extension.getDialplanSequence(), 
                ['_2XXXXXX,1(dial),Dial(qw,120)']
                );
        });

        test('check throw error with append not application', function() {
            var extension = new Extension('_2XXXXXX');
            return assert.throws(function(){
                extension.append('Dial');
            }, Error);
        });
        
    });

}).call(this);