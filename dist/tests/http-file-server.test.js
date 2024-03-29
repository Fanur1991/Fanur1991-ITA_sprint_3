"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const fs_1 = __importDefault(require("fs"));
const http_file_server_1 = require("../exerciseFiles/http-file-server");
describe('HTTP file server', () => {
    const PORT = 3000;
    const testFilePath = './testFile.txt';
    let server;
    beforeAll(() => {
        fs_1.default.writeFileSync(testFilePath, 'Hello, world!');
        server = (0, http_file_server_1.httpFileServer)(PORT.toString(), testFilePath);
    });
    afterAll(() => {
        fs_1.default.unlinkSync(testFilePath);
        server.close();
    });
    it('should serve the file content on HTTP request', (done) => {
        http.get(`http://localhost:${PORT}`, (res) => {
            expect(res.statusCode).toBe(200);
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                expect(data).toBe('Hello, world!');
                done();
            });
        });
    });
});
//# sourceMappingURL=http-file-server.test.js.map