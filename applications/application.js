var Application = function(){
	this.args = [];
}

Application.prototype.getAppAsString = function(){
	return this.getName() + '(' +
		   this.getArgsAsString() + ')';
}

module.exports = Application;