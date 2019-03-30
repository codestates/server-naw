const fs = require("fs");

// const fakePdfData = JSON.parse(
//   fs.readFileSync("./fakeData/fakePdfData.json", "utf-8")
// );
// const fakeMnaList = JSON.parse(
//   fs.readFileSync("./fakeData/fakeMnaList.json", "utf-8")
// );
// const fakeDangList = JSON.parse(
//   fs.readFileSync("./fakeData/fakeDangList.json", "utf-8")
// );

// mnaName: string ,
module.exports.attendanceRate = (mna_id, fakeMnaList, fakePdfData) => {
  return {
    rateForCongress: 0.7,
    rateForStandingCongress: 0.9
  };
};
