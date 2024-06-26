import * as http from 'http';
import * as validUrl from 'valid-url';

const url = process.argv[2];

export const isValidUrl = (url: string) => {
  if (validUrl.isWebUri(url)) fetchData(url);
  else return;
};

function fetchData(url: string) {
  http.get(url, (res: http.IncomingMessage) => {
    res.setEncoding('utf-8').on('data', function (data: string) {
      console.log(data);
    });

    res.on('error', function (err) {
      console.log(err);
    });

    res.on('end', function () {});
  });
}

isValidUrl(url);
