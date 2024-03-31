const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("Group7.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; I chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);
