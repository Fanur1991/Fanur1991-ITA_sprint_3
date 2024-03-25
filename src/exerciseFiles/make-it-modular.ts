const myModuleFn = require('./my-module');
const filePath = process.argv[2];
const fileExt = process.argv[3];

myModuleFn(filePath, fileExt, (err: string, data: string[]) => {
  if (err) {
    console.log(err);
    return;
  } else {
    data.forEach((item) => console.log(item));
  }
});
