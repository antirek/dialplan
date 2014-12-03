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
    var content = [];
    content.push(this.getName());
    content.push(this.getExtensionsContent());
    return content.join('\n');
};

Context.prototype.getExtensionsContent = function () {
    var content = [], i, hh;
    for (i = 0; i < this.extensions.length; i++) {
        hh = this.getContentForOneExtension(this.extensions[i]);
        content = content.concat(hh);
    }
    return content.join('\n');
}

Context.prototype.getExtensionsAsPlainArray = function () {
    var array = [], i;
    for (i = 0; i < this.extensions.length; i++) {
        var extension = this.extensions[i];
        array = array.concat(extension.getDialplanSequence());
    }
    return array;
}

module.exports = Context;