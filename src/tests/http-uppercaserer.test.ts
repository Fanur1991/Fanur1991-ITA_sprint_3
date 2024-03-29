import http from 'http';
import { httpUppercaserer } from '../exerciseFiles/http-uppercaserer';

describe('HTTP UPPERCASERER function test', () => {
  const PORT = '3005';
  let server: http.Server;

  beforeAll(() => {
    server = httpUppercaserer(PORT);
  });

  afterAll(() => {
    server.close();
  });

  test('should accept POST requests and return the request body in uppercase', (done) => {
    const requestOptions = {
      hostname: 'localhost',
      port: PORT,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
    };

    const req = http.request(requestOptions, (res) => {
      expect(res.statusCode).toBe(200);

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        expect(data).toBe('HELLO, WORLD!');
        done();
      });
    });

    req.on('error', (error) => {
      done(error);
    });

    req.write('hello, world!');
    req.end();
  });
});
