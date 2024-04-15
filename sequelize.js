// sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgress', 'postgres', '123456', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  logging: false, // Disable logging for production
});

module.exports = sequelize;
