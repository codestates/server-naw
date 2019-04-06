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
      STDCOMT_TEXT: {
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
    { tableName: "MNA" }
  );
  MNA.associate = function(models) {
    // associations can be defined here
    MNA.belongsTo(models.PARTY, { as: "PARTY", foreignKey: "PARTY_ID" });
    MNA.belongsToMany(models.STDCOMT, {
      through: models.MNA_STDCOMT_LINK_TABLE,
      as: "STDCOMT",
      foreignKey: "STDCOMT_ID"
    });
    MNA.belongsTo(models.LOCAL, { as: "LOCAL", foreignKey: "LOCAL_ID" });
    MNA.hasMany(models.BILL, {
      as: "BILL",
      foreignKey: "BILL_primaryLawMaker"
    });
  };

  MNA.getList = () => {
    return sequelize
      .query(
        `select * 
        from MNA as M 
        INNER JOIN LOCAL AS L 
        INNER JOIN PARTY AS P 
        ON M.LOCAL_ID = L.LOCAL_ID AND M.PARTY_ID = P.PARTY_ID 
        ORDER BY M.MNA_ID;`,
        {
          model: MNA,
          mapToModel: true
        }
      )
      .then(MNA => MNA);
  };

  MNA.findMna = id => {
    return sequelize
      .query(
        `select * 
        from MNA as M 
        INNER JOIN LOCAL AS L 
        INNER JOIN PARTY AS P 
        ON M.MNA_ID = ${id} AND M.LOCAL_ID = L.LOCAL_ID AND M.PARTY_ID = P.PARTY_ID 
        ORDER BY M.MNA_ID;`,
        {
          model: MNA,
          mapToModel: true
        }
      )
      .then(MNA => MNA);
  };

  return MNA;
};
