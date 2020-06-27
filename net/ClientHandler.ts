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
            let req:account_service.LoginRequest = account_service.LoginRequest.decode(packet.buf);
            console.log('user_name = ' + req.userName + ' loginType = ' + req.loginType + ' deviceId = ' + req.deviceId);
        }
    }
}

export = ClientHandler;