(function() {
    var assert = require("assert");
    
    suite("Expression", function() {
        var Expression = require("../../helpers/expression");

        test('test expression 1', function() {
            return assert.equal(new Expression('q','+',1), '$[q+1]');
        });

        test('test expression 2', function() {
            return assert.equal((new Expression('q','&','w')).toString(), '$[q&w]');
        });
        test('check throw error 1', function() {            
            return assert.throws(function(){
                new Expression('q', ':');
            }, Error);
        });
        test('check throw error 2', function() {            
            return assert.throws(function(){
                new Expression('q');
            }, Error);
        });
        test('check throw error 3', function() {            
            return assert.throws(function(){
                new Expression('q', ':', '+', 'w');
            }, Error);
        });
    });

}).call(this);