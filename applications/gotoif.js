var Application = require('./application');

var GotoIf = function(){
	this.args = Array.prototype.slice.call(arguments, 0);
};

GotoIf.prototype = new Application();

GotoIf.prototype.getName = function(){
	return 'GotoIf';
};

GotoIf.prototype.getArgsAsString = function(){
	if(!this.args[0]){
		throw new Error('Required first parameter!');
	}
	var str = (this.args[1]) ? this.args[0] + '?' + this.args[1] : this.args[0] + '?';
	str += (this.args[2]) ?  ':' + this.args[2] : ':';
	return str;
}

module.exports = GotoIf;