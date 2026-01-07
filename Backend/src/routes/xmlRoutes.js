const express = require("express");
const { uploadXMLController } = require("../controllers/xmlUploadController");
const uploadXML = require("../middleware/xmlUploadMiddleware");
const { convertXML } = require("../controllers/xmlToJsonController");
const clearOldXml = require("../middleware/clearOldXmlFileMiddleware");
const clearOldJson = require("../middleware/clearOldJsonFileMiddleware");
const { downloadJSON } = require("../controllers/jsonFileDownloadController");

const router = express.Router();

// Upload XML file
router.post(
    "/upload",
    clearOldXml,
    uploadXML.single("xmlFile"), 
    uploadXMLController
    );

// Convert XML to JSON
router.post(
    "/convert",
    clearOldJson, 
    convertXML
    );

// Download JSON file
router.get(
    "/download", 
    downloadJSON
    );

module.exports = router;
