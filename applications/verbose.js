'use strict';

var Application = require('./application');

var Verbose = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
};

Verbose.prototype = new Application();

Verbose.prototype.getName = function () {
    return 'Verbose';
};

Verbose.prototype.getArgsAsString = function () {
    if (!this.args[1]) {
        this.args[1] = this.args[0];
        this.args[0] = 0;
    }
    return [this.args[0], this.args[1]].join(',');
};

module.exports = Verbose;