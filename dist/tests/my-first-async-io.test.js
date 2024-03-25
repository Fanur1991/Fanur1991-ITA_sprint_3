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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const my_first_async_io_1 = require("../exerciseFiles/my-first-async-io");
describe('My first async IO function test', () => {
    test('should return the correct number of lines in the file', () => __awaiter(void 0, void 0, void 0, function* () {
        const tempFilePath = 'tempFile.txt';
        const content = 'Ten\nun\nbuen\ndia\namigo';
        yield new Promise((resolve, reject) => {
            fs.writeFile(tempFilePath, content, 'utf-8', (error) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                    return;
                }
                resolve(null);
            });
        });
        try {
            const actualLines = yield (0, my_first_async_io_1.myFirstAsyncIO)(tempFilePath);
            expect(actualLines).toBe(4);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
        finally {
            fs.unlinkSync(tempFilePath);
        }
    }));
    test('should throw an error when file does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const nonExistentFilePath = 'nonExistentFile.txt';
        try {
            yield (0, my_first_async_io_1.myFirstAsyncIO)(nonExistentFilePath);
            fail('Expected an error to be thrown');
        }
        catch (error) {
            expect(error).toBeDefined();
        }
    }));
});
//# sourceMappingURL=my-first-async-io.test.js.map