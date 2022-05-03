'use strict';

const app = require('./server/app');
const debug = require("debug")("node-angular");
const http = require("http");

const server = http.createServer(app);

// Parser
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + "9000";
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + "9000";
  debug("Listening on " + bind);
};

const PORT = normalizePort("9000" || "9000");
app.set("port", PORT);

server.on("error", onError);
server.on("listening", onListening);
server.listen(PORT);
