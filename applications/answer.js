'use strict';
var Application = require('./application');

/**
 * Answer constructor
 * @constructor
 */
var Answer = function () {
    this.args = Array.prototype.slice.call(arguments, 0);
};

/**
 * @prototype Application
 */
Answer.prototype = new Application();

Answer.prototype.getName = function () {
    return 'Answer';
};

Answer.prototype.getArgsAsString = function () {
    return this.args[0] || '';
};

module.exports = Answer;