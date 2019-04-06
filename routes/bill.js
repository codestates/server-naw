const fs = require("fs");

var express = require("express");
var router = express.Router();

const Bill = require("../models").BILL;
const Mna = require("../models").MNA;
const Party = require("../models").PARTY;

// const { attendanceRate } = require("../utils/attendanceRate.js");

// const fakeMnaList = JSON.parse(
//   fs.readFileSync(__dirname + "/../fakeData/fakeMnaList.json", "utf-8")
// );

// const fakePdfData = JSON.parse(
//   fs.readFileSync("./fakeData/fakePdfData.json", "utf-8")
// ).meetings;

router.get("", (req, res, next) => {
  Bill.findAll({
    include: [{ model: Mna, require: true, as: "MNA" }]
  })
    .then(result => {
      console.log(result.dataValues);
      let billData = result.map(bill => {
        return {
          id: bill.BILL_ID,
          date: bill.BILL_DATE,
          name: bill.BILL_NAME,
          primaryLawMakerName: bill.MNA.MNA_NAME,
          committee: bill.BILL_committee,
          status: bill.BILL_status
        };
      });
      res.status(200).json(billData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end(err);
    });
});

router.get("/:id", (req, res, next) => {
  Bill.findOne({
    include: [{ model: Mna, require: true, as: "MNA" }],
    attributes: ["BILL_ID", "BILL_NAME", "BILL_committee", "BILL_status"],
    where: { BILL_ID: +req.params.id }
  })
    .then(result => {
      res.status(200).json({
        billId: result[0].BILL_ID,
        date: result[0].BILL_NAME,
        primaryLawMakerName: result[0].MNA.MNA_NAME,
        committee: result[0].BILL_committee,
        status: result[0].BILL_status,
        lawMakers: null,
        summary: null
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
