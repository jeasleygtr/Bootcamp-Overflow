'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    content: DataTypes.TEXT,
    posttype: DataTypes.STRING
    },{
    freezeTableName: true
  });
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Post.hasMany(models.Comment, {
      onDelete: 'cascade'
    });
  };
  return Post;
};