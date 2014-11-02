
var D = require('../index');
var A = D.Applications;


var extension = new D.Extension('130');
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


console.log(dialplan.getContent());

dialplan.save("/etc/asterisk/extensions_generated.conf", function(err) {
    if(!err) {
        console.log("The file was saved!");
    }
});