var D = require('./index');
var App = D.Application;
var Func = D.Function;
var Extension = D.Extension;
var Context = D.Context;
var Dialplan = D.Dialplan;
var H = D.Helper;


var arr = [
  App.Verbose(0, H.$(Func.CDR('billsec'))),
  App.AGI('agi://127.0.0.1/agi', '12', 12),
  App.AddQueueMember("Queue", "Member")
];


var exten = new Extension('_2XX');
exten.append(arr);

var context = new Context('outgoing');
context.append(exten);

console.log(context.getContent());

var dialplan = new Dialplan();
dialplan.append(context);


dialplan.save("./extensions_autocall.conf", function(err){
  if(!err) {
    console.log("The file was saved!");
  }
});

//console.log(exten.getDialplanSequence());