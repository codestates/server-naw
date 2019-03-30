/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('INTER_CONGRESS', {
		INTER_MNA_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		MNA_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'MNA',
				key: 'mna_id'
			}
		},
		USER_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'USERS',
				key: 'user_id'
			}
		}
	}, {
		tableName: 'INTER_CONGRESS'
	});
};
