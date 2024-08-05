import { APIEndpoints } from "apis/apiEndPoints";
import { fetchAPI, requestHandler } from "apis/requestHandler";
import { ApiResult } from "apis/types/apiResult";

const { url, method } = APIEndpoints["sign-in"].list;

export const login = async (data: { userId: string; password: string }) => {
  console.log("시작");
  return fetchAPI<{ refreshToken: string; accessToken: string }>(url, {
    method,
    body: JSON.stringify(data),
  });
};
