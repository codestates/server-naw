/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('INITIATE_BILL', {
		INITIATE_BILL_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		BILL_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'BILL',
				key: 'bill_id'
			}
		},
		MNA_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'MNA',
				key: 'mna_id'
			}
		},
		REPRS_MNA: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'INITIATE_BILL'
	});
};
