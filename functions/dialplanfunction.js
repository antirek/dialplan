'use strict';

var DialplanFunction = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
    return this.toString();
};

DialplanFunction.prototype.toString = function () {
    return this.getName() + '(' +
           this.getArgsAsString() + ')';
};

DialplanFunction.prototype.getName = function () {
    return '';
}

DialplanFunction.prototype.getArgsAsString = function () {
    return '';
}

DialplanFunction.prototype.get = function () {
    return '${' + this.toString() + '}';
};

module.exports = DialplanFunction;