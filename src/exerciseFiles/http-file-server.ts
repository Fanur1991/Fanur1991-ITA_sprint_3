import http from 'http';
import fs from 'fs';

const PORT = process.argv[2];
const filePath = process.argv[3];

export const httpFileServer = (port: string, filePath: string): http.Server => {
  const server = http.createServer(
    (
      _req: http.IncomingMessage,
      res: http.ServerResponse<http.IncomingMessage>
    ) => {
      res.setHeader('Content-Type', 'text/plain');

      const fileStream = fs.createReadStream(filePath);

      fileStream.pipe(res);
    }
  );
  server.listen(port);
  return server;
};

httpFileServer(PORT, filePath);
