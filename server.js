const jsonServer = require('json-server');

const PORT = process.env.PORT || 8080;
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: './client/build'
});

server.use(middlewares);
server.use('/api', router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
