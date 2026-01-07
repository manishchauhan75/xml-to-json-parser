const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "../../output/json");

const clearOldJson = (req, res, next) => {
  try {
    console.log("Clearing JSON from:", outputDir);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      return next();
    }

    const files = fs.readdirSync(outputDir);

    for (const file of files) {
      if (file.toLowerCase().endsWith(".json")) {
        fs.unlinkSync(path.join(outputDir, file));
      }
    }

    console.log(" Previous JSON files cleared");
    next();
  } catch (error) {
    console.error(" Failed to clear JSON files:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to clear old JSON files",
    });
  }
};

module.exports = clearOldJson;
