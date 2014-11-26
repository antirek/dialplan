'use strict';

var GotoIf = require('./application');

GotoIf.prototype.getName = function () {
    return 'GotoIf';
};

GotoIf.prototype.getArgsAsString = function () {
	console.log('get as string', this.args);
    if (!this.args) {
        throw new Error('Required first parameter!');
    }
    var str = (this.args[1]) ? this.args[0] + '?' + this.args[1] : this.args[0] + '?';
    str += (this.args[2]) ? ':' + this.args[2] : ':';
    return str;
};

module.exports = GotoIf;