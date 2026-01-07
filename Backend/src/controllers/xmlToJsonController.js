const { convertXmlToJson } = require("../services/xmlToJsonService");

const convertXML = async (req, res) => {
  try {
    
    const result = await convertXmlToJson();

    console.log("XML converted successfully");
    console.log("File details:", {
      jsonFileName: result.jsonFileName,
      path: result.jsonPath,
    });

    res.status(200).json({
      success: true,
      message: "XML converted to JSON",
      output: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  convertXML,
};
