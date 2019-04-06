"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "BILL",
      [
        {
          BILL_DATE: "2019-03-29",
          BILL_NAME:
            "수목원·정원의 조성 및 진흥에 관한 법률 일부개정법률안(박완주의원 등 10인)",
          BILL_primaryLawMaker: 104,
          // {
          //   mnaId: 104,
          //   name: "박완주",
          //   chinesename: "朴完柱",
          //   party: {
          //     id: 1,
          //     name: "더불어민주당",
          //     color: "#FFCB08"
          //   }
          // },
          BILL_committee: "농림축산식품해양수산위원회",
          BILL_status: "위원회 심사"
        },
        {
          BILL_DATE: "2019-03-29",
          BILL_NAME:
            "신용정보의 이용 및 보호에 관한 법률 일부개정법률안(제윤경의원 등 10인)",
          BILL_primaryLawMaker: 258,
          //  {
          //   mnaId: 123,
          //   name: "제윤경",
          //   chinesename: "諸閏景",
          //   party: {
          //     id: 1,
          //     name: "더불어민주당",
          //     color: "#FFCB08"
          //   }
          // },
          BILL_committee: "정무위원회",
          BILL_status: "위원회 심사"
        },
        {
          BILL_DATE: "2019-03-29",
          BILL_NAME:
            "수목원·정원의 조성 및 진흥에 관한 법률 일부개정법률안(박완주의원 등 10인)",
          BILL_primaryLawMaker: 104,
          // {
          //   mnaId: 123,
          //   name: "박완주",
          //   chinesename: "朴完柱",
          //   party: {
          //     id: 1,
          //     name: "더불어민주당",
          //     color: "#FFCB08"
          //   }
          // },
          BILL_committee: "농림축산식품해양수산위원회",
          BILL_status: "위원회 심사"
        },
        {
          BILL_DATE: "2019-04-04",
          BILL_NAME: "건설기계관리법 일부개정법률안(이헌승의원 등 14인) ",
          BILL_primaryLawMaker: 224,
          // {
          //   mnaId: 123,
          //   name: "이헌승",
          //   chinesename: "李憲昇",
          //   party: {
          //     id: 2,
          //     name: "자유한국당",
          //     color: "#C9151E"
          //   }
          // },
          BILL_committee: "국토교통위원회",
          BILL_status: "위원회 심사"
        },
        {
          BILL_DATE: "2019-03-29",
          BILL_NAME: "헌법재판소법 일부개정법률안(정인화의원 등 12인)",
          BILL_primaryLawMaker: 252,
          // {
          //   mnaId: 123,
          //   name: "정인화",
          //   chinesename: "鄭仁和",
          //   party: {
          //     id: 4,
          //     name: "민주평화당",
          //     color: "#78b600"
          //   }
          // },
          BILL_committee: "법제사법위원회",
          BILL_status: "위원회 심사"
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
