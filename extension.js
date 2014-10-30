var Extension = function(template){
	this.sequence = [];
	this.template = template;
}

Extension.prototype.append = function(application){
	this.sequence.push(application);
}

Extension.prototype.getDialplanSequence = function(){
	var sequence = [];
	for(var i = 1; i <= this.sequence.length; i++){
		sequence.push(
			[this.template, i, this.sequence[i-1].getAppAsString()]
			.join(',')
			);
	}
	return sequence;
}

module.exports = Extension;