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
const net_1 = __importDefault(require("net"));
const time_server_1 = require("../exerciseFiles/time-server");
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
describe('Time server function test', () => {
    const PORT = '3000';
    let server = (0, time_server_1.getTimeServer)(PORT);
    afterAll(() => {
        server.close();
    });
    test('should return the current time in "YYYY-MM-DD hh:mm" format', () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new net_1.default.Socket();
        let receivedData = '';
        yield new Promise((resolve) => {
            client.connect(parseInt(PORT, 10), '127.0.0.1', () => {
                client.on('data', (data) => {
                    receivedData += data.toString();
                });
                client.on('end', () => {
                    expect(receivedData.trim()).toMatch(getFullDate());
                    resolve();
                });
            });
        });
    }));
});
//# sourceMappingURL=time-server.test.js.map