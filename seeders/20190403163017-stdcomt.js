"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "STDCOMT",
      [
        {
          STDCOMT_NAME: "4차 산업혁명 특별위원회"
        },
        {
          STDCOMT_NAME: "공공부문 채용비리 의혹과 관련된 국정조사특별위원회"
        },
        {
          STDCOMT_NAME: "과학기술정보방송통신위원회"
        },
        {
          STDCOMT_NAME: "교육위원회"
        },
        {
          STDCOMT_NAME: "국방위원회",
          COMM_CODE: "HA"
        },
        {
          STDCOMT_NAME: "국토교통위원회",
          COMM_CODE: "PC"
        },
        {
          STDCOMT_NAME: "국회운영위원회",
          COMM_CODE: "AA"
        },
        {
          STDCOMT_NAME: "기획재정위원회",
          COMM_CODE: "FD"
        },
        {
          STDCOMT_NAME: "남북경제협력 특별위원회"
        },
        {
          STDCOMT_NAME: "농림축산식품해양수산위원회",
          COMM_CODE: "JR"
        },
        {
          STDCOMT_NAME: "문화체육관광위원회"
        },
        {
          STDCOMT_NAME: "법제사법위원회",
          COMM_CODE: "BA"
        },
        {
          STDCOMT_NAME: "보건복지위원회",
          COMM_CODE: "MB"
        },
        {
          STDCOMT_NAME: "사법개혁 특별위원회"
        },
        {
          STDCOMT_NAME: "산업통상자원중소벤처기업위원회"
        },
        {
          STDCOMT_NAME: "에너지 특별위원회"
        },
        {
          STDCOMT_NAME: "여성가족위원회",
          COMM_CODE: "VT"
        },
        {
          STDCOMT_NAME: "예산결산특별위원회"
        },
        {
          STDCOMT_NAME: "외교통일위원회",
          COMM_CODE: "CI"
        },
        {
          STDCOMT_NAME: "윤리특별위원회"
        },
        {
          STDCOMT_NAME: "정무위원회",
          COMM_CODE: "TB"
        },
        {
          STDCOMT_NAME: "정보위원회",
          COMM_CODE: "TA"
        },
        {
          STDCOMT_NAME: "정치개혁 특별위원회"
        },
        {
          STDCOMT_NAME: "행정안전위원회",
          COMM_CODE: "DH"
        },
        {
          STDCOMT_NAME: "환경노동위원회",
          COMM_CODE: "DH"
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
