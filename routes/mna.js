const fs = require("fs");

var express = require("express");
var router = express.Router();

const Mna = require("../models").MNA;
const Party = require("../models").PARTY;
const Bill = require("../models").BILL;
const Local = require("../models").LOCAL;
const Stdcomt = require("../models").STDCOMT;

const random = require("mathjs").random;
let gaussian = require("gaussian")(0.6, 1);

// const { attendanceRate } = require("../utils/attendanceRate.js");

// const fakeMnaList = JSON.parse(
//   fs.readFileSync(__dirname + "/../fakeData/fakeMnaList.json", "utf-8")
// );

// const fakePdfData = JSON.parse(
//   fs.readFileSync("./fakeData/fakePdfData.json", "utf-8")
// ).meetings;

router.get("", (req, res, next) => {
  Mna.findAll({
    include: [{ model: Party, require: true, as: "PARTY" }]
  })
    .then(result => {
      let mnaListData = result.map(mnaItem => {
        var randomN = random() * 2;
        return {
          id: mnaItem.dataValues.MNA_ID,
          mnaName: mnaItem.dataValues.MNA_NAME,
          party: mnaItem.PARTY.PARTY_NAME,
          attendanceRate: gaussian.pdf(randomN) / gaussian.pdf(0.6) - 0.2,
          billCount: Number.parseInt(21 * randomN)
        };
      });
      res.status(200).json(mnaListData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end(err);
    });
});

router.get("/:id", (req, res, next) => {
  let randomN = random() * 2;
  Mna.findAll({
    include: [
      { model: Local, require: true, as: "LOCAL" },
      { model: Bill, require: true, as: "BILL" },
      { model: Stdcomt, require: true, as: "STDCOMT" },
      { model: Party, require: true, as: "PARTY" }
    ],
    where: [{ MNA_ID: +req.params.id }]
  })
    // Mna.findMna(req.params.id)
    .then(result => {
      console.log(result);
      let mnaData = result[0].dataValues;
      let mnaDataObj = {
        id: mnaData.MNA_ID,
        name: mnaData.MNA_NAME,
        chinesename: mnaData.MNA_HANJA,
        photo: mnaData.MNA_PHOTO,
        party: {
          id: mnaData.PARTY.PARTY_ID,
          name: mnaData.PARTY.PARTY_NAME,
          color: mnaData.PARTY.PARTY_COLOR,
          logo: mnaData.PARTY.PARTY_LOGO
        },
        local: mnaData.LOCAL.LOCAL_NAME,
        stdcomt: mnaData.STDCOMT_TEXT,
        phone: mnaData.MNA_PHONE,
        address: mnaData.MNA_ADDRESS,
        email: mnaData.MNA_EMAIL,
        mna_url: mnaData.MNA_URL,
        homepage: mnaData.MNA_HOMEPAGE,
        history: mnaData.MNA_HISTORY,
        stdcomtAttendanceRate: gaussian.pdf(randomN) / gaussian.pdf(0.6) - 0.2,
        stdcomtAttendanceRatePosition: Number.parseInt(
          100 * (gaussian.pdf(randomN) / gaussian.pdf(0.6) - 0.2)
        ),
        stdcomtBillSubmitCount: Number.parseInt(
          21 * (gaussian.pdf(randomN) / gaussian.pdf(0.6) - 0.2)
        ),
        stdcomtBillSubmitCountPosition: Number.parseInt(
          20 * (gaussian.pdf(randomN) / gaussian.pdf(0.6) - 0.2)
        ),
        billsPerCommittee: mnaData.STDCOMT.map(stdcomt => {
          return {
            name: stdcomt.STDCOMT_NAME,
            value: Number.parseInt(
              10 * (gaussian.pdf(randomN) / gaussian.pdf(0.6) - 0.2)
            )
          };
        }),
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
