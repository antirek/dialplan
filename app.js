var fs = require('fs');

var A = require('./applications/');

var Extension = require('./extension');
var Context = require('./context');


var extension = new Extension('120');

extension.append(new A.Set('qw', '123'));
extension.append(new A.Answer(10));
extension.append(new A.Verbose('additional'));
extension.append('dial', new A.Dial('SIP/100'));
extension.append(new A.Playback('hello', 'noanswer'));
extension.append(new A.GotoIf('$["${CALL_FROM_GROUP}"="TRUE"]','dial'));
extension.append(new A.Hangup());


var context = new Context('fider');
context.append(extension);
//context.save({type: 'file', path: "/tmp/extensions_generated.conf"});

console.log(context.getContent());

fs.writeFile("/tmp/extensions_generated.conf", context.getContent(), function(err) {
    if(!err) {
        console.log("The file was saved!");
    }
});