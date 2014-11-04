'use strict';

var Application = require('./application');
/*jshint -W020 */
var System = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
};

System.prototype = new Application();

System.prototype.getName = function () {
    return 'System';
};

System.prototype.getArgsAsString = function () {
    if (!this.args[0]) {
        throw new Error('Required first parameter!');
    }
    return this.args[0];
};

module.exports = System;