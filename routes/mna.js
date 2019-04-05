const fs = require("fs");

var express = require("express");
var router = express.Router();

const Mna = require("../models").MNA;

// const { attendanceRate } = require("../utils/attendanceRate.js");

// const fakeMnaList = JSON.parse(
//   fs.readFileSync(__dirname + "/../fakeData/fakeMnaList.json", "utf-8")
// );

// const fakePdfData = JSON.parse(
//   fs.readFileSync("./fakeData/fakePdfData.json", "utf-8")
// ).meetings;

router.get("", (req, res, next) => {
  Mna.getList()
    .then(result => {
      let mnaListData = result.map(mnaItem => ({
        mnaName: mnaItem.dataValues.MNA_NAME,
        party: "자유한국당",
        attendanceRate: 50,
        billCount: 21
      }));
      res.status(200).json(mnaListData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).setHeader(err);
    });
});

router.get("/:id", (req, res, next) => {
  Mna.findMna(req.params.id)
    .then(result => {
      let mnaData = result[0].dataValues;
      let mnaDataObj = {
        id: mnaData.MNA_ID,
        name: mnaData.MNA_NAME,
        chinesename: mnaData.MNA_HANJA,
        photo: mnaData.MNA_PHOTO,
        party_id: mnaData.PARTY_ID,
        local: "서울 동작구을",
        stdcomt: mnaData.STDCOMT_TEXT,
        phone: mnaData.MNA_PHONE,
        address: mnaData.MNA_ADDRESS,
        email: mnaData.MNA_EMAIL,
        mna_url: mnaData.MNA_URL,
        homepage: mnaData.MNA_HOMEPAGE,
        history: mnaData.MNA_HISTORY,
        stdcomtAttendanceRate: 0.88,
        stdcomtAttendanceRatePosition: 20,
        stdcomtBillSubmitCount: 20,
        stdcomtBillSubmitCountPosition: 20,
        billsPerCommittee: [
          { name: "법제사법위원회", value: 8 },
          { name: "교육위원회", value: 5 },
          { name: "환경노동위원회", value: 5 },
          { name: "보건복지위원회", value: 4 },
          { name: "행정안전위원회", value: 8 }
        ],
        billsPerStatus: [
          { name: "계류", value: 34 },
          { name: "대안반영폐기", value: 3 },
          { name: "원안가결", value: 3 }
        ]
      };
      res.status(200).json(mnaDataObj);
    })
    .catch(err => {
      console.log(err);
      res.status(500).setHeader(err);
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
