// require user
const User = require('./User');
// require post
const Post = require('./Post');
// require comments
const Comment = require('./Comment');

// foreign keys
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// exporting
module.exports = {
  User,
  Comment,
  Post
};