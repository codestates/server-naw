"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PARTY", {
      PARTY_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      PARTY_NAME: {
        type: Sequelize.STRING(45)
      },
      PARTY_LOGO: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      PARTY_COLOR: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      PARTY_LINK: {
        type: Sequelize.STRING(255),
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("PARTY");
  }
};
