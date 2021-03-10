const sequelize = require("../config/config");

const { Sequelize, Model, DataTypes } = require('sequelize')

class Post extends Model { }

post.init(
    {
        title: DataTypes.String,
        body: DataTypes.String
    },
    {
        Sequelize
    }
);

module.exports = Post;