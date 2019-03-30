/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('COMPLAINTS_LIKE', {
		COMPLAINTS_LIKE_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		COMPLAINTS_LIKE_USER_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		COMPLAINT_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'COMPLAINTS',
				key: 'complaint_id'
			}
		},
		COMPLAINTS_LIKE_DATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'COMPLAINTS_LIKE'
	});
};
