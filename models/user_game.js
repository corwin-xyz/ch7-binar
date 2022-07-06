'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_game.hasOne(models.User_game_biodata, {
        as: 'user_game_biodata',
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
      User_game.hasMany(models.User_game_history, {
        as: 'user_game_history',
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
    }
  }
  User_game.init(
    {
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6],
            msg: 'Password at least 6 characters',
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User_game',
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password);
        },
      },
    }
  );
  return User_game;
};
