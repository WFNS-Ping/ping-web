export interface ApiResult<T> {
  data: T;
  message?: string;
  code: "success" | "error";
}
