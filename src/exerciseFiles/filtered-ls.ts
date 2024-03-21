import * as path from 'node:path';
import * as fs from 'fs';

const filePath = process.argv[2];
const fileExt = process.argv[3];

function filteredList(filePath: string, fileExt: string) {
  fs.readdir(filePath, 'utf-8', (err, data) => {
    if (err) throw new Error(`Error reading file: ${err.message}`);
    else
      data
        .filter((extItem) => path.extname(extItem) === `.${fileExt}`)
        .forEach((item) => console.log(item));
  });
}

filteredList(filePath, fileExt);
