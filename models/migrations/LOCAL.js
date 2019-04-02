/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LOCAL', {
		LOCAL_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		LOCAL_NAME: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'LOCAL'
	});
};
