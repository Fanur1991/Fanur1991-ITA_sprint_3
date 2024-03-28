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
const nock_1 = __importDefault(require("nock"));
const juggling_async_1 = require("../exerciseFiles/juggling-async");
describe('jugglingAsync function test', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation();
        jest.spyOn(console, 'error').mockImplementation();
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });
    afterEach(() => {
        nock_1.default.cleanAll();
    });
    test('should correctly handle responses from multiple URLs', () => __awaiter(void 0, void 0, void 0, function* () {
        const url1 = 'http://example.com';
        const url2 = 'http://example.org';
        const response1 = 'Example response from example.com';
        const response2 = 'Example response from example.org';
        (0, nock_1.default)(url1).get('/').reply(200, response1);
        (0, nock_1.default)(url2).get('/').reply(200, response2);
        yield (0, juggling_async_1.jugglingAsync)([url1, url2]);
        expect(console.log).toHaveBeenCalledWith(response1);
        expect(console.log).toHaveBeenCalledWith(response2);
    }));
});
//# sourceMappingURL=juggling-async.test.js.map