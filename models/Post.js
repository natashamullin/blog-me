const sequelize = require("../config/config");

const { Sequelize, Model, DataTypes } = require('sequelize')

class Post extends Model { }

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Post;