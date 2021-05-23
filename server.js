const http = require("http");
const pid = process.pid;

const server = http
  .createServer((req, res) => {
    // yarn pm2 monit
    console.log(`Request recieved. Pid: ${pid}`);
    res.end(`Hello from Node.js. Pid: ${pid}`);
  })
  .listen(8080, () => {
    console.log(`Server started. Pid: ${pid}`);
  });

process.on("SIGINT", () => {
  console.log(`Server closed. Pid: ${pid}`);
  server.close(() => {
    process.exit();
  });
});
