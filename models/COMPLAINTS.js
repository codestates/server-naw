/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('COMPLAINTS', {
		COMPLAINT_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		COMPLAINT_NAME: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		COMPLAINT_TEXT: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		COMPLAINT_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		COMPLAINT_STATUS: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		COMPLAINT_CIVIL_ID: {
			type: DataTypes.INTEGER(11),
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
		tableName: 'COMPLAINTS'
	});
};
