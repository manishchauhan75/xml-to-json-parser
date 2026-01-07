const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

const uploadDir = path.join(__dirname, "../../upload/xml");
const outputDir = path.join(__dirname, "../../output/json");

const convertXmlToJson = async () => {

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(uploadDir).filter(f =>
    f.toLowerCase().endsWith(".xml")
  );

  if (files.length === 0) {
    throw new Error("No XML file found in upload/xml folder");
  }

  const latestXmlFile = files.sort(
    (a, b) =>
      fs.statSync(path.join(uploadDir, b)).mtime -
      fs.statSync(path.join(uploadDir, a)).mtime
  )[0];

  const xmlPath = path.join(uploadDir, latestXmlFile);

  const xmlData = fs.readFileSync(xmlPath, "utf-8");

  const parser = new xml2js.Parser({
    explicitArray: false,
    mergeAttrs: true,
  });

  const jsonResult = await parser.parseStringPromise(xmlData);

  const jsonFileName = latestXmlFile.replace(/\.xml$/i, ".json");
  const jsonPath = path.join(outputDir, jsonFileName);

  fs.writeFileSync(jsonPath, JSON.stringify(jsonResult, null, 2));

  return {
    jsonFileName,
    jsonPath,
  };
};

module.exports = {
  convertXmlToJson,
};
