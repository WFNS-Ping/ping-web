import { ApiResult } from "./types/apiResult";
type BaseRequest<T, V> = (params?: T) => Promise<ApiResult<V>>;
type SuccessResponse<V> = {
  code: "success";
  data: V;
};
type ErrorResponse<E = Error> = {
  code: "error";
  error: E;
};

type BaseResponse<V, E> = SuccessResponse<V> | ErrorResponse<E>;

export const requestHandler =
  <T, V, E = Error>(request: BaseRequest<T, V>) =>
  async (params?: T): Promise<BaseResponse<V, E>> => {
    try {
      const response = await request(params);
      return { code: "success", data: response.data };
    } catch (e) {
      return { code: "error", error: e as E };
    }
  };

export const fetchAPI = async <T, E = Error>(
  url: string,
  reqInit?: RequestInit,
  handleError?: (error: unknown) => ApiResult<T>
): Promise<BaseResponse<T, E>> => {
  try {
    console.log("reqInit", reqInit);
    const res = await fetch(url, reqInit);

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = (await res.json()) as T;
    console.log("res", data);
    return {
      code: "success",
      data: data,
    };
  } catch (error: unknown) {
    console.error(error);
    if (handleError) {
      return {
        code: "error",
        error: handleError(error) as E,
      };
    }
    return {
      code: "error",
      error: error as E,
    };
  }
};
