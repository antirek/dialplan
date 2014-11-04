var Application = require('./application');

var ExecIf = function(){
	this.args = Array.prototype.slice.call(arguments, 0);
};

ExecIf.prototype = new Application();

ExecIf.prototype.getName = function(){
	return 'ExecIf';
};

ExecIf.prototype.getArgsAsString = function(){
	if(!this.args[0] || !this.args[1]){
		throw new Error('Required two parameters!');
	}
	if(!(this.args[1] instanceof Application)){
		throw new Error('Second args must be Application');
	}
	if(this.args[2] && !(this.args[2] instanceof Application)){
		throw new Error('Third args must be Application');
	}
	var str = this.args[0] + '?' + this.args[1].getAsString();
	str += (this.args[2]) ?  ':' + this.args[2].getAsString() : ':';
	return str;
}

module.exports = ExecIf;