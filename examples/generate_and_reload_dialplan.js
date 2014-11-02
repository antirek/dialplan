
var D = require('../index');
var A = D.Applications;

var aio = require('asterisk.io');
var ami = aio.ami('127.0.0.1', 5038, 'admin', 'password');

ami.on('error', function(err){
    throw err;
});

ami.on('ready', function(){
    console.log('AMI ready');

    var dialplan = generateDialplan();
	
	/* 
	use extensions.conf for real dialplan reload:
		append '#include "extensions_generated.conf"' to extensions.conf
		or save generated dialplan to extensions.conf directly
	*/
	dialplan.save("/etc/asterisk/extensions_generated.conf", function(err) {

	    if(!err) {
	        console.log("The file was saved!");

	        reloadDialplan();
	    }
	});
});


function generateDialplan(){
	var extension = new D.Extension('140');
	extension.append(new A.Set('qw', '123'));
	extension.append(new A.Answer(10));
	extension.append(new A.Verbose('additional'));
	extension.append('dial', new A.Dial('SIP/100'));
	extension.append(new A.Playback('hello', 'noanswer'));
	extension.append(new A.GotoIf('$["${CALL_FROM_GROUP}"="TRUE"]', 'dial'));
	extension.append(new A.Hangup());

	var extension2 = new D.Extension('240');
	extension2.append(new A.Set('qw', '123'));
	extension2.append(new A.Answer(10));
	extension2.append(new A.Verbose('additional'));
	extension2.append(new A.AGI('/tmp/agi.sh'));


	var context1 = new D.Context('fider');
	context1.append(extension);
	context1.append(extension2);

	var context2 = new D.Context('fiber');
	context2.append(extension);

	var dialplan = new D.Dialplan();
	dialplan.append(context1);
	dialplan.append(context2);

	return dialplan;	
}

function reloadDialplan(){
	ami.action(
	    'Reload',
	    {
	        Module: 'pbx_config.so',
	    },
	    function(data){
	        if(data.Response == 'Error'){
	            console.log('Reload', data.Message);
	            return;
	        }
	        console.log('Reload', data.Message);
	    }
	);
}