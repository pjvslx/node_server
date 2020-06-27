import net = require('net');
import Packet = require('./Packet');
class PacketBuffer{
    public static PACKET_MESSAGE_ID_LEN = 4;
    public static PACKET_MESSAGE_TYPE_LEN = 2;
    public static PACKET_MESSAGE_PYLOAD_LEN = 2;
    public static PACKET_HEADER_LEN = PacketBuffer.PACKET_MESSAGE_TYPE_LEN + PacketBuffer.PACKET_MESSAGE_ID_LEN + PacketBuffer.PACKET_MESSAGE_PYLOAD_LEN;
    buf:Buffer;
    constructor(){
        this.buf = Buffer.alloc(0);
    }
    writeBuffer(buf:Buffer){
        let leftLength = this.buf.length;
        let curLength = buf.length;
        this.buf = Buffer.concat([this.buf,buf],leftLength + curLength);
    }

    getPackages():Packet[]{
        let offset = 0;
        let lstPacket:Packet[] = [];
        let buf = this.buf;
        while(1){
            console.log('buf.length = ' + buf.length);
            if(buf.length < PacketBuffer.PACKET_MESSAGE_TYPE_LEN + PacketBuffer.PACKET_MESSAGE_ID_LEN + PacketBuffer.PACKET_MESSAGE_PYLOAD_LEN){
                return lstPacket;
            }

            let len = buf.readUInt16LE();
            let type = buf.readUInt16LE(PacketBuffer.PACKET_MESSAGE_TYPE_LEN);
            let id = buf.readUInt32LE(PacketBuffer.PACKET_MESSAGE_PYLOAD_LEN + PacketBuffer.PACKET_MESSAGE_TYPE_LEN);
            if(buf.length < len){
                // break;
                return lstPacket;
            }
            let packet:Packet = new Packet();
            packet.msgId = id;
            packet.msgType = type;
            packet.buf = buf.slice(PacketBuffer.PACKET_HEADER_LEN,len - PacketBuffer.PACKET_HEADER_LEN);
            lstPacket.push(packet);
            let totalLength = len;
            buf = buf.slice(totalLength,buf.length - totalLength);
        }
        this.buf = buf;
        return lstPacket;
    }
}
export = PacketBuffer;