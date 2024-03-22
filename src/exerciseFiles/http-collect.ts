import * as http from 'http';
import * as validUrl from 'valid-url';

const url = process.argv[2];

const isValidUrl = (url: string) => {
  if (validUrl.isWebUri(url)) fetchData(url);
  return;
};

function fetchData(url: string) {
  let totalChar: number = 0;
  let rawData: string = '';
  http.get(url, (res: http.IncomingMessage) => {
    res.setEncoding('utf-8').on('data', (data: string) => {
      totalChar += data.length;
      rawData += data;
    });
    res.on('error', (err) => console.log(err));
    res.on('end', () => {
      console.log(totalChar);
      console.log(rawData);
    });
  });
}

isValidUrl(url);
