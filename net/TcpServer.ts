import net = require('net');
class TcpServer{
    static IP:string = '127.0.0.1';
    static PORT:number = 8888;
    socketMap: any = {};
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
        this.socketMap[id] = socket;
    }

    handleDisconnected(socket:net.Socket){
        console.log('disconnect: ' + socket.remoteAddress + ':' + socket.remotePort);
    }

    handleRecv(socket:net.Socket,data:Buffer){
        console.log('recv');
    }
}

export = TcpServer;