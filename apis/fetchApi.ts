import { ApiResult } from "./types/apiResult";
export const fetchAPI = async <T>(
  url: string,
  reqInit?: RequestInit,
  handleError?: (error: unknown) => ApiResult<T>
): Promise<ApiResult<T>> => {
  try {
    const res = await fetch(url, reqInit);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = (await res.json()) as T;
    return {
      data: data,
      code: "success",
    };
  } catch (error: unknown) {
    console.error(error);
    if (handleError) {
      return handleError(error);
    }
    return {
      code: "error",
      data: null as unknown as T,
      message: "서버 에러가 발생했습니다. 다시 시도해주세요.",
    };
  }
};
