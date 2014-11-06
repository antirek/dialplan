(function() {
    var assert = require("assert");
    
    suite("CALLERID", function() {
    	var CALLERID = require("../../functions/callerid");

        test('test callerid get', function() {
        	var callerid = new CALLERID('dnid').get();
            return assert.equal(callerid, '${CALLERID(dnid)}');
        });
        
         test('test callerid without params', function() {
            return assert.throws(function(){
                var callerid = new CALLERID();
            }, Error);
        });

    });

}).call(this);