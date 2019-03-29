const fs = require("fs");

const fakePdfData = JSON.parse(
  fs.readFileSync("./fakeData/fakePdfData.json", "utf-8")
);
const fakeMnaList = JSON.parse(
  fs.readFileSync("./fakeData/fakeMnaList.json", "utf-8")
);
const fakeDangList = JSON.parse(
  fs.readFileSync("./fakeData/fakeDangList.json", "utf-8")
);

module.exports.attendanceRate = id => {
  return {
    mainRate: 0.7,
    subRate: 0.9
  };
};
