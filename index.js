const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;
app
  .get('/', (req, res, next) => {
    res.send(new Date().toISOString());
  })
  .get('/foo', (_, res) => {
    res.send(`<h1>bar</h1>`);
  })
  .listen(port, () => {
    console.log('Listen on ' + port);
  });

module.exports = { app };
