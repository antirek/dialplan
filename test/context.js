(function() {
    var assert = require("assert");
    
    suite("Context", function() {
        var D = require('../index');
        var App = D.Application;

        test('test context name', function() {
            var context = new D.Context('outercalls');
            return assert.equal(context.getName(), '[outercalls]');
        });

        test('check context content for one extension', function() {
            var context = new D.Context('outercalls');

            var extension = new D.Extension('_2XXXXXX');
            context.append(extension);
            
            extension.append(App.Dial('qw', 120));

            return assert.deepEqual(
                context.getContentForOneExtension(extension),
                ['exten=>_2XXXXXX,1,Dial(qw,120)']
                );
        });

        test('check get context as array', function() {
            var context = new D.Context('outercalls');

            var extension = new D.Extension('_2XXXXXX');
            context.append(extension);
            
            extension.append(App.Dial('qw', 120));
            extension.append(App.Dial('qq', 130));

            var array = context.getExtenArray();

            return assert.deepEqual(array,
                [
                    '_2XXXXXX,1,Dial(qw,120)', 
                    '_2XXXXXX,2,Dial(qq,130)'
                ]);
        });

        test('check get context chain method', function() {
            var context = new D.Context('outercalls');

            context.append(
                new D.Extension('_2XXXXXX')
                    .append(App.Dial('qw', 120))
                    .append(App.Dial('qq', 130))
                );

            var array = context.getExtenArray();

            return assert.deepEqual(array,
                [
                    '_2XXXXXX,1,Dial(qw,120)', 
                    '_2XXXXXX,2,Dial(qq,130)'
                ]);
        });

        test('check get include as array', function() {
            var context = new D.Context('outer_calls');

            var include = new D.Include('international_calls');
            context.append(include);
            context.append(include);
            
            var array = context.getIncludeArray();

            return assert.deepEqual(array,
                [
                    'international_calls', 
                    'international_calls'
                ]);
        });


        test('check get context as object', function() {
            var context = new D.Context('outer_calls');

            var include = new D.Include('international_calls');
            context.append(include);
            context.append(include);

            context.append(
                new D.Extension('_2XXXXXX')
                    .append(App.Dial('qw', 120))
                    .append(App.Dial('qq', 130))
                );
            
            var object = context.makeObject();

            return assert.deepEqual(object,
                {
                    include: ['international_calls', 'international_calls'],
                    exten: ['_2XXXXXX,1,Dial(qw,120)', '_2XXXXXX,2,Dial(qq,130)']
                });
        });

        test('check append array to context', function() {
            var context = new D.Context('outer_calls');

            context.append([
                new D.Extension('_2XXXXXX')
                    .append(App.Dial('qw', 120))
                    .append(App.Dial('qq', 130)),
                new D.Include('international_calls'),
                new D.Include('international_calls') 
                ]);
            
            var object = context.makeObject();

            return assert.deepEqual(object,
                {
                    include: ['international_calls', 'international_calls'],
                    exten: ['_2XXXXXX,1,Dial(qw,120)', '_2XXXXXX,2,Dial(qq,130)']
                });
        });

    });

}).call(this);