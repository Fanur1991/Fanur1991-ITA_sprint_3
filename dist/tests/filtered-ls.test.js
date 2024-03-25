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
const filtered_ls_1 = require("../exerciseFiles/filtered-ls");
const mock_fs_1 = __importDefault(require("mock-fs"));
describe('filteredLs function test', () => {
    const testDir = 'testFiles';
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    beforeEach(() => {
        (0, mock_fs_1.default)({
            [testDir]: {
                'test1.txt': 'Some text',
                'test.txt': 'Some more text',
                'file3.ts': 'Have a great day',
            },
        });
    });
    afterEach(() => {
        mock_fs_1.default.restore();
    });
    it('should correctly print files with extension .txt', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, filtered_ls_1.filteredLs)(testDir, 'txt');
        yield new Promise((res) => {
            setTimeout(() => {
                res(null);
            }, 500);
        });
        expect(consoleSpy).toHaveBeenCalledWith('test1.txt');
        expect(consoleSpy).toHaveBeenCalledWith('test.txt');
    }));
    it('should not print a file with a different extension', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, filtered_ls_1.filteredLs)(testDir, 'txt');
        yield new Promise((res) => {
            setTimeout(() => {
                res(null);
            }, 500);
        });
        expect(consoleSpy).not.toHaveBeenCalledWith('file3.ts');
        consoleSpy.mockRestore();
    }));
});
//# sourceMappingURL=filtered-ls.test.js.map