import { assertValue } from "@/utils/assertValue";

export const ServerEnv = {
  backendUrl: assertValue(
    process.env.NEXT_PUBLIC_API_URL,
    "API_URL is not defined"
  ),
  mocking: process.env.MOCKING === "true",
};
