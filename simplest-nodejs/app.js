const express = require('express');
const routes = require('./routes');
app = express()
app.use(routes)

console.log('Server is listening on port 3001')
app.listen(3001)