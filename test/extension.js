(function() {
    var assert = require("assert");
    
    suite("Extension", function() {
        var D = require('../index');
        var App = D.Application;

        test('test extension template', function() {
            var extension = new D.Extension('_2XXXXXX');
            return assert.equal(extension.template, '_2XXXXXX');
        });

        test('check extension append', function() {
            var extension = new D.Extension('_2XXXXXX');
            extension.append(App.Dial('qw', 120));
            
            return assert.deepEqual(
                extension.getDialplanSequence(), 
                ['_2XXXXXX,1,Dial(qw,120)']
                );
        });

        test('check extension append array', function() {

            var array = [
                App.Dial('qw', 120),
                App.Hangup()
            ];

            var extension1 = new D.Extension('_2XXXXXX');
            extension1.append(array);

            var extension2 = new D.Extension('_2XXXXXX');
            extension2.append(App.Dial('qw', 120));
            extension2.append(App.Hangup());

            return assert.deepEqual(
                extension1.getDialplanSequence(),
                extension2.getDialplanSequence()
                );
        });

        test('check throw error extension append empty array', function() {
            var extension = new D.Extension('_2XXXXXX');
             return assert.throws(function(){
                extension.append([]);
            }, Error);
        });

        test('check throw error extension append empty ', function() {
            var extension = new D.Extension('_2XXXXXX');
             return assert.throws(function(){
                extension.append();
            }, Error);
        });

        test('check extension append with label', function() {
            var extension = new D.Extension('_2XXXXXX');            
            extension.append('dial', App.Dial('qw', 120));
            
            return assert.deepEqual(
                extension.getDialplanSequence(), 
                ['_2XXXXXX,1(dial),Dial(qw,120)']
                );
        });
        
    });

}).call(this);