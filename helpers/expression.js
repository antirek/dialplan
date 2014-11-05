'use strict';

var Expression = function () {
    this.args = Array.prototype.slice.call(arguments, 0);

    if (this.args.length && this.args.length !== 3) {
        throw new Error('check Expression count params!');
    }

    return this.toString();
};

Expression.prototype.toString = function () {
    return '$[' + this.args[0] + this.args[1] + this.args[2] + ']';
};

module.exports = Expression;