import dotenv from 'dotenv';
dotenv.config();

module.exports = function () {
  return require('./app.json');
};
