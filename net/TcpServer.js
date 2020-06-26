"use strict";
var net = require("net");
var TcpServer = /** @class */ (function () {
    function TcpServer() {
        this.lstSocket = [];
    }
    TcpServer.prototype.init = function () {
        var _this = this;
        var app = net.createServer(function (socket) {
            _this.handleConnected(socket);
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
    TcpServer.prototype.handleConnected = function (socket) {
        console.log('connect: ' + socket.remoteAddress + ':' + socket.remotePort);
    };
    TcpServer.prototype.handleDisconnected = function (socket) {
        console.log('disconnect: ' + socket.remoteAddress + ':' + socket.remotePort);
    };
    TcpServer.prototype.handleRecv = function (socket, data) {
        console.log('recv');
    };
    TcpServer.IP = '127.0.0.1';
    TcpServer.PORT = 8888;
    return TcpServer;
}());
module.exports = TcpServer;