/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('COMP_TALK', {
		COMP_TALK_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		COMPLAINT_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'COMPLAINTS',
				key: 'complaint_id'
			}
		},
		SENDER_ID: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		TALK_TEXT: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		SEND_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'COMP_TALK'
	});
};
