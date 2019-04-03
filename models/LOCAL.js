"use strict";
module.exports = (sequelize, DataTypes) => {
  const LOCAL = sequelize.define(
    "LOCAL",
    {
      LOCAL_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      LOCAL_NAME: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    },
    {}
  );
  LOCAL.associate = function(models) {
    // associations can be defined here
    LOCAL.hasMany(models.MNA, { foreignKey: "MNA_ID" });
  };
  return LOCAL;
};
