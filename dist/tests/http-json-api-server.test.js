"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_json_api_server_1 = require("../exerciseFiles/http-json-api-server");
const http_1 = __importDefault(require("http"));
describe('HTTP API server finction test', () => {
    let server;
    beforeAll(() => {
        server = (0, http_json_api_server_1.httpApiServer)('3003');
    });
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield new Promise((resolve) => {
            server.close(() => {
                resolve();
            });
        });
    }));
    test('should handle /api/parsetime endpoint correctly', (done) => {
        // Sending a request to /api/parsetime with the current time in the iso parameter
        const testDate = new Date();
        const isoTime = testDate.toISOString();
        http_1.default.get(`http://localhost:3003/api/parsetime?iso=${isoTime}`, (res) => {
            expect(res.statusCode).toBe(200);
            let rawData = '';
            res.on('data', (chunk) => (rawData += chunk));
            res.on('end', () => {
                const data = JSON.parse(rawData);
                expect(data.hour).toBeDefined();
                expect(data.minute).toBeDefined();
                expect(data.second).toBeDefined();
                done();
            });
        });
    });
    test('should handle /api/unixtime endpoint correctly', (done) => {
        // Sending a request to /api/unixtime with the current time in the iso parameter
        const testDate = new Date();
        const isoTime = testDate.toISOString();
        http_1.default.get(`http://localhost:3003/api/unixtime?iso=${isoTime}`, (res) => {
            expect(res.statusCode).toBe(200);
            let rawData = '';
            res.on('data', (chunk) => (rawData += chunk));
            res.on('end', () => {
                const data = JSON.parse(rawData);
                expect(data.unixtime).toBeDefined();
                const expectedUnixtime = testDate.getTime();
                expect(data.unixtime).toBeCloseTo(expectedUnixtime, -2);
                done();
            });
        });
    });
});
//# sourceMappingURL=http-json-api-server.test.js.map