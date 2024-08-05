import { HttpResponseResolver, http } from "msw";

interface MakeHandler {
  path: string;
  method?: "get" | "post" | "put" | "delete" | "patch" | "head" | "options";
  resolver: HttpResponseResolver;
}

export const makeHandler = ({ path, resolver, method }: MakeHandler) => {
  return http[method ?? "get"](path, resolver);
};
