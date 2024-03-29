import net from 'net';
import { getTimeServer } from '../exerciseFiles/time-server';

function getFullDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
  const day = ('0' + newDate.getDate()).slice(-2);
  const hours = ('0' + newDate.getHours()).slice(-2);
  const minutes = ('0' + newDate.getMinutes()).slice(-2);

  const formatedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

  return formatedDate;
}

describe('Time server function test', () => {
  const PORT: string = '3000';
  let server = getTimeServer(PORT);

  afterAll(() => {
    server.close();
  });

  test('should return the current time in "YYYY-MM-DD hh:mm" format', async () => {
    const client = new net.Socket();
    let receivedData = '';

    await new Promise<void>((resolve) => {
      client.connect(parseInt(PORT, 10), '127.0.0.1', () => {
        client.on('data', (data) => {
          receivedData += data.toString();
        });

        client.on('end', () => {
          expect(receivedData.trim()).toMatch(getFullDate());
          resolve();
        });
      });
    });
  });
});
