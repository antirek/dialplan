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

        test('check extension append array', function() {
            
            var App = require('../applications/index');

            var array = [
                new App.Dial('qw', 120),
                new App.Hangup()
            ];

            var extension1 = new Extension('_2XXXXXX');
            extension1.append(array);

            var extension2 = new Extension('_2XXXXXX');
            extension2.append(new App.Dial('qw', 120));
            extension2.append(new App.Hangup());

            return assert.deepEqual(
                extension1.getDialplanSequence(),
                extension2.getDialplanSequence()
                );
        });

        test('check throw error extension append empty array', function() {
            var extension = new Extension('_2XXXXXX');
             return assert.throws(function(){
                extension.append([]);
            }, Error);
        });

        test('check throw error extension append empty ', function() {
            var extension = new Extension('_2XXXXXX');
             return assert.throws(function(){
                extension.append();
            }, Error);
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