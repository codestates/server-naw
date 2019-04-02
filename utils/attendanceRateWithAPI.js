const fs = require("fs");
const http = require("http");
const parseString = require("xml2js").parseString;
const ServiceKey = fs.readFileSync(__dirname + "/../.publicAPIKey", "utf8");

let numOfRows = "10";
let pageNo = "1";
let confer_num = "045414";

let PublicAPI = `http://apis.data.go.kr/9710000/ProceedingInfoService`;
let getSummaryAttenInfoUrl = `/getSummaryAttenInfoList`;
let getSummaryAttenInfoQuerystring = `?ServiceKey=${ServiceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&confer_num=${confer_num}`;

const getSummaryAttenInfo = () => {
  return new Promise((resolve, reject) => {
    http
      .get(
        PublicAPI + getSummaryAttenInfoUrl + getSummaryAttenInfoQuerystring,
        res => {
          const { statusCode } = res;
          const contentType = res.headers["content-type"];

          if (statusCode !== 200) {
            reject(
              new Error("Request Failed.\n" + `Status Code: ${statusCode}`)
            );
          } else if (!/^application\/xml/.test(contentType)) {
            reject(
              new Error(
                "Invalid content-type.\n" +
                  `Expected application/xml but received ${contentType}`
              )
            );
          } else if (false) {
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
        console.log(`Got error: e.message`);
      });
  });
};

getSummaryAttenInfo().then(res => {
  console.log(res);
});
