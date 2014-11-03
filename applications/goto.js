var Application = require('./application');

var Goto = function(){
	this.args = Array.prototype.slice.call(arguments, 0);
};

Goto.prototype = new Application();

Goto.prototype.getName = function(){
	return 'Goto';
};

Goto.prototype.getArgsAsString = function(){
	if(!this.args[0]){
		throw new Error('Required first parameter!');
	}
	return this.args[0].replace(/ /g,"");
}

module.exports = Goto;