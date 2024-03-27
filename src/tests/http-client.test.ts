import { isValidUrl } from '../exerciseFiles/http-client';
import nock from 'nock';

describe('HTTP client function test', () => {
  it('should fetch data and log it to the console', async () => {
    const mockUrl = 'http://example.com';
    const chunks = ['Data part 1', 'Data part 2'];
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    // Setup nock to intercept the first request
    nock(mockUrl).get('/').reply(200, chunks[0]);

    isValidUrl(mockUrl);

    nock(mockUrl).get('/').reply(200, chunks[1]);

    isValidUrl(mockUrl);

    // Waiting for asynchronous operations
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLogSpy).toHaveBeenCalledWith('Data part 1');
    expect(consoleLogSpy).toHaveBeenCalledWith('Data part 2');

    // Cleanup mocks and restore the original functionality of console.log
    nock.cleanAll();
    consoleLogSpy.mockRestore();
  });
});
