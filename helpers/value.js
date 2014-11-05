'use strict';

var Value = function () {
    this.args = Array.prototype.slice.call(arguments, 0);

    if (this.args.length && this.args.length > 1) {
        throw new Error('check Value count params!');
    }

    return this.toString();
};

Value.prototype.toString = function () {
    return '${' + this.args[0] + '}';
};

module.exports = Value;