import net = require('net');
import PacketBuffer = require('./PacketBuffer');
import {account_service} from '../proto/GameProto';
class ClientHandler{
    socket?: net.Socket;
    id: number = 0;
    buffer:PacketBuffer;
    constructor(){
        this.buffer = new PacketBuffer();
    }

    handleRecv(data:Buffer){
        this.buffer.writeBuffer(data);
        let packets = this.buffer.getPackages();
        for(let i = 0; i < packets.length; i++){
            let packet = packets[i];
            console.log('-------msgType = ' + packet.msgType);
            console.log('-------msgId = ' + packet.msgId);
            let req:account_service.LoginResponse = account_service.LoginResponse.decode(packet.buf);
            console.log('req = ' , req.toJSON());
        }
    }
}

export = ClientHandler;