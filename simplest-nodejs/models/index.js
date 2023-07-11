const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const config = require('../util/config');

const basename = path.basename(__filename);
const db = {};

require('pg').defaults.parseInt8 = true;

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: process.env.DB_DIALECT,
    // dialectOptions: {
    //     ssl: {
    //         rejectUnauthorized: false
    //     }
    // }
  });

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;