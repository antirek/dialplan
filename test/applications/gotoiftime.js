(function() {
    var assert = require("assert");
    
    suite("GotoIfTime", function() {
    	var GotoIfTime = require("../../applications/gotoiftime");	
        test('test application name', function() {
        	var gotoiftime = new GotoIfTime("18:00,mon-fri,*,*","12");
            return assert.equal(gotoiftime.getName(), 'GotoIfTime');
        });
        test('check output format 1', function() {
        	var gotoiftime = new GotoIfTime("18:00,mon-fri,*,*","12");
            return assert.equal(gotoiftime.getAsString(), 'GotoIfTime(18:00,mon-fri,*,*?12:)');
        });
        test('check output format 2', function() {
        	var gotoiftime = new GotoIfTime("18:00-23:00,mon-fri,*,*","context,extension,priority");
            return assert.equal(gotoiftime.getAsString(), 'GotoIfTime(18:00-23:00,mon-fri,*,*?context,extension,priority:)');
        });
        test('check output format 3', function() {
            var gotoiftime = new GotoIfTime("18:00,mon-fri,*,*",
                "context1,extension1,priority1","context2,extension2,priority2");
            return assert.equal(gotoiftime.getAsString(), 
                'GotoIfTime(18:00,mon-fri,*,*?context1,extension1,priority1:context2,extension2,priority2)');
        });
        test('check throw error 1', function() {
            var gotoiftime = new GotoIfTime("18:00,mon-fri",
                "context1,extension1,priority1","context2,extension2,priority2");
            return assert.throws(function(){ 
                gotoiftime.getAsString() 
            }, Error);
        });
        test('check throw error 2', function() {
            var gotoiftime = new GotoIfTime("18:00,mon-fri,*,*");
            return assert.throws(function(){ 
                gotoiftime.getAsString()
            }, Error);
        });
    });

}).call(this);