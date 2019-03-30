/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SESSION', {
		SESSION_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		CONGRESS_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'CONGRESSES',
				key: 'congress_id'
			}
		},
		SESSION_NAME: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		SESSION_TEXT: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		SESSION_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		SESSION_TYPE: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		STDCOMT_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'STDCOMT',
				key: 'stdcomt_id'
			}
		}
	}, {
		tableName: 'SESSION'
	});
};
