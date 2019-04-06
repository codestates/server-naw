/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('COMM', {
		COMM_ID: {
			type: DataTypes.STRING(11),
			allowNull: false,
			primaryKey: true
		},
		COMMNAME: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		GBN: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		GBN1: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		HWPLINK: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		MEETING1: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		MEETING2: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		PDFLINK: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		SUMMARY: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		VODLINK: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		APPENDIXPDFLINK2: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CONGRESS_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'CONGRESSES',
				key: 'congress_id'
			}
		},
		STDCOMT_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'COMM',
		timestamps: false
	});
};
