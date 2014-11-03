var fs = require('fs')

var Dialplan = function(name){
	this.contexts = [];
}

Dialplan.prototype.append = function(context){
	this.contexts.push(context);
}

Dialplan.prototype.getContent = function(){
	var arrStrings = this.contexts.map(function(element, index){
		return element.getContent();
	});
	return arrStrings.join('\n\n');
}

Dialplan.prototype.save = function(filename, callback){
	fs.writeFile(filename, this.getContent(), callback);
}


module.exports = Dialplan;