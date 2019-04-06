"use strict";
var jsonData = require("../utils/data");

console.log(JSON.parse(jsonData));
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ATTENDANCE", JSON.parse(jsonData), {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ATTENDANCE", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
