const crypto = require("crypto");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('USERS', {
    USER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USER_EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    USER_PASSWORD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    USER_LOCAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SIGNUP_DATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'USERS',
    timestamps: false,
    hooks: {
      afterValidate: (data, options) => {
        var shasum = crypto.createHash('sha1');
        shasum.update(data.USER_PASSWORD);
        data.USER_PASSWORD = shasum.digest('hex');
      }
    }
  });
};