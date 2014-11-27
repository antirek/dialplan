var D = require('./index');
var App = D.Application;
var Func = D.Function;
var H = D.Helper;


var arr = [
  App.Verbose(0, H.$(Func.CDR('billsec'))),
  App.AGI('agi://127.0.0.1/agi', 'test', 12),
  App.AddQueueMember("Queue", "Member")
];


var exten = new D.Extension('_2XX');
exten.append(arr);

var context = new D.Context('outgoing');
context.append(exten);

var dialplan = new D.Dialplan();
dialplan.append(context);


dialplan.save("./extensions_autocall.conf", function(err){
  if(!err) {
    console.log("The file was saved!");
  }
});