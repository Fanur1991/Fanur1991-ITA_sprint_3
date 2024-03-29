import { httpApiServer } from '../exerciseFiles/http-json-api-server';
import http from 'http';

describe('HTTP API server finction test', () => {
  let server: http.Server;

  beforeAll(() => {
    server = httpApiServer('3003');
  });

  afterAll(async () => {
    await new Promise<void>((resolve) => {
      server.close(() => {
        resolve();
      });
    });
  });

  test('should handle /api/parsetime endpoint correctly', (done) => {
    // Sending a request to /api/parsetime with the current time in the iso parameter
    const testDate = new Date();
    const isoTime = testDate.toISOString();
    http.get(`http://localhost:3003/api/parsetime?iso=${isoTime}`, (res) => {
      expect(res.statusCode).toBe(200);
      let rawData = '';
      res.on('data', (chunk) => (rawData += chunk));
      res.on('end', () => {
        const data = JSON.parse(rawData);
        expect(data.hour).toBeDefined();
        expect(data.minute).toBeDefined();
        expect(data.second).toBeDefined();
        done();
      });
    });
  });

  test('should handle /api/unixtime endpoint correctly', (done) => {
    // Sending a request to /api/unixtime with the current time in the iso parameter
    const testDate = new Date();
    const isoTime = testDate.toISOString();
    http.get(`http://localhost:3003/api/unixtime?iso=${isoTime}`, (res) => {
      expect(res.statusCode).toBe(200);
      let rawData = '';
      res.on('data', (chunk) => (rawData += chunk));
      res.on('end', () => {
        const data = JSON.parse(rawData);
        expect(data.unixtime).toBeDefined();
        const expectedUnixtime = testDate.getTime();
        expect(data.unixtime).toBeCloseTo(expectedUnixtime, -2);
        done();
      });
    });
  });
});
