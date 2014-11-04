'use strict';

var Application = require('./application');

var Progress = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
};

Progress.prototype = new Application();

Progress.prototype.getName = function () {
    return 'Progress';
};

Progress.prototype.getArgsAsString = function () {
    if (this.args[0]) {
        throw new Error('Have no parameters!');
    }
    return '';
};

module.exports = Progress;