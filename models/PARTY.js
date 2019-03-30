/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PARTY', {
		PARTY_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		PARTY_NAME: {
			type: DataTypes.TEXT,
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
	}, {
		tableName: 'PARTY'
	});
};
