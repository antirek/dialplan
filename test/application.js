(function() {
    var assert = require("assert");
    
    suite("App", function() {
        var D = require("../index");
    	var App = D.Application;
        var Func = D.Function;
        var H = D.Helper;

        test('test application name', function() {
        	var app = App.Verbose("param");
            return assert.equal(app, 'Verbose(param)');
        });

        test('test application name', function() {
            var app = App.AddQueueMember("Queue", "Member");
            return assert.equal(app, 'AddQueueMember(Queue,Member)');
        });

        test('test application name', function() {
            var app = App.AddQueueMember("Queue", "Member");
            return assert.equal(app, 'AddQueueMember(Queue,Member)');
        });

        test('test application + function + helper $', function() {
            var app = App.Verbose(0, H.$(Func.CDR("billsec")));
            return assert.equal(app, 'Verbose(0,${CDR(billsec)})');
        });

        test('test application + function + helper global', function() {
            var app = App.Verbose(0, H.$(H.Global("billsec")));
            return assert.equal(app, 'Verbose(0,${__billsec})');
        });

        test('test application + function + helper expression', function() {
            var app = App.Verbose(0, H.Expression(H.$(Func.CDR("billsec")), '>', 0));
            return assert.equal(app, 'Verbose(0,$[${CDR(billsec)}>0])');
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

        test('check validate count min', function() {
            return assert.throws(function(){
                var app = App.AGI();
            }, Error);
        });

        test('check validate count max', function() {
            return assert.throws(function(){
                var app = App.AgentLogin("param1", "param2", "param3");
            }, Error);
        });

        test('check validate count helper expression args', function() {
            return assert.throws(function(){
                var app = App.Verbose(0, H.Expression(H.$(Func.CDR("billsec")), '>'));
            }, Error);
        });

        test('check helper condition 1', function() {
            var condition = H.Condition("Expression", "label1");
            return assert.equal(condition, 'Expression?label1');
        });

        test('check helper condition 2', function() {
            var condition = H.Condition("Expression", "label1", "label2");
            return assert.equal(condition, 'Expression?label1:label2');
        });

    });

}).call(this);