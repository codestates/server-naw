/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('USERS', {
		USER_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		USER_EMAIL: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		USER_PASSWORD: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		USER_LOCAL: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		SIGNUP_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'USERS'
	});
};
