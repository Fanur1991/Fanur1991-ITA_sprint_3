import * as fs from 'fs';

const filePath = process.argv[2] || process.argv0;

export const myFirstAsyncIO = (path: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(new Error(err.message));
      else resolve(data.toString().split('\n').length - 1);
    });
  });
};

// opcion 1 a traves async/await
export const main = async (path: string) => {
  try {
    const numberOfNewlines = await myFirstAsyncIO(path);
    console.log(numberOfNewlines);
    return;
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
  }
};

main(filePath);

// opcion 2 a traves then/catch
// myFirstAsyncIO(filePath)
//   .then((myFirstAsyncIO) => {
//     console.log(myFirstAsyncIO);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
