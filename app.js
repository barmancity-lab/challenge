/* eslint-disable security/detect-non-literal-require */

const context = require('./app/config/').context;

const company = 'telecom';

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const YAML = require('yamljs');

const swaggerDocument = YAML.load(`./swagger-${context.version}.yml`);
const swaggerUi = require('swagger-ui-express');

// eslint-disable-next-line import/no-dynamic-require
const route = require('./app/routes/weather-route');

/** up server */
const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// health check MS
app.get(`/api/${company}/${context.version}/health`, (req, res) => {
  res.send(`${context.name} up and running`);
});

app.use(
  `/api/${company}/${context.version}/api-docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use(`/api/${company}/${context.version}/weather`, route);

app.use((req, res) => {
  // eslint-disable-line
  res.status(500).send({ code: 'error', message: 'internal error not handled' });
});

module.exports = app;
