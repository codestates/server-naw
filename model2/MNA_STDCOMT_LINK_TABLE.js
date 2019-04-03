/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const MNA_STDCOMT_LINK_TABLE = sequelize.define(
    "MNA_STDCOMT_LINK_TABLE",
    {
      ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      MNA_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "MNA",
          key: "mna_id"
        }
      },
      STDCOMT_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "STDCOMT",
          key: "stdcomt_id"
        }
      }
    },
    {
      tableName: "MNA_STDCOMT_LINK_TABLE"
    }
  );
  return MNA_STDCOMT_LINK_TABLE;
};
