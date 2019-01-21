const express = require('express');
const next = require('next');
const chalk = require('chalk');
const boxen = require('boxen');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ isDev });
const handle = app.getRequestHandler();

const logger = console.log;

/**
 * OPTIONS
 */
const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'gray'
};

const listenMessage = (p = port) =>
  chalk.gray(
    `
  Web server is running.

  ${chalk.green.bold('Web Healthcheck')} → ${chalk.green(
      `http://localhost:${p}/healthcheck`
    )}

  ${chalk.green.bold('Web')} → ${chalk.green(`http://localhost:${p}`)} 
`
  );

/**
 * ROUTING
 */

// logger(`Starting ${isDev ? 'development' : 'production'} server..`);

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/healthcheck', (req, res) => {
      res.sendStatus(200);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) {
        throw err.message;
      }
      logger(boxen(listenMessage(), boxOptions));
    });
  })
  .catch(ex => {
    logger(ex.stack());
    process.exit();
  });
