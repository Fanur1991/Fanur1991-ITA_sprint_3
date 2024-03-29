"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpUppercaserer = void 0;
const http_1 = __importDefault(require("http"));
const through2_map_1 = __importDefault(require("through2-map"));
const PORT = process.argv[2];
const httpUppercaserer = (port) => {
    const server = http_1.default.createServer((req, res) => {
        if (req.method === 'POST') {
            req
                .pipe((0, through2_map_1.default)(function (chunk) {
                return chunk.toString().toUpperCase();
            }))
                .pipe(res);
        }
        else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
        }
    });
    server.listen(port);
    return server;
};
exports.httpUppercaserer = httpUppercaserer;
(0, exports.httpUppercaserer)(PORT);
//# sourceMappingURL=http-uppercaserer.js.map