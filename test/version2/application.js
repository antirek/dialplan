(function() {
    var assert = require("assert");
    
    suite("App", function() {
    	var App = require("../../version2/application/");

        test('test application name', function() {
        	var app = App.Verbose("param");
            return assert.equal(app, 'Verbose(param)');
        });

        test('test application name', function() {
            var app = App.AddQueueMember("Queue", "Member");
            return assert.equal(app, 'AddQueueMember(Queue,Member)');
        });

        test('check validate count args = 2, pass 1', function() {
            return assert.throws(function(){
                var app = App.AddQueueMember("Queue");
            }, Error);
        });

        test('check validate count args = 2, pass 3', function() {
            return assert.throws(function(){
                var app = App.AddQueueMember("Queue", "Member1", "Member2");
            }, Error);
        });

    });

}).call(this);