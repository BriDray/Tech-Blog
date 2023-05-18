// require sequelize
const { Sequelize, Model, DataTypes } = require('sequelize');
// require config
const sequelize = require('../config/config');

class Post extends Model {}

// initializing
Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

// exporting
module.exports = Post;
