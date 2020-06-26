"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TcpServer = require("./net/TcpServer");
var log4js = require("log4js"); //加载log4js模块
var logger = log4js.getLogger();
log4js.configure({
    pm2: true,
    appenders: {
        stdout: {
            type: 'console'
        },
        req: {
            type: 'dateFile',
            filename: 'logs/reqlog/req',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        err: {
            type: 'dateFile',
            filename: 'logs/errlog/err',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        oth: {
            type: 'dateFile',
            filename: 'logs/othlog/oth',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        //appenders:采用的appender,取appenders项,level:设置级别
        default: { appenders: ['stdout', 'req'], level: 'debug' },
        err: { appenders: ['stdout', 'err'], level: 'error' },
    }
});
var tcp = new TcpServer();
tcp.init();
logger.info('11');
