"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const http_uppercaserer_1 = require("../exerciseFiles/http-uppercaserer");
describe('HTTP UPPERCASERER function test', () => {
    const PORT = '3005';
    let server;
    beforeAll(() => {
        server = (0, http_uppercaserer_1.httpUppercaserer)(PORT);
    });
    afterAll(() => {
        server.close();
    });
    test('should accept POST requests and return the request body in uppercase', (done) => {
        const requestOptions = {
            hostname: 'localhost',
            port: PORT,
            path: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
        };
        const req = http_1.default.request(requestOptions, (res) => {
            expect(res.statusCode).toBe(200);
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                expect(data).toBe('HELLO, WORLD!');
                done();
            });
        });
        req.on('error', (error) => {
            done(error);
        });
        req.write('hello, world!');
        req.end();
    });
});
//# sourceMappingURL=http-uppercaserer.test.js.map