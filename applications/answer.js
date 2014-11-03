var Application = require('./application');

var Answer = function(){
	this.args = Array.prototype.slice.call(arguments, 0);
};

Answer.prototype = new Application();

Answer.prototype.getName = function(){
	return 'Answer';
};

Answer.prototype.getArgsAsString = function(){	
	return (this.args[0]) ? this.args[0] : '';
};

module.exports = Answer;