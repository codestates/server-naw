"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "PARTY",
      [
        {
          PARTY_NAME: "더불어민주당",
          PARTY_LOGO:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_of_the_Minjoo_Party_of_Korea.svg/1920",
          PARTY_COLOR: "#025AAA",
          PARTY_LINK: "http://theminjoo.kr"
        },
        {
          PARTY_NAME: "자유한국당",
          PARTY_LOGO:
            "http://www.libertykoreaparty.kr/images/introduce/logo/colorset.gif",
          PARTY_COLOR: "#C9151E",
          PARTY_LINK: "http://www.libertykoreaparty.kr"
        },
        {
          PARTY_NAME: "바른미래당",
          PARTY_LOGO: "http://bareunmirae.kr/images/content/logo_img1_1.jpg",
          PARTY_COLOR: "#00B7B5",
          PARTY_LINK: "http://bareunmirae.kr"
        },
        {
          PARTY_NAME: "민주평화당",
          PARTY_LOGO:
            "http://peaceparty.or.kr/theme/peace_party/img/logo_fix2.png",
          PARTY_COLOR: "#78b600",
          PARTY_LINK: "http://peaceparty.or.kr"
        },
        {
          PARTY_NAME: "정의당",
          PARTY_LOGO:
            "https://www.justice21.org/newhome/asset/images/about/logo_sign2_01.gif",
          PARTY_COLOR: "#FFCB08",
          PARTY_LINK: "https://www.justice21.org"
        },
        {
          PARTY_NAME: "무소속",
          PARTY_LOGO: null,
          PARTY_COLOR: "#808080",
          PARTY_LINK: null
        },
        {
          PARTY_NAME: "민중당",
          PARTY_LOGO:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Logo_of_the_Minjung_Party.svg/330px-Logo_o",
          PARTY_COLOR: "#EB5B04",
          PARTY_LINK: "http://minjungparty.com"
        },
        {
          PARTY_NAME: "대한애국당",
          PARTY_LOGO:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_of_the_Korean_Patriots_Party.svg/1920",
          PARTY_COLOR: "#092C66",
          PARTY_LINK: "http://gkpp.or.kr"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("PARTY", null, {});
  }
};
