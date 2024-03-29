import * as http from 'http';

const PORT = process.argv[2];
// const PARSETIME_ENDPOINT = '/api/parsetime';
// const UNIXTIME_ENDPOINT = '/api/unixtime';

export const httpApiServer = (port: string): http.Server => {
  const server = http.createServer(
    (
      req: http.IncomingMessage,
      res: http.ServerResponse<http.IncomingMessage>
    ) => {
      if (!req.url) {
        console.error('URL is missing in the request');
        return;
      }
      const requestURL = new URL(req.url, `http://${req.headers.host}`);
      const queryParams = requestURL.searchParams;

      // if (req.method === 'GET' && requestURL.pathname === PARSETIME_ENDPOINT) {
      //   handleParseTimeRequest(queryParams, res);
      // } else if (
      //   req.method === 'GET' &&
      //   requestURL.pathname === UNIXTIME_ENDPOINT
      // ) {
      //   handleUnixTimeRequest(queryParams, res);
      // } else {
      //   handleError(res, 404, 'Endpoint not found');
      // }

      if (requestURL.pathname === '/api/parsetime' && req.method === 'GET') {
        const isoValue = queryParams.get('iso');
        if (isoValue) {
          const date = new Date(isoValue);

          const responseObject = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
          };

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(responseObject));
        }
      }

      if (requestURL.pathname === '/api/unixtime' && req.method === 'GET') {
        const unixtimeValue = queryParams.get('iso');
        if (unixtimeValue) {
          const date = new Date(unixtimeValue);
          const unixTime = date.getTime();
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ unixtime: unixTime }));
        }
      }
    }
  );

  server.listen(port, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  return server;
};

// function handleParseTimeRequest(
//   queryParams: URLSearchParams,
//   res: http.ServerResponse<http.IncomingMessage>
// ) {
//   const isoValue = queryParams.get('iso');
//   if (!isoValue) {
//     handleError(res, 400, 'ISO parameter is missing');
//     return;
//   }

//   const date = new Date(isoValue);
//   const responseObject = {
//     hour: date.getHours(),
//     minute: date.getMinutes(),
//     second: date.getSeconds(),
//   };

//   sendJSONResponse(res, responseObject);
// }

// function handleUnixTimeRequest(
//   queryParams: URLSearchParams,
//   res: http.ServerResponse<http.IncomingMessage>
// ) {
//   const isoValue = queryParams.get('iso');
//   if (!isoValue) {
//     handleError(res, 400, 'ISO parameter is missing');
//     return;
//   }

//   const unixTime = new Date(isoValue).getTime();
//   sendJSONResponse(res, { unixtime: unixTime });
// }

// function handleError(
//   res: http.ServerResponse<http.IncomingMessage>,
//   statusCode: number,
//   message: string
// ) {
//   res.statusCode = statusCode;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(message);
// }

// function sendJSONResponse(
//   res: http.ServerResponse<http.IncomingMessage>,
//   data: any
// ) {
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify(data));
// }

httpApiServer(PORT);
