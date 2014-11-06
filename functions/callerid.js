'use strict';

var DialplanFunction = require('./dialplanfunction');

var CALLERID = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
    return this.toString();
};

CALLERID.prototype = new DialplanFunction();

CALLERID.prototype.toString = function () {
    return this.getName() + '(' +
           this.getArgsAsString() + ')';
};

CALLERID.prototype.getName = function () {
    return 'CALLERID';
};

CALLERID.prototype.getArgsAsString = function () {
    if (!this.args[0]) {
        throw new Error('Required one or more parameters!');
    }
    return this.args.join(',');
};

CALLERID.prototype.get = function () {
    return '${' + this.toString() + '}';
};

module.exports = CALLERID;