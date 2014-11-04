
var D = require('../index');
var A = D.Applications;

var dialplan = new D.Dialplan();
var context = new D.Context('outbound');
dialplan.append(context);

var extension_S = new D.Extension('_8XXXXXXXXXX');
context.append(extension_S);

extension_S.append(new A.Dial('SIP/${EXTEN}@gate'))
extension_S.append(new A.Verbose('${DIALSTATUS}'));
extension_S.append(new A.Hangup());

var extension_H = new D.Extension('h');
context.append(extension_H);

extension_H.append(new A.Verbose('${DIALSTATUS}'));
extension_H.append(new A.Verbose('${HANGUPCAUSE}'));
extension_H.append(new A.AGI('agi://127.0.0.1:3007/checkdialstatus', 
                            'dialstatus-${DIALSTATUS}', 
                            'hangupcause-${HANGUPCAUSE}'
                            ));

dialplan.save("/etc/asterisk/extensions_generated.conf", function(err){
    if(!err) {
        console.log("The file was saved!");
    }
});