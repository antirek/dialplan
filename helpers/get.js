'use strict';

var Get = function () {
    this.args = Array.prototype.slice.call(arguments, 0);

    if(this.args.length && this.args.length > 1){
        throw new Error('check Get count params!');
    }

    return this.toString();
};

Get.prototype.toString = function () {
    return '${' + this.args[0] + '}';
};

module.exports = Get;