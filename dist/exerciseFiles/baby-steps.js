"use strict";
let argv = process.argv.slice(2);
const getSumOfNumbers = () => argv.reduce((acc, curr) => Number(acc) + Number(curr), 0);
console.log(getSumOfNumbers());
//# sourceMappingURL=baby-steps.js.map