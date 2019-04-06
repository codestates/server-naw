"use strict";
module.exports = (sequelize, DataTypes) => {
  const STDCOMT = sequelize.define(
    "STDCOMT",
    {
      STDCOMT_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      STDCOMT_NAME: {
        type: DataTypes.STRING(45)
      },
      COMM_CODE: {
        type: DataTypes.STRING(45)
      }
    },
    { tableName: "STDCOMT" }
  );
  STDCOMT.associate = function(models) {
    // associations can be defined here
    STDCOMT.belongsToMany(
      models.MNA,
      { through: models.MNA_STDCOMT_LINK_TABLE },
      { as: "MNA", foreignKey: "STDCOMT_ID" }
    );
  };
  return STDCOMT;
};
