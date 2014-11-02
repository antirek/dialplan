var Application = require('./applications/application');

var Extension = function(template){
	this.sequence = [];
	this.template = template;
}

Extension.prototype.append = function(){
	var args = Array.prototype.slice.call(arguments, 0);
	var item = (args[1]) ? args[1] : args[0];
	var label = (args[1]) ? args[0] : null;

	if(item instanceof Application){
		this.sequence.push([item, label]);
	}else{
		throw new Error('Not dialplan application');
	}
}

Extension.prototype.getDialplanSequence = function(){
	return this.sequence.map(this.getSequenceItemAsString, this);
}

Extension.prototype.getSequenceItemAsString = function(array, index){
	var priority = (array[1]) ? (index+1) + '(' + array[1] + ')' : (index+1);
	return [this.template, priority, array[0].getAsString()].join(',');
}

module.exports = Extension;