import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

export function initMocksBrowser() {
  console.log("🚧 MSW와 함께 브라우저에서 실행됩니다.");
  worker.start();
}
