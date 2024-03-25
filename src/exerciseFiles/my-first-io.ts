import * as fs from 'fs';

const filePath = process.argv[2] || process.argv0;

export const myFirstIO = (filePath: string) => {
  const result = fs.readFileSync(filePath, 'utf-8').split('\n').length - 1;

  return result;
};

console.log(myFirstIO(filePath));
