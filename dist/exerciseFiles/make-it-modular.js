"use strict";
const myModule = require('./my-module');
const filePath = process.argv[2];
const fileExt = process.argv[3];
myModule(filePath, fileExt, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        data.forEach((item) => console.log(item));
    }
});
//# sourceMappingURL=make-it-modular.js.map