var D = require('./index');
var App = D.Application;
var Func = D.Function;
var Extension = D.Extension;
var H = D.Helper;


var arr = [
	App.Verbose(0, H.$(Func.CDR('billsec'))),
	App.AGI('agi://127.0.0.1/agi', '12', 12),
	App.AddQueueMember("Queue", "Member")
];


var exten = new Extension('_2XX');
exten.append(arr);
console.log(exten.getDialplanSequence());