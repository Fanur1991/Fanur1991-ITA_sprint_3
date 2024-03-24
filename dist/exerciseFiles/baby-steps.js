"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.babySteps = void 0;
let argv = process.argv.slice(2);
const babySteps = (arr) => arr.reduce((acc, curr) => Number(acc) + Number(curr), 0);
exports.babySteps = babySteps;
console.log((0, exports.babySteps)(argv));
//# sourceMappingURL=baby-steps.js.map