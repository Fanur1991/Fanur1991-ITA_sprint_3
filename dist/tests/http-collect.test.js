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
const http_collect_1 = require("../exerciseFiles/http-collect");
const nock_1 = __importDefault(require("nock"));
describe('HTTP collect function test', () => {
    it('should receive data, count it and output it to the console', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockUrl = 'http://example.com';
        const chunks = ['Data part 1', ' Data part 2'];
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        // Setup nock to intercept the first request
        (0, nock_1.default)(mockUrl).get('/').reply(200, chunks.join(''));
        (0, http_collect_1.isValidUrl)(mockUrl);
        (0, nock_1.default)(mockUrl).get('/').reply(200, chunks[1]);
        (0, http_collect_1.isValidUrl)(mockUrl);
        // Waiting for asynchronous operations
        yield new Promise((resolve) => setTimeout(resolve, 100));
        expect(consoleLogSpy).toHaveBeenCalledWith(23);
        expect(consoleLogSpy).toHaveBeenCalledWith('Data part 1 Data part 2');
        // Cleanup mocks and restore the original functionality of console.log
        nock_1.default.cleanAll();
        consoleLogSpy.mockRestore();
    }));
});
//# sourceMappingURL=http-collect.test.js.map