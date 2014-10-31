var Application = require('./application');

var Playback = function(){
	this.args = Array.prototype.slice.call(arguments, 0);
};

Playback.prototype = new Application();

Playback.prototype.getName = function(){
	return 'Playback';
};

Playback.prototype.getArgsAsString = function(){
	if(!this.args[0]){
		throw new Error('Required first parameter!');
	}
	return (this.args[1]) ? [this.args[0],this.args[1]].join(',') : this.args[0];
};

module.exports = Playback;