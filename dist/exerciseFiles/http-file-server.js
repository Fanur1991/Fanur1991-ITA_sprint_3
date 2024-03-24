"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFileServer = void 0;
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const PORT = process.argv[2];
const filePath = process.argv[3];
const httpFileServer = (port, filePath) => {
    const server = http_1.default.createServer((_req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        const fileStream = fs_1.default.createReadStream(filePath);
        fileStream.pipe(res);
    });
    server.listen(port);
};
exports.httpFileServer = httpFileServer;
(0, exports.httpFileServer)(PORT, filePath);
//# sourceMappingURL=http-file-server.js.map