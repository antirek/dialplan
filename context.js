'use strict';
var Extension = require('./extension');
var Include = require('./include');

var Context = function (name) {
    this.extensions = [];
    this.includes = [];
    this.name = name;
};

Context.prototype.append = function (append) {
    if(append instanceof Extension){
        this.extensions.push(append);
    }else if (append instanceof Include){
        this.includes.push(append);
    }
    return this;
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

Context.prototype.getExtenArray = function () {
    var array = [], i;
    for (i = 0; i < this.extensions.length; i++) {
        var extension = this.extensions[i];
        array = array.concat(extension.getDialplanSequence());
    }
    return array;
}

Context.prototype.getIncludeArray = function () {
    var array = [], i;
    for (i = 0; i < this.includes.length; i++) {
        var include = this.includes[i];
        array = array.concat(include.getContextName());
    }
    return array;
}

module.exports = Context;