import nock from 'nock';
import { jugglingAsync } from '../exerciseFiles/juggling-async';

describe('jugglingAsync function test', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('should correctly handle responses from multiple URLs', async () => {
    const url1 = 'http://example.com';
    const url2 = 'http://example.org';
    const response1 = 'Example response from example.com';
    const response2 = 'Example response from example.org';

    nock(url1).get('/').reply(200, response1);
    nock(url2).get('/').reply(200, response2);

    await jugglingAsync([url1, url2]);

    expect(console.log).toHaveBeenCalledWith(response1);
    expect(console.log).toHaveBeenCalledWith(response2);
  });
});
