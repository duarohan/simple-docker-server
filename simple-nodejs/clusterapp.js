const cluster = require('cluster');
const { cpus } = require('os');
const process = require('process');
const express = require('express');
const routes = require('./routes');
const middleware = require('./middleware');

const numCPUs = 2;
const app = express();
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
    app.use(middleware.processId);
    app.use(routes);
    app.listen(3000)
//   console.log(`Worker ${process.pid} started`);
}