import { STRAPI_API } from "../constant";

export default class StrapiClient {
  constructor() {}

  async fetchData(path) {
    const requestUrl = this._getStrapiURL(path);
    console.log(requestUrl);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }

  _getStrapiURL(path = "") {
    return `${STRAPI_API}${path}`;
  }
}
