"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("STDCOMT", {
      STDCOMT_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      STDCOMT_NAME: {
        type: Sequelize.STRING(45)
      },
      COMM_CODE: {
        type: Sequelize.STRING(45)
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("STDCOMT");
  }
};
