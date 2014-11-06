'use strict';

var DialplanFunction = require('./dialplanfunction');

var CHANNEL = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
    return this.toString();
};

CHANNEL.prototype = new DialplanFunction();

CHANNEL.prototype.toString = function () {
    return this.getName() + '(' +
           this.getArgsAsString() + ')';
};

CHANNEL.prototype.getName = function () {
    return 'CHANNEL';
};

CHANNEL.prototype.getArgsAsString = function () {
    if (!this.args[0]) {
        throw new Error('Required one or more parameters!');
    }
    return this.args.join(',');
};

CHANNEL.prototype.get = function () {
    return '${' + this.toString() + '}';
};

module.exports = CHANNEL;