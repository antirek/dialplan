var Application = require('./application');

var Hangup = function(){
	this.args = Array.prototype.slice.call(arguments, 0);
};

Hangup.prototype = new Application();

Hangup.prototype.getName = function(){
	return 'Hangup';
};

Hangup.prototype.getArgsAsString = function(){
	return (this.args[0]) ? this.args[0] : '';
}

module.exports = Hangup;