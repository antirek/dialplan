'use strict';

var Include = function (contextName) {
    this.contextName = contextName;
};


Include.prototype.getContextName = function () {
    return this.contextName;
};

module.exports = Include;