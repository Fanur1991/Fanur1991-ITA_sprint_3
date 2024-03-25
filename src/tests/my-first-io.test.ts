import { myFirstIO } from '../exerciseFiles/my-first-io';
import * as fs from 'fs';

describe('My first IO function test', () => {
  test('should return the correct number of lines in the file', () => {
    const tempFilePath = 'tempFile.txt';
    const content = 'Ten\nun\nbuen\ndia\namigo';

    fs.writeFileSync(tempFilePath, content);

    const actualLines = myFirstIO(tempFilePath);

    expect(actualLines).toBe(4);

    // elimina el archivo de prueba después de la prueba
    fs.unlinkSync(tempFilePath);
  });
});
