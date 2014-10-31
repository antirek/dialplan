var Application = require('./applications/application');

var Extension = function(template){
	this.sequence = [];
	this.template = template;
}

Extension.prototype.append = function(item){
	if(item instanceof Application){
		this.sequence.push(item);
	}else{
		throw 'Not dialplan application';
	}
}

Extension.prototype.getDialplanSequence = function(){
	return this.sequence.map(this.getSequenceItemAsString, this);
}

Extension.prototype.getSequenceItemAsString = function(item, index){
	return [this.template, index, item.getAsString()].join(',');
}

module.exports = Extension;