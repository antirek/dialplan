'use strict';

var Application = require('./application');

var Echo = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
};

Echo.prototype = new Application();

Echo.prototype.getName = function () {
    return 'Echo';
};

Echo.prototype.getArgsAsString = function () {
    if (this.args[0]) {
        throw new Error('Have no parameters!');
    }
    return '';
};

module.exports = Echo;