
var D = require('../index');
var A = D.Applications;
var H = D.Helpers;
var F = D.Functions;


var dialplan = new D.Dialplan();
var context = new D.Context('autocall');
dialplan.append(context);


var extension_S = new D.Extension('s');
context.append(extension_S);


extension_S.append(new A.Set(new F.CDR('language'), 'ru'));
extension_S.append(new A.Playback('/var/asterisk/sounds/8march-greeting'));
extension_S.append(new A.Set('dial', new H.Value('DIALSTATUS')));
extension_S.append(new A.Set('TRANSFER_COUNT',
	new H.Expression(new H.Value('TRANSFER_COUNT'), '+', 1)));

extension_S.append(new A.Hangup());


var extension_H = new D.Extension('h');
context.append(extension_H);


extension_H.append(new A.ExecIf(
	new H.Expression(new H.Value('HANGUPCAUSE'), '=', 16), 
	new A.System("/tmp/bash.sh")
	));


dialplan.save("/etc/asterisk/extensions_autocall.conf", function(err){
    if(!err) {
        console.log("The file was saved!");
    }
});