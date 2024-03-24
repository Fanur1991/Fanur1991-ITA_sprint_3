import * as http from 'http';
import * as validUrl from 'valid-url';
// import { BufferList } from 'bl';

const url = process.argv[2];

const isValidUrl = (url: string) => {
  if (validUrl.isWebUri(url)) fetchData(url);
  return;
};

// opcion 1 sin uso una biblioteca

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

// opcion 2 con uso la biblioteca 'Buffer list'

// function fetchData(url: string) {
//   let totalChar: number = 0;
//   let rawData: string = '';
//   http.get(url, (res: http.IncomingMessage) => {
//     const bl = new BufferList();

//     res.on('data', (chunk) => {
//       bl.append(chunk);
//       totalChar += chunk.length;
//     });

//     res.on('error', (err) => console.log(err));

//     res.on('end', () => {
//       console.log(totalChar);
//       rawData = bl.toString('utf-8');
//       const lines = rawData.split('\n');
//       lines.forEach((line) => {
//         console.log(line);
//       });
//     });
//   });
// }

isValidUrl(url);
