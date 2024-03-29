import { getToken } from "@/utils";
import { message } from "ant-design-vue";
import axios, { type AxiosError, type AxiosRequestConfig } from "axios";
const APP_SURVEY_API_URL = "http://localhost:5000/api/";
// const APP_SURVEY_API_URL = "https://aesthetic-salamander-f07654.netlify.app/";
class Axios {
  private _baseUrl = APP_SURVEY_API_URL;

  private _instance = axios.create({
    baseURL: this._baseUrl,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  });

  constructor() {
    this._instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (config.headers) {
          config.headers["x-auth-token"] = getToken();
        }
        return config;
      },
      (e) => {
        return Promise.reject(e);
      }
    );
    this._instance.interceptors.response.use(
      (response) => response,
      (error) => {
        const data: any = (error as AxiosError).response?.data;
        message.error(data.message);
        return Promise.reject(data);
      }
    );
  }

  async post(config: any) {
    return await this._instance.post(config.url, config.data);
  }
  async get(config: any) {
    return await this._instance.get(config.url, config.data);
  }
  async put(config: any) {
    return await this._instance.put(config.url, config.data);
  }
  async delete(config: any) {
    return await this._instance.delete(config.url, config.data);
  }
}
const service = new Axios();
export default function useAxios() {
  return service;
}
