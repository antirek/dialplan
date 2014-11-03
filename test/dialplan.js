(function() {
    var assert = require("assert");
    
    suite("Dialplan", function() {
        var Dialplan = require("../dialplan");        

        test('check dialplan content for context', function() {
            var dialplan = new Dialplan();

            var Context = require('../context');
            var context = new Context('outercalls');
            dialplan.append(context);

            var Extension = require('../extension');
            var extension = new Extension('_2XXXXXX');
            context.append(extension);

            var Dial = require('../applications/dial');
            extension.append(new Dial('qw', 120));

            var str = '[outercalls]\n' +
                      'exten=>_2XXXXXX,1,Dial(qw,120)';

            return assert.equal(dialplan.getContent(), str);
        });

    });

}).call(this);