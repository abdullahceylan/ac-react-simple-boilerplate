const express = require('express');
const next = require('next');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ isDev });
const handle = app.getRequestHandler();

const logger = console.log;

logger(`Starting ${isDev ? 'development' : 'production'} server..`);

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) {
        throw err.message;
      }
      logger(`> Web server ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    logger(ex.stack());
    process.exit();
  });
