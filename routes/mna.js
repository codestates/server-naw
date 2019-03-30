const fs = require("fs");

var express = require("express");
var router = express.Router();

const { attendanceRate } = require("../utils/attendanceRate.js");

const fakeMnaList = JSON.parse(
  fs.readFileSync(__dirname + "/../fakeData/fakeMnaList.json", "utf-8")
);

const fakePdfData = JSON.parse(
  fs.readFileSync("./fakeData/fakePdfData.json", "utf-8")
).meetings;

/* GET mna listing. */
router.get("/:id", function(req, res, next) {
  var getMna = fakeMnaList.filter(mna => {
    return mna.id === +req.params.id;
  })[0];

  Object.assign(getMna, attendanceRate(getMna, fakePdfData));
  if (getMna) {
    res
      .status(200)
      .type("json")
      .send(JSON.stringify(getMna));
    return;
  }

  res.status(403).end();
});

module.exports = router;
