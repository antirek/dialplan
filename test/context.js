(function() {
    var assert = require("assert");
    
    suite("Context", function() {
        var Context = require("../context");

        test('test context name', function() {
            var context = new Context('outercalls');
            return assert.equal(context.getName(), '[outercalls]');
        });

        test('check context content for one extension', function() {
            var context = new Context('outercalls');

            var Extension = require('../extension');
            var extension = new Extension('_2XXXXXX');
            context.append(extension);

            var Dial = require('../applications/dial');
            extension.append(new Dial('qw', 120));

            return assert.deepEqual(
                context.getContentForOneExtension(extension),
                ['exten=>_2XXXXXX,1,Dial(qw,120)']
                );
        });

    });

}).call(this);