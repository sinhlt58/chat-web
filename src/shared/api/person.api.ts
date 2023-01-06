import { BASE_URL_PERSON_SERVICE } from "../constant";
import { createAxiosInstanceWithToken } from "./common";

export const axiosInstance = createAxiosInstanceWithToken(
  BASE_URL_PERSON_SERVICE
);

export async function getUserProfile() {
  return axiosInstance.get("/");
}

export const personApi = {
  getUserProfile,
};
