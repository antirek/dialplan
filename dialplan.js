'use strict';

var fs = require('fs');

var Dialplan = function () {
    this.contexts = [];
};

Dialplan.prototype.append = function (context) {
    this.contexts.push(context);
    return this;
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


module.exports = Dialplan;