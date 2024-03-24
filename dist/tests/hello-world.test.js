"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("../exerciseFiles/hello-world");
describe('HELLO WORLD test', () => {
    test('Should return HELLO WORLD in console', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        (0, hello_world_1.sayHelloHandle)();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('HELLO WORLD');
    });
});
//# sourceMappingURL=hello-world.test.js.map