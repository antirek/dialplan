var fs = require('fs');

var A = require('./applications/');

var Extension = require('./extension');
var Context = require('./context');


var extension = new Extension('120');
extension.append(new A.Set('qw', '123'), 'start');
extension.append(new A.Verbose('additional'));
extension.append(new A.Dial('SIP/100'), 'dial');
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