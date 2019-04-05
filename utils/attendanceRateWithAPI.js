const fs = require("fs");
const http = require("http");
const querystring = require("querystring").stringify;
const unescape = require("querystring").unescape;
const parseString = require("xml2js").parseString;
const serviceKey = fs.readFileSync(__dirname + "/../.publicAPIKey", "utf8");

let confer = [
  "049040",
  "048996",
  "049044",
  "048984",
  "049028",
  "049060",
  "049029",
  "048993",
  "049010",
  "049004",
  "049061",
  "049051",
  "049034",
  "049033",
  "049052",
  "049016",
  "049043",
  "049032",
  "049005",
  "049056",
  "049030",
  "048997",
  "048991",
  "049053",
  "049013",
  "048995",
  "049039",
  "049017",
  "048990",
  "049031",
  "049022",
  "049011",
  "049059",
  "049042",
  "049037",
  "049023",
  "049001",
  "049003",
  "049000",
  "048981",
  "049027",
  "049007",
  "049006",
  "048987",
  "048979"
];

let conferArr = [];
for (let i = 0; i < confer.length; i++) {
  conferArr.push({
    host: `http://apis.data.go.kr/9710000/ProceedingInfoService`,
    endpoint: `/getSummaryAttenInfoList?`,
    query: {
      serviceKey: serviceKey,
      numOfRows: "10",
      pageNo: "1",
      confer_num: confer[i]
    }
  });
}
let options = conferArr[0];

// let options = {
//   host: `http://apis.data.go.kr/9710000/ProceedingInfoService`,
//   endpoint: `/getSummaryAttenInfoList?`,
//   query: {
//     serviceKey: serviceKey,
//     numOfRows: "10",
//     pageNo: "1",
//     confer_num: conferArr[i]
//   }
// };

async function writeFile(filename, body) {
  return new Promise((resolve, reject) => {
    // TODO
    fs.writeFile(filename, body, err => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

async function writeSourceListFile(body) {
  // console.log(__dirname + "../comm/data.txt");
  return writeFile("./data.txt", body);
}

const getSummaryAttenInfo = options => {
  return new Promise((resolve, reject) => {
    http
      .get(
        options.host +
          options.endpoint +
          querystring(options.query, null, null, {
            encodeURIComponent: e => e
          }),
        res => {
          const { statusCode } = res;
          const contentType = res.headers["content-type"];

          if (statusCode !== 200) {
            reject(
              new Error("Request Failed.\n" + `Status Code: ${statusCode}`)
            );
          } else if (!/^(application|text)\/xml/.test(contentType)) {
            reject(
              new Error(
                "Invalid content-type.\n" +
                  `Expected application/xml but received ${contentType}`
              )
            );
          }

          res.setEncoding("utf8");
          let rawData = "";
          res.on("data", chunk => {
            rawData += chunk;
          });
          res.on("end", () => {
            try {
              parseString(rawData, (err, result) => {
                let apiStatus = result.response.header[0].resultCode[0];
                if (err) {
                  reject(err);
                  return;
                } else if (apiStatus !== "00") {
                  reject(new Error("Server is lazy: Code: ", apiStatus));
                }
                resolve(result.response.body[0].items[0].item);
              });
            } catch (e) {
              reject(e);
            }
          });
        }
      )
      .on("error", e => {
        console.log(`Got error: ${e.message}`);
      });
  });
};

(async () => {
  let allArr = [];
  try {
    let count = 0;
    for (let j = 0; j < conferArr.length; j++) {
      let getAtten = await getSummaryAttenInfo(conferArr[j])
        .then(res => {
          for (let i = 0; i < res.length; i++) {
            console.log(conferArr[j]);
            res[i]["COMM_ID"] = [conferArr[j].query.confer_num];
          }
          return res;
        })
        .then(res => {
          let arr = [];
          for (let i = 0; i < res.length; i++) {
            arr.push(res[i]);
          }
          return arr;
        })
        .then(arr => {
          allArr.push(JSON.stringify(arr));
        });
    }
    writeSourceListFile(JSON.stringify(allArr));
  } catch (err) {
    console.log(err);
  }
})();

module.export = getSummaryAttenInfo;
