(function() {
    var assert = require("assert");
    
    suite("CHANNEL", function() {
    	var CHANNEL = require("../../functions/channel");

        test('test channel get', function() {
        	var channel = new CHANNEL('parkinglot').get();
            return assert.equal(channel, '${CHANNEL(parkinglot)}');
        });
        
         test('test channel without params', function() {
            return assert.throws(function(){
                var channel = new CHANNEL();
            }, Error);
        });

    });

}).call(this);