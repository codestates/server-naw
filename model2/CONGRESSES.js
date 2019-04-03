/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const CONGRESSES = sequelize.define(
    "CONGRESSES",
    {
      CONGRESS_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      CONGRESS: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      START_DATE: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      END_DATE: {
        type: DataTypes.STRING(50),
        allowNull: true
      }
    },
    {
      tableName: "CONGRESSES"
    }
  );

  return CONGRESSES;
};
