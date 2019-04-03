/* jshint indent: 1 */

// 상임위원회
module.exports = function(sequelize, DataTypes) {
  const STDCOMT = sequelize.define(
    "STDCOMT",
    {
      STDCOMT_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      STDCOMT_NAME: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
    },
    {
      tableName: "STDCOMT"
    }
  );
  return STDCOMT;
};
