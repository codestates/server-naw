/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const MNA = sequelize.define(
    "MNA",
    {
      MNA_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
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
      PARTY_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "PARTY",
          key: "party_id"
        }
      },
      LOCAL_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      MNA_HISTORY: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      STDCOMT_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "STDCOMT",
          key: "stdcomt_id"
        }
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
      MNA_FAX: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      MNA_BLOG: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      MNA_TWTR: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      MNA_FB: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {
      tableName: "MNA"
    }
  );

  MNA.find = mnaname => {
    return MNA.findOne({
      where: {
        MNA_NAME: mnaname
      }
    });
  };

  return MNA;
};
