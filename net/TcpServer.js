"use strict";
var net = require("net");
var ClientHandler = require("./ClientHandler");
var PacketBuffer = require("./PacketBuffer");
var TcpServer = /** @class */ (function () {
    function TcpServer() {
        this.clientHandlerMap = {};
        this.socketId = 0;
    }
    TcpServer.prototype.init = function () {
        var _this = this;
        var app = net.createServer(function (socket) {
            _this.socketId++;
            _this.handleConnected(socket, _this.socketId);
            socket.on('data', function (data) {
                _this.handleRecv(socket, data);
            });
            socket.on('close', function () {
                console.log(socket.remoteAddress, socket.remotePort, 'disconnected');
            });
        });
        app.maxConnections = 3000;
        app.listen(TcpServer.PORT, TcpServer.IP);
        console.log('app.maxConnections = ' + app.maxConnections);
    };
    TcpServer.prototype.handleConnected = function (socket, id) {
        console.log('connect: ' + socket.remoteAddress + ':' + socket.remotePort + ' id = ' + id);
        var tmp = socket;
        tmp['socketId'] = id;
        var clientHandler = new ClientHandler();
        clientHandler.id = id;
        clientHandler.socket = socket;
        this.clientHandlerMap[id] = clientHandler;
    };
    TcpServer.prototype.handleDisconnected = function (socket) {
        console.log('disconnect: ' + socket.remoteAddress + ':' + socket.remotePort);
        var tmp = socket;
        var socketId = tmp['socketId'];
        this.clientHandlerMap[socketId] = null;
        socket.destroy();
    };
    TcpServer.prototype.handleRecv = function (socket, data) {
        console.log('recv');
        var packetBuffer = new PacketBuffer();
        packetBuffer.writeBuffer(data);
        var packets = packetBuffer.getPackages();
        for (var i = 0; i < packets.length; i++) {
            console.log('-------msgType = ' + packets[i].msgType);
            console.log('-------msgId = ' + packets[i].msgId);
        }
    };
    TcpServer.IP = '127.0.0.1';
    TcpServer.PORT = 8888;
    return TcpServer;
}());
module.exports = TcpServer;
