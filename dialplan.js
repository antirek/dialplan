'use strict';

var fs = require('fs');

var Dialplan = function () {
    this.contexts = [];
};

Dialplan.prototype.append = function (context) {
    this.contexts.push(context);
};

Dialplan.prototype.getContent = function () {
    var arrStrings = this.contexts.map(function (element) {
        return element.getContent();
    });
    return arrStrings.join('\n\n');
};

Dialplan.prototype.save = function (filename, callback) {
    fs.writeFile(filename, this.getContent(), callback);
};

Dialplan.prototype.expression = function(){
	var args = Array.prototype.slice.call(arguments, 0);
	var Expression = require('./helpers/expression');
	return Expression.apply(args);
}

module.exports = Dialplan;