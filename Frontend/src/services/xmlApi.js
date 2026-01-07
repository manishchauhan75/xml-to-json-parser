import axios from "axios";
import { CONVERT_XML_TO_JSON_ENDPOINT, DOWNLOAD_ENDPOINT, UPLOAD_ENDPOINT } from "../../ApiEndPoint";


export const uploadXml = (file) => {
  const formData = new FormData();
  formData.append("xmlFile", file);

  return axios.post(UPLOAD_ENDPOINT, formData);
};

export const convertXmlToJson = () => {
  return axios.post(CONVERT_XML_TO_JSON_ENDPOINT);
};

export const downloadJson = () => {
  return axios.get(DOWNLOAD_ENDPOINT, {
    responseType: "blob",
  });
};
