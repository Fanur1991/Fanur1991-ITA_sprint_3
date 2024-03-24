"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baby_steps_1 = require("../exerciseFiles/baby-steps");
describe('Baby steps function test', () => {
    test('Should return sum of array', () => {
        const arrOfPositiveNumbers = ['5', '4', '11'];
        const arrOfNegativeNumbers = ['-5', '-4', '-11'];
        expect((0, baby_steps_1.babySteps)(arrOfPositiveNumbers)).toBe(20);
        expect((0, baby_steps_1.babySteps)(arrOfNegativeNumbers)).toBe(-20);
    });
});
//# sourceMappingURL=baby-steps.test.js.map