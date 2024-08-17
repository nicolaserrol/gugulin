import dotenv from 'dotenv';
dotenv.config();

function configureEnv (config) {
  const APP_ENV = process.env.APP_ENV;

  switch (APP_ENV) {
  case 'production': {
    break;
  }
  case 'staging': {
    config.expo.version = "1.0.1.0";
    break;
  }
  default: {
    break;
  }
  }
}

module.exports = function () {
  let config = require('./app.json');
  configureEnv(config);

  return config;
};
