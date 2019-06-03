const fs = require("fs");
const PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

// pdfParser.on("pdfParser_dataError", errData =>
//   console.error(errData.parserError)
// );
// pdfParser.on("pdfParser_dataReady", pdfData => {
//   fs.writeFile(
//     "./F1040EZ.fields.json",
//     JSON.stringify(pdfParser.getAllFieldsTypes())
//   );
// });

const pdfFilePath = "./pdf/국회회의록_20대_367회_1차_외교통일위원회.PDF";

const getPdfObj = pdfFilePath => {
  return new Promise((res, rej) => {
    fs.readFile(pdfFilePath, "utf8", (err, pdfBuffer) => {
      if (err) {
        rej(err);
        return;
      }
      pdfParser.on("pdfParser_dataReady", pdfData => {
        fs.writeFile("./wtf.json", JSON.stringify(pdfData));
      });
      pdfParser.parseBuffer(pdfBuffer);
      res(pdfBuffer);
    });
  });
};

// getPdfObj(pdfFilePath);

getPdfObj(pdfFilePath)
  .then(pdfBuffer => {
    return JSON.stringify(pdfBuffer).toString();
  })
  .then(pdf => {
    // console.log(pdf);
  })
  .catch(e => {
    console.log(e);
  });
// pdfParser.on("pdfParser_dataError", errData =>
//   console.error(errData.parserError)
// );
// pdfParser.on("pdfParser_dataReady", pdfData => {
//   fs.writeFile("./F1040EZ.json", JSON.stringify(pdfData));
// });
// pdfParser.on("pdfParser_dataReady", pdfData => {
//   fs.writeFile("./F1040EZ.txt", pdfParser.getRawTextContent());
// });

// pdfParser.loadPDF("./pdf/국회회의록_20대_367회_1차_외교통일위원회.PDF");
