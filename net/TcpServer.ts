import net = require('net');
import ClientHandler = require('./ClientHandler');
import PacketBuffer = require('./PacketBuffer');
import log4js = require('log4js');//加载log4js模块
let logger = log4js.getLogger();
class TcpServer{
    static IP:string = '127.0.0.1';
    static PORT:number = 8888;
    clientHandlerMap: any = {};
    socketId:number = 0;
    constructor(){

    }
    
    init(){
        var app:net.Server = net.createServer((socket)=>{
            this.socketId++;
            this.handleConnected(socket,this.socketId);
            socket.on('data',(data:Buffer)=>{
                this.handleRecv(socket,data);
            });

            socket.on('close',()=>{
                console.log(socket.remoteAddress, socket.remotePort, 'disconnected');
            });
        });
        app.maxConnections = 3000;
        app.listen(TcpServer.PORT,TcpServer.IP);
        console.log('app.maxConnections = ' + app.maxConnections);
    }

    handleConnected(socket:net.Socket,id:number){
        console.log('connect: ' + socket.remoteAddress + ':' + socket.remotePort + ' id = ' + id);
        let tmp:any = socket;
        tmp['socketId'] = id;
        let clientHandler:ClientHandler = new ClientHandler();
        clientHandler.id = id;
        clientHandler.socket = socket;
        this.clientHandlerMap[id] = clientHandler;
    }

    handleDisconnected(socket:net.Socket){
        console.log('disconnect: ' + socket.remoteAddress + ':' + socket.remotePort);
        let tmp:any = socket;
        let socketId = tmp['socketId'];
        this.clientHandlerMap[socketId] = null;
        socket.destroy();
    }

    handleRecv(socket:net.Socket,data:Buffer){
        console.log('recv');
        let tmp:any = socket;
        let socketId = tmp['socketId'];
        let socketHandler:ClientHandler = this.clientHandlerMap[socketId];
        if(socketHandler == null){
            logger.error('handleRecv is error, socketId = ' + socketId);
            return;
        }
        socketHandler.handleRecv(data);
    }
}

export = TcpServer;