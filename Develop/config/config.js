// requiring sequelize
const Sequelize = require('sequelize');

// require env
require('dotenv').config();

// creating the connection to the db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

    // exporting
module.exports = sequelize;