var Dialplan = function(name){
	this.contexts = [];
	this.name = name;
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

module.exports = Dialplan;