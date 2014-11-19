var MAX_SIZE = 99999;
var aio = require('asterisk.io');
var sprintf = require('sprintf-js').sprintf;

var filename = 'extensions_2.conf';
var ami = aio.ami('127.0.0.1', 5038, 'admin', 'superpassword');
var ready = false;


ami.on('ready', function () {
    ready = true;

    addContextsToFile({
        'coll': [
            'exten=>Dial(SIP/100)',
            'exten=>Dial(SIP/101)',
            'exten=>Dial(SIP/102)'
        ]
    });

})

function addExtensionToContext(context, extensions) {
    
    if (extensions.length < MAX_SIZE) {
    
        createContextIfNoExists(context, function () {
            addExtensions(context, extensions);
        })

    } else {
    
        var chunks = Math.ceil(extensions.length / MAX_SIZE)
        var array = {};
        for (var i = 0; i < chunks; i++) {
            array[i] = [];
        }
        for (var key in extensions) {
            var index = Math.ceil(key / MAX_SIZE);
            array[index].push(extensions[key]);
        }
        for (var key in array) {
            if (key == 0) {
                addExtensions(context, array[key]);
            } else {
                addExtensions(context, array[key], true);
            }
        }
    }
}

function addExtensions(context, extensions, append) {
    if (!append) {
        var options = {
            reload: 'yes',
            srcfilename: filename,
            dstfilename: filename,
            'Action-000000': 'EmptyCat',
            'Cat-000000': context,
            'Var-000000': '',
            'Value-000000': ''
        };
    } else {
        var options = {
            reload: 'yes',
            srcfilename: filename,
            dstfilename: filename,
        };
    }

    for (var key in extensions) {
        var index = sprintf('%06d', key);
        options['Action-' + index] = 'Append';
        options['Cat-' + index] = context;
        options['Var-' + index] = 'exten';
        options['Value-' + index] = '>' + extensions[key].replace('exten=>', '');
    }

    ami.action('UpdateConfig', options, function (data) {
        console.log(data);
    })

}


function createContextIfNoExists(context, callback) {
    function run() {
        ami.action('UpdateConfig', {
            reload: 'no',
            srcfilename: filename,
            dstfilename: filename,
            'Action-000000': 'NewCat',
            'Cat-000000': context,
            'Var-000000': '',
            'Value-000000': ''
        }, function (data) {
            console.log(data);
            callback();
        });
    }

    run();

}
/**
 * Следует передавать параметры в формате
 * {
*  context1:[extension11,extension12,..],
*  context2:[extension21,extension22,..]
* }
 * @param contexts
 *
 */
function addContextsToFile(contexts) {
    for (var context in contexts) {
        addExtensionToContext(context, contexts[context]);
    }
}

