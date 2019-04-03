"use strict";
module.exports = (sequelize, DataTypes) => {
  const CONGRESS = sequelize.define(
    "CONGRESS",
    {
      CONGRESS_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      CONGRESS_NAME: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      START_DATE: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      END_DATE: {
        type: DataTypes.STRING(50),
        allowNull: true
      }
    },
    {}
  );
  CONGRESS.associate = function(models) {
    // associations can be defined here
  };
  return CONGRESS;
};
