var fs = require('fs');
 
var Dial = require('./applications/dial');
var Hangup = require('./applications/hangup');
var Set = require('./applications/set');

var Extension = require('./extension');
var Context = require('./context');


var dial = new Dial('SIP/1000', 120, 'tT');
var hangup = new Hangup('22');
var set = new Set('as','qw');


console.log(dial.getAsString());
console.log(dial.getName());
console.log(dial.args);

console.log(hangup.getAsString());
console.log(hangup.getName());
console.log(hangup.args);

console.log(set.getAsString());
console.log(set.getName());
console.log(set.args);


var extension = new Extension('120');
extension.append(new Set('qw', '123'));
extension.append(new Dial('SIP/100'));
extension.append(new Hangup());

console.log(extension.getDialplanSequence());

var context = new Context('fider');
context.append(extension);

console.log(context.getContent());

fs.writeFile("/tmp/extensions_generated.conf", context.getContent(), function(err) {
    if(!err) {
        console.log("The file was saved!");
    }
});