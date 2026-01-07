const fs = require("fs");
const { getLatestJsonFile } = require("../services/xmlDownloadService");

const downloadJSON = (req, res) => {
  try {
    const { filePath, fileName } = getLatestJsonFile();

    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error("Download failed:", err);
        return;
      }

      // delete file AFTER successful download
      fs.unlink(filePath, (deleteErr) => {
        if (deleteErr) {
          console.error("Failed to delete JSON file:", deleteErr);
        } else {
          console.log(`JSON file deleted: ${fileName}`);
        }
      });
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  downloadJSON,
};
