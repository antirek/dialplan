(function() {
    var assert = require("assert");
    
    suite("CDR", function() {
    	var CDR = require("../../functions/cdr");

        test('test cdr get', function() {
        	var cdr = new CDR('callerid').get();
            return assert.equal(cdr, '${CDR(callerid)}');
        });
        
         test('test cdr without params', function() {
            return assert.throws(function(){
                var cdr = new CDR();
            }, Error);
        });

    });

}).call(this);