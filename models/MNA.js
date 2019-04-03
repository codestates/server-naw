"use strict";
module.exports = (sequelize, DataTypes) => {
  const MNA = sequelize.define(
    "MNA",
    {
      MNA_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      MNA_NAME: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      MNA_HANJA: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      MNA_PHOTO: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      MNA_HISTORY: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      MNA_PHONE: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      MNA_EMAIL: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      MNA_ADDRESS: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      MNA_HOMEPAGE: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      MNA_URL: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      PARTY_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      LOCAL_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      }
    },
    {}
  );
  MNA.associate = function(models) {
    // associations can be defined here
    MNA.belongsTo(models.PARTY, { foreignKey: "PARTY_ID" });
    MNA.belongsToMany(
      models.STDCOMT,
      { through: models.MNA_STDCOMT_LINK_TABLE },
      { foreignKey: "MNA_ID" }
    );
    MNA.belongsTo(models.LOCAL, { foreignKey: "LOCAL_ID" });
  };
  return MNA;
};
