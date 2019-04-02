const fs = require("fs");
const http = require("http");
const querystring = require("querystring").stringify;
const unescape = require("querystring").unescape;
const parseString = require("xml2js").parseString;
const serviceKey = fs.readFileSync(__dirname + "/../.publicAPIKey", "utf8");

let options = {
  host: `http://apis.data.go.kr/9710000/ProceedingInfoService`,
  endpoint: `/getSummaryAttenInfoList?`,
  query: {
    serviceKey: serviceKey,
    numOfRows: "10",
    pageNo: "1",
    confer_num: "045414"
  }
};

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
          console.log(res);
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
                console.log(result);
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

getSummaryAttenInfo(options)
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e);
  });

module.export = getSummaryAttenInfo;
