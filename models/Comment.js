const { Sequelize, odel, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model { }

comment.init(
    {
        body: {
            type: DataTypes.String,
            allowNull: false
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;