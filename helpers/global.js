'use strict';

var Global = function () {
    this.args = Array.prototype.slice.call(arguments, 0);

    if (this.args.length && this.args.length !== 1) {
        throw new Error('check Global count params!');
    }

    return this.toString();
};

Global.prototype.toString = function () {
    return '__' + this.args[0];
};

module.exports = Global;