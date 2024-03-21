import * as fs from 'fs';

const file = process.argv[2];

const printNumberOfNewlines = (path: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(`Error reading file: ${err.message}`);
      else resolve(data.split('\n').length - 1);
    });
  });
};

// opcion 1 a traves async/await
const main = async () => {
  try {
    if (!file) throw new Error('File path is missing.');
    const numberOfNewlines = await printNumberOfNewlines(file);
    console.log(numberOfNewlines);
  } catch (error) {
    console.log(error);
  }
};

main();

// opcion 2 a traves then/catch
// printNumberOfNewlines(file)
//   .then((numberOfNewlines) => {
//     console.log(numberOfNewlines);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
