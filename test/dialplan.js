(function() {
    var assert = require("assert");
    
    suite("Dialplan", function() {
        var D = require('../index');
        var App = D.Application;   

        test('check dialplan content for context', function() {
            var dialplan = new D.Dialplan();

            var context = new D.Context('outercalls');
            dialplan.append(context);

            var extension = new D.Extension('_2XXXXXX');
            context.append(extension);

            extension.append(App.Dial('qw', 120));

            var str = '[outercalls]\n' +
                      'exten=>_2XXXXXX,1,Dial(qw,120)';

            return assert.equal(dialplan.getContent(), str);
        });

    });

}).call(this);