import { filteredLs } from '../exerciseFiles/filtered-ls';
import mock from 'mock-fs';

describe('filteredLs function test', () => {
  const testDir = 'testFiles';
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  beforeEach(() => {
    mock({
      [testDir]: {
        'test1.txt': 'Some text',
        'test.txt': 'Some more text',
        'file3.ts': 'Have a great day',
      },
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it('should correctly print files with extension .txt', async () => {
    filteredLs(testDir, 'txt');

    await new Promise((res) => {
      setTimeout(() => {
        res(null);
      }, 500);
    });

    expect(consoleSpy).toHaveBeenCalledWith('test1.txt');
    expect(consoleSpy).toHaveBeenCalledWith('test.txt');
  });

  it('should not print a file with a different extension', async () => {
    filteredLs(testDir, 'txt');

    await new Promise((res) => {
      setTimeout(() => {
        res(null);
      }, 500);
    });

    expect(consoleSpy).not.toHaveBeenCalledWith('file3.ts');
    consoleSpy.mockRestore();
  });
});
