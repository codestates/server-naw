const fs = require("fs");

var express = require("express");
const sequelize = require("sequelize");
var router = express.Router();

const Party = require("../models").PARTY;
const Mna = require("../models").MNA;

// const { attendanceRate } = require("../utils/attendanceRate.js");

// const fakeMnaList = JSON.parse(
//   fs.readFileSync(__dirname + "/../fakeData/fakeMnaList.json", "utf-8")
// );

const fakeMnaListperParty = [
  {
    name: "우상호",
    party: "더불어민주당",
    partyColor: "#025AAA",
    attendanceRate: 0.99,
    billCount: 20
  },
  {
    name: "나경원",
    party: "자유한국당",
    partyColor: "#C9151E",
    attendanceRate: 0.98,
    billCount: 19
  },
  {
    name: "김관영",
    party: "바른미래당",
    partyColor: "#00B7B5",
    attendanceRate: 0.97,
    billCount: 18
  },
  {
    name: "박지원",
    party: "민주평화당",
    partyColor: "#78b600",
    attendanceRate: 0.96,
    billCount: 17
  },
  {
    name: "심상정",
    party: "정의당",
    partyColor: "#FFCB08",
    attendanceRate: 0.95,
    billCount: 16
  }
];

// const fakePdfData = JSON.parse(
//   fs.readFileSync("./fakeData/fakePdfData.json", "utf-8")
// ).meetings;

router.get("", (req, res, next) => {
  Party.findAll({
    include: [{ model: Mna, as: "MNA" }],
    attributes: [
      "PARTY_ID",
      "PARTY_NAME",
      "PARTY_LOGO",
      "PARTY_COLOR",
      "PARTY_LINK",
      [sequelize.fn("COUNT", sequelize.col("MNA.MNA_ID")), "numberOfMembers"]
    ],
    group: ["PARTY.PARTY_ID"]
  })
    .then(result => {
      let partyData = {};
      partyData.parties = result.map(partyItem => {
        return {
          id: partyItem.PARTY_ID,
          name: partyItem.PARTY_NAME,
          logo: partyItem.PARTY_LOGO,
          color: partyItem.PARTY_COLOR,
          homepage: partyItem.PARTY_LINK,
          numberOfMembers: partyItem.dataValues.numberOfMembers,
          attendanceRate: null,
          billSubmitCount: null
        };
      });
      return partyData;
    })
    .then(partyData => {
      Mna.findAll().then(result => {
        // partyData.mnaList = result.map(mnaItem => {});
        partyData.mnaList = fakeMnaListperParty;
        res.status(200).json(partyData);
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).end(err);
    });
});

/* GET mna listing. */

// router.get("/:id", function(req, res, next) {
//   var getMna = fakeMnaList.filter(mna => {
//     Mna.findById(+req.params.id).then(mna => console.log(mna));
//     return mna.id === +req.params.id;
//   })[0];

//   Object.assign(getMna, attendanceRate(getMna, fakePdfData));
//   if (getMna) {
//     res
//       .status(200)
//       .type("json")
//       .send(JSON.stringify(getMna));
//     return;
//   }

//   res.status(403).end();
// });

module.exports = router;
