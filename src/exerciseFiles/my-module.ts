import * as fs from 'fs';
import * as path from 'path';

function myModule(filePath: string, fileExt: string, callback: Function) {
  fs.readdir(filePath, 'utf-8', (err: any, data: string[]) => {
    if (err) {
      callback(err);
      return;
    } else {
      const filteredList = data.filter(
        (extItem) => path.extname(extItem) === `.${fileExt}`
      );
      callback(null, filteredList);
    }
  });
}

module.exports = myModule;
