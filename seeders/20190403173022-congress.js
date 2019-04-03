"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "CONGRESS",
      [
        {
          CONGRESS_NAME: "제343회",
          START_DATE: "2016.06.07",
          END_DATE: "2016.07.06"
        },
        {
          CONGRESS_NAME: "제344회",
          START_DATE: "2016.07.19",
          END_DATE: "2016.07.27"
        },
        {
          CONGRESS_NAME: "제345회",
          START_DATE: "2016.08.16",
          END_DATE: "2016.08.31"
        },
        {
          CONGRESS_NAME: "제346회",
          START_DATE: "2016.09.01",
          END_DATE: "2016.12.09"
        },
        {
          CONGRESS_NAME: "제347회",
          START_DATE: "2016.12.12",
          END_DATE: "2016.12.31"
        },
        {
          CONGRESS_NAME: "제348회",
          START_DATE: "2017.01.09",
          END_DATE: "2017.01.20"
        },
        {
          CONGRESS_NAME: "제349회",
          START_DATE: "2017.02.01",
          END_DATE: "2017.03.02"
        },
        {
          CONGRESS_NAME: "제350회",
          START_DATE: "2017.03.03",
          END_DATE: "2017.04.01"
        },
        {
          CONGRESS_NAME: "제351회",
          START_DATE: "2017.05.29",
          END_DATE: "2017.06.27"
        },
        {
          CONGRESS_NAME: "제352회",
          START_DATE: "2017.07.04",
          END_DATE: "2017.07.22"
        },
        {
          CONGRESS_NAME: "제353회",
          START_DATE: "2017.08.18",
          END_DATE: "2017.08.31"
        },
        {
          CONGRESS_NAME: "제354회",
          START_DATE: "2017.09.01",
          END_DATE: "2017.12.09"
        },
        {
          CONGRESS_NAME: "제355회",
          START_DATE: "2017.12.11",
          END_DATE: "2017.12.29"
        },
        {
          CONGRESS_NAME: "제356회",
          START_DATE: "2018.01.30",
          END_DATE: "2018.02.28"
        },
        {
          CONGRESS_NAME: "제357회",
          START_DATE: "2018.03.05",
          END_DATE: "2018.03.05"
        },
        {
          CONGRESS_NAME: "제358회",
          START_DATE: "2018.03.12",
          END_DATE: "2018.03.30"
        },
        {
          CONGRESS_NAME: "제359회",
          START_DATE: "2018.04.02",
          END_DATE: "2018.05.01"
        },
        {
          CONGRESS_NAME: "제360회",
          START_DATE: "2018.05.02",
          END_DATE: "2018.05.31"
        },
        {
          CONGRESS_NAME: "제361회",
          START_DATE: "2018.06.01",
          END_DATE: "2018.06.30"
        },
        {
          CONGRESS_NAME: "제362회",
          START_DATE: "2018.07.13",
          END_DATE: "2018.07.26"
        },
        {
          CONGRESS_NAME: "제363회",
          START_DATE: "2018.08.16",
          END_DATE: "2018.08.31"
        },
        {
          CONGRESS_NAME: "제364회",
          START_DATE: "2018.09.01",
          END_DATE: "2018.12.09"
        },
        {
          CONGRESS_NAME: "제365회",
          START_DATE: "2018.12.17",
          END_DATE: "2019.01.15"
        },
        {
          CONGRESS_NAME: "제366회",
          START_DATE: "2019.01.19",
          END_DATE: "2019.02.17"
        },
        {
          CONGRESS_NAME: "제367회",
          START_DATE: "2019.03.07",
          END_DATE: "2019.04.05"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
