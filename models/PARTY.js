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
    { tableName: "PARTY" }
  );
  PARTY.associate = function(models) {
    // associations can be defined here
    PARTY.hasMany(models.MNA, { as: "MNA", foreignKey: "PARTY_ID" });
  };

  PARTY.findAllCount = () => {
    return sequelize.query(
      `SELECT PARTY.PARTY_ID, PARTY_NAME, PARTY_LOGO, PARTY_COLOR, PARTY_LINK, COUNT(MNA.MNA_NAME)
      FROM PARTY
      INNER JOIN MNA
      ON MNA.PARTY_ID=PARTY.PARTY_ID
      GROUP BY(PARTY.PARTY_NAME);`,
      {
        model: PARTY,
        mapToModel: true
      }
    );
  };
  return PARTY;
};
