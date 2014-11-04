'use strict';

var Application = require('./application');

var GotoIfTime = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
};

GotoIfTime.prototype = new Application();

GotoIfTime.prototype.getName = function () {
    return 'GotoIfTime';
};

GotoIfTime.prototype.getArgsAsString = function () {
    if (!this.args[0] || !this.args[1]) {
        throw new Error('Required two parameters!');
    }
    if (this.args[0].split(',').length < 4) {
        throw new Error('Time must have 4 conditions');
    }
    var str = this.args[0] + '?' + this.args[1];
    str += (this.args[2]) ? ':' + this.args[2] : ':';
    return str;
};

module.exports = GotoIfTime;