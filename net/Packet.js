"use strict";
var Package = /** @class */ (function () {
    function Package() {
        this.msgType = 0;
        this.msgId = 0;
        this.buf = Buffer.alloc(0);
    }
    return Package;
}());
module.exports = Package;
