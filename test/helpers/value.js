(function() {
    var assert = require("assert");
    
    suite("Value", function() {
        var Value = require("../../helpers/value");

        test('test value 1', function() {
            return assert.equal(new Value('q'), '${q}');
        });
        test('check throw error 1', function() {            
            return assert.throws(function(){
                new Value('q', 'w');
            }, Error);
        });        
    });

}).call(this);