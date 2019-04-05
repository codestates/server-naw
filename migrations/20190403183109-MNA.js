"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("MNA", {
      MNA_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      MNA_NAME: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      MNA_HANJA: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      MNA_PHOTO: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      MNA_HISTORY: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      MNA_PHONE: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      MNA_EMAIL: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      MNA_ADDRESS: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      MNA_HOMEPAGE: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      MNA_URL: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      STDCOMT_TEXT: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      PARTY_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: "PARTY",
          key: "PARTY_ID"
        }
      },
      LOCAL_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: "LOCAL",
          key: "LOCAL_ID"
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("MNA");
  }
};
