var Application = require('./application');

var Set = function(){
	this.args = Array.prototype.slice.call(arguments, 0);
};

Set.prototype = new Application();

Set.prototype.getName = function(){
	return 'Set';
};

Set.prototype.getArgsAsString = function(){
	if(!this.args[0] || !this.args[1]){
		throw 'Required two parameters!';
	}
	
	return this.args[0] + '=' + this.args[1];
}

module.exports = Set;