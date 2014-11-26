var App = require('./application/index');
//var Func = require('./function/index');
//var Context = require('./context');


var arr = [
	App.Verbose(0, '${HANGUP}'),
	App.AGI('agi://127.0.0.1/agi', '12', 12),
	App.AddQueueMember("12", "12")
];


arr = arr.map(function(element){
	return 'exten => ' + element;
});

console.log(arr.join('\n'));