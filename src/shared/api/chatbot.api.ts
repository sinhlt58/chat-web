import { BASE_URL_CHATBOT_SERVICE } from "../constant";
import { createAxiosInstanceWithToken } from "./common";

export const axiosInstance = createAxiosInstanceWithToken(
  BASE_URL_CHATBOT_SERVICE
);

export async function getChatHistory() {}
