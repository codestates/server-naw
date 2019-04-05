/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ATTENDANCE', {
		att_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		attName: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		attOrg: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		memberLink: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attPos: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		COMM_ID: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		MNA_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'MNA',
				key: 'mna_id'
			}
		}
	}, {
		tableName: 'ATTENDANCE',
		timestamps: false
	});
};
