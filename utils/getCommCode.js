const fs = require("fs");
const ProceedingInfoService = require("./ProceedingInfoService.js");
const serviceKey = fs.readFileSync(__dirname + "/../.publicAPIKey", "utf8");

let options = {
  host: `http://apis.data.go.kr/9710000/ProceedingInfoService`,
  endpoint: `/getConCommitSearch?`,
  query: {
    serviceKey: serviceKey,
    class_code: 2,
    comm_code: "AA" // 'AA~ZZ'
  }
};

// var optionsArray =

let charList = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

let comm_code_arr = [];
for (let i = 0; i < charList.length; i++) {
  for (let j = 0; j < charList.length; j++) {
    comm_code_arr.push(`${charList[i]}${charList[j]}`);
  }
}
// console.log(comm_code_arr.slice(0, 5));

var commCodeMap = comm_code_arr.map(char => () => {
  return new Promise((res, rej) => {
    ProceedingInfoService({
      host: `http://apis.data.go.kr/9710000/ProceedingInfoService`,
      endpoint: `/getLatestConInfoList?`,
      query: {
        serviceKey: serviceKey,
        class_code: 2,
        comm_code: char // 'AA~ZZ'
      }
    })
      .then(items => {
        // console.log(items);
        if (items) {
          res({
            STDCOMT_NAME: items[0].commName[0],
            COMM_CODE: char
          });
        } else {
          res(null);
        }
      })
      .catch(e => rej(e));
  });
});

// Promise.all(commCodeMap.slice(thReq, thReq + 15)

const sleep = time => {
  return new Promise((res, ref) => {
    setTimeout(() => {
      res("Send Request");
    }, time);
  });
};

(async () => {
  try {
    let comm_code_bag = [];
    for (let thReq = 0; thReq < commCodeMap.length; thReq++) {
      commCodeMap[thReq]().then(res => {
        comm_code_bag.push(res);
      });

      console.log(await sleep(500));
    }
    fs.writeFile(
      "result.json",
      JSON.stringify(comm_code_bag.filter(e => !!e), null, 2),
      err => {
        console.log("File write failed: ", err);
      }
    );
    return comm_code_bag;
  } catch (err) {
    console.log(err);
  }
})();
