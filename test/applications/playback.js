(function() {
    var assert = require("assert");
    
    suite("Playback", function() {
    	var Playback = require("../../applications/playback");	
        test('test application name', function() {
        	var playback = new Playback("/tmp/file");
            return assert.equal(playback.getName(), 'Playback');
        });
        test('check output format 1', function() {
        	var playback = new Playback("/tmp/file");
            return assert.equal(playback.getAsString(), 'Playback(/tmp/file)');
        });
        test('check output format 2', function() {
        	var playback = new Playback("/tmp/file", 'skip');
            return assert.equal(playback.getAsString(), 'Playback(/tmp/file,skip)');
        });
        test('check output format 3', function() {
            var playback = new Playback("/tmp/file", 'skip,noanswer');
            return assert.equal(playback.getAsString(), 'Playback(/tmp/file,skip,noanswer)');
        });
        test('check throw error 1', function() {
            var playback = new Playback();
            return assert.throws(function(){
                playback.getAsString() 
            }, Error);
        });
    });

}).call(this);