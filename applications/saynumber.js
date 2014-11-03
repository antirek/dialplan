var Application = require('./application');

var SayNumber = function(){
	this.args = Array.prototype.slice.call(arguments, 0);
};

SayNumber.prototype = new Application();

SayNumber.prototype.getName = function(){
	return 'SayNumber';
};

SayNumber.prototype.getArgsAsString = function(){
	if(!this.args[0]){
		throw new Error('Required first parameter!');
	}
	return (this.args[1]) ? [this.args[0],this.args[1]].join(',') : this.args[0];
}

module.exports = SayNumber;