var App = require('./application/index');
var Func = require('./function/index');
//var Context = require('./context');

var H = {
	$ : function (attr) {
		return '${' + attr + '}';
	}
}

var arr = [
	App.Verbose(0, '${HANGUP}'),
	App.AGI('agi://127.0.0.1/agi', '12', 12),
	App.AddQueueMember("Queue", "Member")
];



arr = arr.map(function(element){
	return 'exten => ' + element;
});

console.log(arr.join('\n'));

console.log(H.$(Func.CDR('billsec')));