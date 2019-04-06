"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BILL", {
      BILL_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BILL_DATE: {
        type: Sequelize.STRING
      },
      BILL_NAME: {
        type: Sequelize.STRING
      },
      BILL_primaryLawMaker: {
        type: Sequelize.INTEGER,
        references: {
          model: "MNA",
          key: "MNA_ID"
        }
      },
      BILL_committee: {
        type: Sequelize.STRING
      },
      BILL_status: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("BILL");
  }
};
