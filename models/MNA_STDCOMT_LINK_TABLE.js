"use strict";
module.exports = (sequelize, DataTypes) => {
  const MNA_STDCOMT_LINK_TABLE = sequelize.define(
    "MNA_STDCOMT_LINK_TABLE",
    {
      MNA_STDCOMT_LINK_TABLE_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11)
      },
      MNA_ID: {
        type: DataTypes.INTEGER(11)
      },
      STDCOMT_ID: {
        type: DataTypes.INTEGER(11)
      }
    },
    {}
  );
  MNA_STDCOMT_LINK_TABLE.associate = function(models) {
    // associations can be defined here
  };
  return MNA_STDCOMT_LINK_TABLE;
};
