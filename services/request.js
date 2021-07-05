import axios from "axios";
import { PRAVESH_API, NIYUKTI_API, SUJHAV_API } from "../constant";

export const httpRequest = async ({ service, method, headers, body, endPoint }) => {
  let returnData = {};
  let baseUrl;
  switch (service) {
    case "PRAVESH":
      baseUrl = PRAVESH_API;
      break;
    case "NIYUKTI":
      baseUrl = NIYUKTI_API;
      break;
    case "SUJHAV":
      baseUrl = SUJHAV_API;
      break;
    default:
      baseUrl = "";
  }
  const options = {
    url: endPoint,
    method: method,
    headers: headers,
    body: body,
    baseURL: baseUrl,
  };
  console.log("wenkflncref", options);
  await axios(options)
    .then((res) => {
      returnData.statusCode = res.status;
      returnData.data = res.data;
    })
    .catch((err) => {
      returnData.statusCode = err.response.status;
      returnData.data = err.response;
      returnData.errorMessage = err.message;
    });
  return returnData;
};
