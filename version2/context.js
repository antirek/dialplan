'use strict';

var Context = function (name) {
    this.extensions = [];
    this.name = name;
};

Context.prototype.append = function (extension) {
    this.extensions.push(extension);
};

Context.prototype.getContentForOneExtension = function (extension) {
    var sequence = extension.getDialplanSequence(),
        arrStrings = sequence.map(function (element) {
            return 'exten=>' + element;
        });
    return arrStrings;
};

Context.prototype.getName = function () {
    return '[' + this.name + ']';
};

Context.prototype.getContent = function () {
    var content = [], i, hh;

    content.push(this.getName());
    for (i = 0; i < this.extensions.length; i++) {
        hh = this.getContentForOneExtension(this.extensions[i]);
        content = content.concat(hh);
    }

    return content.join('\n');
};

module.exports = Context;