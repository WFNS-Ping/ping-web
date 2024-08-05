import { ServerEnv } from "./constants/serverEnv";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" && ServerEnv.mocking) {
    const { initMocks } = await import("./mocks/server");
    initMocks();
  }
}
