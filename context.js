var Context = function(name){
	this.extensions = [];
	this.name = name;
}

Context.prototype.append = function(extension){
	this.extensions.push(extension);
}

Context.prototype.getContentForOneExtension = function(extension){
	var sequence = extension.getDialplanSequence();
	var arrStrings = sequence.map(function(element, index){
		return 'exten=>' + element;
	});
	return arrStrings;
}

Context.prototype.getContent = function(){
	var content = [];

	content.push('[' + this.name + ']');
	for(var i = 0; i < this.extensions.length; i++){
		var hh = this.getContentForOneExtension(this.extensions[i]);		
		content = content.concat(hh);
	}
	
	return content.join('\n');
}

module.exports = Context;