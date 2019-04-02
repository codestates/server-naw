/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('STDCOMT', {
		STDCOMT_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		STDCOMT_NAME: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'STDCOMT'
	});
};
