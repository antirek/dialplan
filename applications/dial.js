var Application = require('./application');

var Dial = function(){
	this.args = Array.prototype.slice.call(arguments, 0);
};

Dial.prototype = new Application();

Dial.prototype.getName = function(){
	return 'Dial';
};

Dial.prototype.getArgsAsString = function(){
	if(!this.args[0]){
		throw 'Required first parameter!';
	}
	var str = (this.args[1]) ? this.args[0] + ',' + this.args[1] : this.args[0];
	return (this.args[2]) ? str + ',' + this.args[2] : str;
}

module.exports = Dial;