import { useState } from "react";
import {
  uploadXml,
  convertXmlToJson,
  downloadJson,
} from "../services/xmlApi";

const XmlConverter = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [converted, setConverted] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      setStatus("Please select an XML file !!");
      return;
    }

    try {
      setStatus("Uploading XML...");
      await uploadXml(file);
      setUploaded(true);
      setStatus("XML uploaded successfully !!");
    } catch {
      setStatus("Upload failed !!");
    }
  };

  const handleConvert = async () => {
    try {
      setStatus("Converting XML to JSON...");
      await convertXmlToJson();
      setConverted(true);
      setStatus("Conversion successful !!");
    } catch {
      setStatus("Conversion failed !!");
    }
  };

  const handleDownload = async () => {
    try {
      setStatus("Downloading JSON...");
      const response = await downloadJson();

      const blob = new Blob([response.data], {
        type: "application/json",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "output.json";
      link.click();

      setStatus("Download completed !!");
    } catch {
      setStatus("Download failed !!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 to-pink-600">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          XML → JSON Converter
        </h1>

        <input
          type="file"
          accept=".xml"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mb-4 text-sm text-gray-600
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-indigo-50 file:text-indigo-700
                     hover:file:bg-indigo-100"
        />

        <div className="flex flex-col gap-3">
          <button
            onClick={handleUpload}
            className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Upload XML
          </button>

          <button
            onClick={handleConvert}
            disabled={!uploaded}
            className={`py-2 rounded-md transition ${
              uploaded
                ? "bg-pink-600 hover:bg-pink-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Convert to JSON
          </button>

          <button
            onClick={handleDownload}
            disabled={!converted}
            className={`py-2 rounded-md transition ${
              converted
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Download JSON
          </button>
        </div>

        {status && (
          <p className="text-center mt-4 text-sm font-medium text-gray-700">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default XmlConverter;
