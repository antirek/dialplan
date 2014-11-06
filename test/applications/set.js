(function() {
    var assert = require("assert");
    
    suite("Set", function() {
    	var Set = require("../../applications/set");

        test('test application name', function() {
        	var set = new Set('qw',12);
            return assert.equal(set.getName(), 'Set');
        });
        
        test('check output format 1', function() {
        	var set = new Set('qw', '12');
            return assert.equal(set.getAsString(), 'Set(qw=12)');
        });

        test('check output format 2', function() {
            var set = new Set('qw', 13);
            return assert.equal(set.getAsString(), 'Set(qw=13)');
        });
        
        test('check throw error set one parameters', function() {
            var set = new Set('qw');
            return assert.throws(function(){
                set.getAsString();
            }, Error);
        });

        test('check throw error set no parameters', function() {
            var set = new Set();
            return assert.throws(function(){
                set.getAsString();
            }, Error);
        });

        test('check throw error set three parameters', function() {
            var set = new Set('qw','qw','qw');
            return assert.throws(function(){
                set.getAsString();
            }, Error);
        });

        test('check using functions get method in second params', function() {
            var F = require('../../functions/index');

            var set = new Set('qw', new F.CALLERID('dnid'));
            return assert.equal(set.getAsString(), 'Set(qw=${CALLERID(dnid)})');
        });

    });

}).call(this);