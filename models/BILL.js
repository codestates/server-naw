/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BILL', {
		BILL_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		BILL_NAME: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		STDCOMT_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'STDCOMT',
				key: 'stdcomt_id'
			}
		},
		BILL_STATUS: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		BILL_CONTENT: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		BILL_LINK: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		BILL_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		CONFERENCE_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'SESSION',
				key: 'session_id'
			}
		}
	}, {
		tableName: 'BILL'
	});
};
