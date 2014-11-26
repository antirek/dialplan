'use strict';

var Application = function () {
	this.args = arguments[0];
	console.log(this.args);
};

Application.prototype.getAsString = function () {
    return this.getName() + '(' +
        this.getArgsAsString() + ')';
};

module.exports = Application;