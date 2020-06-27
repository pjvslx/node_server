"use strict";
var PacketBuffer = require("./PacketBuffer");
var GameProto_1 = require("../proto/GameProto");
var ClientHandler = /** @class */ (function () {
    function ClientHandler() {
        this.id = 0;
        this.buffer = new PacketBuffer();
    }
    ClientHandler.prototype.handleRecv = function (data) {
        this.buffer.writeBuffer(data);
        var packets = this.buffer.getPackages();
        for (var i = 0; i < packets.length; i++) {
            var packet = packets[i];
            console.log('-------msgType = ' + packet.msgType);
            console.log('-------msgId = ' + packet.msgId);
            var req = GameProto_1.account_service.LoginResponse.decode(packet.buf);
            console.log('req = ', req.toJSON());
        }
    };
    return ClientHandler;
}());
module.exports = ClientHandler;
