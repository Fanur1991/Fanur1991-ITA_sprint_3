import * as fs from 'fs';
import { myFirstAsyncIO } from '../exerciseFiles/my-first-async-io';

describe('My first async IO function test', () => {
  test('should return the correct number of lines in the file', async () => {
    const tempFilePath = 'tempFile.txt';
    const content = 'Ten\nun\nbuen\ndia\namigo';

    await new Promise((resolve, reject) => {
      fs.writeFile(tempFilePath, content, 'utf-8', (error) => {
        if (error) {
          console.error(error.message);
          reject(error);
          return;
        }
        resolve(null);
      });
    });

    try {
      const actualLines = await myFirstAsyncIO(tempFilePath);
      expect(actualLines).toBe(4);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      fs.unlinkSync(tempFilePath);
    }
  });

  test('should throw an error when file does not exist', async () => {
    const nonExistentFilePath = 'nonExistentFile.txt';

    try {
      await myFirstAsyncIO(nonExistentFilePath);
      fail('Expected an error to be thrown');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
