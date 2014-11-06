'use strict';

var CDR = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
    return this.toString();
};

CDR.prototype.toString = function () {
    return this.getName() + '(' +
           this.getArgsAsString() + ')';
};

CDR.prototype.getName = function () {
    return 'CDR';
};

CDR.prototype.getArgsAsString = function () {
    if (!this.args[0]) {
        throw new Error('Required one or more parameters!');
    }
    return this.args.join(',');
};

module.exports = CDR;