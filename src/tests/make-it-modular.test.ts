const myModule = require('../exerciseFiles/my-module');
const mock = require('mock-fs');
const path = require('path');

describe('Tests for myModule function', () => {
  const testDir = 'test-files';

  beforeEach(() => {
    mock({
      [testDir]: {
        'test1.txt': 'Some text',
        'test2.txt': 'More text',
        'test3.ts': 'Have a great day',
      },
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it('should correctly return files with .txt extension', () => {
    const ext = 'txt';

    myModule(testDir, ext, (_err: unknown, data: string[]) => {
      expect(data).toEqual(['test1.txt', 'test2.txt']);
    });
  });

  it('should not return files that do not have .txt extension', () => {
    const ext = 'txt';

    myModule(testDir, ext, (_err: unknown, data: string[]) => {
      expect(data).not.toEqual(['test1.txt', 'test2.txt', 'test3.ts']);
    });
  });

  it('should throw an error when the path is not found', () => {
    const ext = 'txt';
    myModule('non-existent-path', ext, (err: unknown, _data: string[]) => {
      expect(() => {
        if (err) {
          throw err;
        }
      }).toThrow(/ENOENT/);
    });
  });
});
