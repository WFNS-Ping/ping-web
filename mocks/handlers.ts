import { HttpHandler } from "msw";
import { authHandlers } from "./authHandler";
const handlers: HttpHandler[] = [...authHandlers];

export { handlers };
