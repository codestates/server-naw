const fs = require("fs");

// mna.js에서 다음과 같으리라 가정.
// const fakePdfData = JSON.parse(
//   fs.readFileSync("./fakeData/fakePdfData.json", "utf-8")
// );
// const fakeMnaList = JSON.parse(
//   fs.readFileSync("./fakeData/fakeMnaList.json", "utf-8")
// );
// const fakeDangList = JSON.parse(
//   fs.readFileSync("./fakeData/fakeDangList.json", "utf-8")
// );

const rateCalculator = (name, arrays) => {
  return (
    arrays.filter(item => item.onSeat.includes(name)).length / arrays.length
  );
};

// mnaName: Number, fakeMnaList: Array, fakePdfData: Array
module.exports.attendanceRate = (mna, meetingList) => {
  // console.log(mna);

  let rateForCongress = rateCalculator(
    mna.name,
    meetingList.filter(congress => {
      return congress.meetingKinds === 0;
    })
  );

  // This gonna be multiple
  let rateForStandingCongress = rateCalculator(
    mna.name,
    meetingList.filter(congress => {
      return congress.meetingKinds === 4;
    })
  );

  return {
    rateForCongress: rateForCongress,
    rateForStandingCongress: rateForStandingCongress
  };
};
