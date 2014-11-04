'use strict';

var Application = require('./application');

var AGI = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
};

AGI.prototype = new Application();

AGI.prototype.getName = function () {
    return 'AGI';
};

AGI.prototype.getArgsAsString = function () {
    if (!this.args[0]) {
        throw new Error('Required one or more parameters!');
    }
    return this.args.join(',');
};

module.exports = AGI;