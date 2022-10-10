'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helper/bcrypt');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'This field must be email',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        const hashedPassword = hashPassword(user.password);
        user.password = hashedPassword;
      }
    }
  });
  return User;
};