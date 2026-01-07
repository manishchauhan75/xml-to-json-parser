const fs = require("fs");
const path = require("path");

const uploadDir = path.join(__dirname, "../../upload/xml");

const clearOldXml = (req, res, next) => {
  try {
    
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
      return next();
    }

    const files = fs.readdirSync(uploadDir);

    for (const file of files) {
      const filePath = path.join(uploadDir, file);

      // delete only XML files
      if (file.endsWith(".xml")) {
        fs.unlinkSync(filePath);
      }
    }

    console.log("Previous XML files cleared");
    next();
  } catch (error) {
    console.error("Failed to clear XML files:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to clear old XML files",
    });
  }
};

module.exports = clearOldXml;
