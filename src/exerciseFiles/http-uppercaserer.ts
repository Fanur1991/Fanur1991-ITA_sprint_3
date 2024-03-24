import http from 'http';
import map from 'through2-map';

const PORT = process.argv[2];

export const httpUppercaserer = (port: string) => {
  const server = http.createServer(
    (
      req: http.IncomingMessage,
      res: http.ServerResponse<http.IncomingMessage>
    ) => {
      if (req.method === 'POST') {
        req
          .pipe(
            map(function (chunk: Buffer) {
              return chunk.toString().toUpperCase();
            })
          )
          .pipe(res);
      } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
      }
    }
  );
  server.listen(port);
};

httpUppercaserer(PORT);
