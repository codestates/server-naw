"use strict";
module.exports = (sequelize, DataTypes) => {
  const PARTY = sequelize.define(
    "PARTY",
    {
      PARTY_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      PARTY_NAME: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      PARTY_LOGO: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      PARTY_COLOR: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      PARTY_LINK: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {}
  );
  PARTY.associate = function(models) {
    // associations can be defined here
    PARTY.hasMany(models.MNA, { foreignKey: "MNA_ID" });
  };
  return PARTY;
};
