// require sequelize
const { Sequelize, Model, DataTypes } = require('sequelize');
// require config
const sequelize = require('../config/config');

class Comment extends Model {}

// initializing
Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

// exporting
module.exports = Comment;