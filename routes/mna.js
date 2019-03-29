const fs = require("fs");

var express = require("express");
var router = express.Router();

const fakeMnaList = JSON.parse(
  fs.readFileSync(__dirname + "/../fakeData/fakeMnaList.json", "utf-8")
);

/* GET mna listing. */
router.get("/:id", function(req, res, next) {
  var getMna = fakeMnaList.filter(guy => {
    return guy.id === +req.params.id;
  })[0];

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
