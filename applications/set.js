'use strict';

var Application = require('./application');
var DialplanFunction = require('../functions/dialplanfunction');

var Set = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
};

Set.prototype = new Application();

Set.prototype.getName = function () {
    return 'Set';
};

Set.prototype.getArgsAsString = function () {
    if (this.args.length !== 2) {
        throw new Error('Required two parameters!');
    }

    if (this.args[1] instanceof DialplanFunction) {
        this.args[1] = this.args[1].get();
    }

    return this.args[0] + '=' + this.args[1];
};

module.exports = Set;