import * as http from 'http';
import fs from 'fs';
import { httpFileServer } from '../exerciseFiles/http-file-server';

describe('HTTP file server', () => {
  const PORT = 3000;
  const testFilePath = './testFile.txt';
  let server: http.Server;

  beforeAll(() => {
    fs.writeFileSync(testFilePath, 'Hello, world!');
    server = httpFileServer(PORT.toString(), testFilePath);
  });

  afterAll(() => {
    fs.unlinkSync(testFilePath);
    server.close();
  });

  it('should serve the file content on HTTP request', (done) => {
    http.get(`http://localhost:${PORT}`, (res) => {
      expect(res.statusCode).toBe(200);
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        expect(data).toBe('Hello, world!');
        done();
      });
    });
  });
});
