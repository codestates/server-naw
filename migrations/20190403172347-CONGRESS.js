"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("CONGRESS", {
      CONGRESS_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      CONGRESS_NAME: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      START_DATE: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      END_DATE: {
        type: Sequelize.STRING(50),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CONGRESS");
  }
};
