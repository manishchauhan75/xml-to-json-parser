const fs = require("fs");
const path = require("path");

const getLatestJsonFile = () => {
  const jsonDir = path.join(__dirname, "../../output/json");

  if (!fs.existsSync(jsonDir)) {
    throw new Error("Output folder not found");
  }

  const files = fs.readdirSync(jsonDir).filter((file) =>
    file.toLowerCase().endsWith(".json")
  );

  if (files.length === 0) {
    throw new Error("No JSON file found");
  }

  // ✅ pick latest JSON file
  const latestJson = files.sort(
    (a, b) =>
      fs.statSync(path.join(jsonDir, b)).mtime -
      fs.statSync(path.join(jsonDir, a)).mtime
  )[0];

  const filePath = path.join(jsonDir, latestJson);

  return {
    filePath,
    fileName: latestJson,
  };
};

module.exports = {
  getLatestJsonFile,
};
