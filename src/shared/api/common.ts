import axios from "axios";
import { getAccessToken } from "../auth";

export const createAxiosInstanceWithToken = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(async (config: any) => {
    const accessToken = await getAccessToken();
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  });

  return instance;
};
