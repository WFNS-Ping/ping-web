import { ServerEnv } from "constants/serverEnv";

const baseUrl = ServerEnv.backendUrl;

export const APIEndpoints = {
  "sign-in": {
    list: {
      method: "post",
      url: `${baseUrl}/sign-in`,
    },
  },
} as const;
