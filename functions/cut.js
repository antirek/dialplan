'use strict';

var DialplanFunction = require('./dialplanfunction');

var CUT = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
    return this.toString();
};

CUT.prototype = new DialplanFunction();

CUT.prototype.toString = function () {
    return this.getName() + '(' +
           this.getArgsAsString() + ')';
};

CUT.prototype.getName = function () {
    return 'CUT';
};

CUT.prototype.getArgsAsString = function () {
    if (!this.args && (this.args.length < 1 || this.args.length > 3)) {
        throw new Error('Check CUT count variables');
    }
    return this.args.join(',');
};

CUT.prototype.get = function () {
    return '${' + this.toString() + '}';
};

module.exports = CUT;