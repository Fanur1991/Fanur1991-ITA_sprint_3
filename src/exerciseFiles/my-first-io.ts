import * as fs from 'fs';

const path = process.argv[2];

const myFn = (path: string) => {
  return fs.readFileSync(path, 'utf-8').split('\n').length - 1;
};

console.log(myFn(path));
