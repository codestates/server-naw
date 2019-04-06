"use strict";
module.exports = (sequelize, DataTypes) => {
  const BILL = sequelize.define(
    "BILL",
    {
      BILL_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      BILL_DATE: DataTypes.STRING,
      BILL_NAME: DataTypes.STRING,
      BILL_primaryLawMaker: DataTypes.INTEGER,
      BILL_committee: DataTypes.STRING,
      BILL_status: DataTypes.STRING
    },
    { tableName: "BILL" }
  );
  BILL.associate = function(models) {
    // associations can be defined here
    BILL.belongsTo(models.MNA, {
      as: "MNA",
      foreignKey: "BILL_primaryLawMaker"
    });
  };
  return BILL;
};
