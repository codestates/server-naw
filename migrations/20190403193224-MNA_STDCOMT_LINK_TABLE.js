"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("MNA_STDCOMT_LINK_TABLE", {
      MNA_STDCOMT_LINK_TABLE_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      MNA_ID: {
        type: Sequelize.INTEGER(11)
      },
      STDCOMT_ID: {
        type: Sequelize.INTEGER(11)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("MNA_STDCOMT_LINK_TABLE");
  }
};
