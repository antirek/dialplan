(function() {
    var assert = require("assert");
    
    suite("CUT", function() {
    	var CUT = require("../../functions/cut");

        test('test cut get', function() {
        	var cut = new CUT('CALLERID',1,2).get();
            return assert.equal(cut, '${CUT(CALLERID,1,2)}');
        });
        
        test('test cut get', function() {
            var cut = new CUT('CALLERID',1,2).get();
            return assert.equal(cut, '${CUT(CALLERID,1,2)}');
        });
        
        test('test cut without params', function() {
            return assert.throws( function () {
                var cut = new CUT('12',12,12,12);
            }, Error);
        });

        test('test cut without params', function() {
            return assert.throws(function () {
                var cut = new CUT();
            }, Error);
        });

    });

}).call(this);