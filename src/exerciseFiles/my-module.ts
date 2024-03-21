import * as fs from 'fs';
import * as path from 'node:path';

function myModule(filePath: string, fileExt: string, callback: Function) {
  fs.readdir(filePath, 'utf-8', (err: any, data: string[]) => {
    if (err) return callback(err);
    else {
      const filteredList = data.filter(
        (extItem) => path.extname(extItem) === `.${fileExt}`
      );
      callback(null, filteredList);
    }
  });
}

module.exports = myModule;
