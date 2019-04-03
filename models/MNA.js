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
      // PARTY_ID: {
      //   type: DataTypes.INTEGER(11),
      //   allowNull: true,
      //   references: {
      //     model: "PARTY",
      //     key: "PARTY_ID"
      //   }
      // },
      STDCOMT_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "STDCOMT",
          key: "STDCOMT_ID"
        }
      }
      // LOCAL_ID: {
      //   type: DataTypes.INTEGER(11),
      //   allowNull: true,
      //   references: {
      //     model: "LOCAL",
      //     key: "LOCAL_ID"
      //   }
      // }
    },
    {}
  );
  MNA.associate = function(models) {
    // associations can be defined here
    MNA.belongsTo(models.STDCOMT, { foreignKey: "STDCOMT_ID" });
  };
  return MNA;
};
