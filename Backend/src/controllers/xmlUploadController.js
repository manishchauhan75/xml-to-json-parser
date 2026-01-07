const path = require("path");

const uploadXMLController = async (req, res) => {
  const { file } = req;
  try {
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No XML file uploaded",
      });
    }

    console.log("XML file uploaded successfully");
    console.log("File details:", {
      originalName: file.originalname,
      fileName: file.filename,
      size: file.size,
      path: file.path,
    });

    return res.status(200).json({
      success: true,
      message: "XML file uploaded successfully",
      file: {
        originalName: req.file.originalname,
        fileName: req.file.filename,
        size: req.file.size,
        path: req.file.path,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "XML upload failed",
      error: error.message,
    });
  }
};

module.exports = {
  uploadXMLController,
};
