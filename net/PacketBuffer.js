"use strict";
var Packet = require("./Packet");
var PacketBuffer = /** @class */ (function () {
    function PacketBuffer() {
        this.buf = Buffer.alloc(0);
    }
    PacketBuffer.prototype.writeBuffer = function (buf) {
        var leftLength = this.buf.length;
        var curLength = buf.length;
        this.buf = Buffer.concat([this.buf, buf], leftLength + curLength);
    };
    PacketBuffer.prototype.getPackages = function () {
        var offset = 0;
        var lstPacket = [];
        var buf = this.buf;
        while (1) {
            console.log('buf.length = ' + buf.length);
            if (buf.length < PacketBuffer.PACKET_MESSAGE_TYPE_LEN + PacketBuffer.PACKET_MESSAGE_ID_LEN + PacketBuffer.PACKET_MESSAGE_PYLOAD_LEN) {
                return lstPacket;
            }
            var len = buf.readUInt16LE();
            var type = buf.readUInt16LE(PacketBuffer.PACKET_MESSAGE_TYPE_LEN);
            var id = buf.readUInt32LE(PacketBuffer.PACKET_MESSAGE_PYLOAD_LEN + PacketBuffer.PACKET_MESSAGE_TYPE_LEN);
            if (buf.length < len) {
                // break;
                return lstPacket;
            }
            var packet = new Packet();
            packet.msgId = id;
            packet.msgType = type;
            packet.buf = buf.slice(PacketBuffer.PACKET_HEADER_LEN, len - PacketBuffer.PACKET_HEADER_LEN);
            lstPacket.push(packet);
            var totalLength = len;
            buf = buf.slice(totalLength, buf.length - totalLength);
        }
        this.buf = buf;
        return lstPacket;
    };
    PacketBuffer.PACKET_MESSAGE_ID_LEN = 4;
    PacketBuffer.PACKET_MESSAGE_TYPE_LEN = 2;
    PacketBuffer.PACKET_MESSAGE_PYLOAD_LEN = 2;
    PacketBuffer.PACKET_HEADER_LEN = PacketBuffer.PACKET_MESSAGE_TYPE_LEN + PacketBuffer.PACKET_MESSAGE_ID_LEN + PacketBuffer.PACKET_MESSAGE_PYLOAD_LEN;
    return PacketBuffer;
}());
module.exports = PacketBuffer;
