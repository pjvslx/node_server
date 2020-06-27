import net = require('net');
import PacketBuffer = require('./PacketBuffer');
class ClientHandler{
    socket?: net.Socket;
    id: number = 0;
    buffer?:PacketBuffer;
    constructor(){
        this.buffer = new PacketBuffer();
    }
}

export = ClientHandler;