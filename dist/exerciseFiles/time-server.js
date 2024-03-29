"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeServer = void 0;
const net_1 = __importDefault(require("net"));
const PORT = process.argv[2];
function getFullDate() {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
    const day = ('0' + newDate.getDate()).slice(-2);
    const hours = ('0' + newDate.getHours()).slice(-2);
    const minutes = ('0' + newDate.getMinutes()).slice(-2);
    const formatedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formatedDate;
}
const getTimeServer = (port) => {
    const server = net_1.default.createServer(function (socket) {
        socket.write(`${getFullDate()}\n`, () => socket.end());
    });
    server.listen(port);
    return server;
};
exports.getTimeServer = getTimeServer;
(0, exports.getTimeServer)(PORT);
//# sourceMappingURL=time-server.js.map