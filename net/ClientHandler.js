"use strict";
var PacketBuffer = require("./PacketBuffer");
var ClientHandler = /** @class */ (function () {
    function ClientHandler() {
        this.id = 0;
        this.buffer = new PacketBuffer();
    }
    return ClientHandler;
}());
module.exports = ClientHandler;
