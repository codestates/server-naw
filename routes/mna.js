const fs = require("fs");

var express = require("express");
var router = express.Router();

const fakeMnaList = JSON.parse(
  fs.readFileSync(__dirname + "/../fakeData/fakeMnaList.json", "utf-8")
);

/* GET mna listing. */
router.get("/:id", function(req, res, next) {
  res.send(JSON.stringify(fakeMnaList[req.params.id]));
});

module.exports = router;
