var Extension = function(template){
	this.sequence = [];
	this.template = template;
}

Extension.prototype.append = function(item){
	this.sequence.push(item);
}

Extension.prototype.getDialplanSequence = function(){
	return this.sequence.map(this.getSequenceItemAsString, this);
}

Extension.prototype.getSequenceItemAsString = function(item, index){
	return [this.template, index, item.getAsString()].join(',');
}

module.exports = Extension;