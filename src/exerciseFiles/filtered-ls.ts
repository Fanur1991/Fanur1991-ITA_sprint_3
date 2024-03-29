import * as path from 'node:path';
import * as fs from 'fs';

const filePath = process.argv[2];
const fileExt = process.argv[3];

export function filteredLs(filePath: string, fileExt: string) {
  fs.readdir(filePath, 'utf-8', (err, data) => {
    if (err) console.log(err);
    else
      data
        .filter((extItem) => path.extname(extItem) === `.${fileExt}`)
        .forEach((item) => console.log(item));
  });
}

if (require.main === module) {
  filteredLs(filePath, fileExt);
}
