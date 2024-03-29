import net from 'net';

const PORT = process.argv[2];

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

export const getTimeServer = (port: string) => {
  const server = net.createServer(function (socket) {
    socket.write(`${getFullDate()}\n`, () => socket.end());
  });
  server.listen(port);
  return server;
};

getTimeServer(PORT);
