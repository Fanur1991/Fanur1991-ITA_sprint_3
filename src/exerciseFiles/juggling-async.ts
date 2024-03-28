import * as http from 'http';
import * as validUrl from 'valid-url';

const urls = process.argv.slice(2);

const isValidUrl = (url: string) => {
  return validUrl.isWebUri(url);
};

function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http.get(url, (res: http.IncomingMessage) => {
      let result: string = '';
      res.setEncoding('utf-8').on('data', (data: string) => {
        result += data;
      });
      res.on('error', (err) => reject(err));
      res.on('end', () => {
        resolve(result);
      });
    });
  });
}

export const jugglingAsync = async (urls: string[]) => {
  for (const url of urls) {
    if (isValidUrl(url)) {
      try {
        const response = await fetchData(url);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
};

jugglingAsync(urls);
