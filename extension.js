'use strict';

var Application = require('./applications/application');

var Extension = function (template) {
    this.sequence = [];
    this.template = template;
};

Extension.prototype.append = function () {
    var args = Array.prototype.slice.call(arguments, 0),
        item = args[1] || args[0],
        label = (args[1]) ? args[0] : null,
        array = null,
        i;

    if(!args[0]){
        throw new Error('must have one parameter!');
    }

    if (args[0] instanceof Array) {
        if (args[0].length < 1) {
            throw new Error('append empty array');
        }

        array = args[0];

        for (i = 0; i < array.length; i++) {
            this.appendItem(array[i]);
        }
    } else {
        this.appendItem(item, label);
    }
};

Extension.prototype.appendItem = function (item, label) {
    if (item instanceof Application) {
        this.sequence.push([item, label]);
    } else {
        throw new Error('Not dialplan application');
    }
};

Extension.prototype.getDialplanSequence = function () {
    return this.sequence.map(this.getSequenceItemAsString, this);
};

Extension.prototype.getSequenceItemAsString = function (array, index) {
    var priority = (array[1]) ? (index + 1) + '(' + array[1] + ')' : (index + 1);
    return [this.template, priority, array[0].getAsString()].join(',');
};

module.exports = Extension;