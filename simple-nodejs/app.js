const express = require('express');
const routes = require('./routes');
const middleware = require('./middleware');

const app = express();
app.use(middleware.log);
app.use(routes);

app.listen(3002)