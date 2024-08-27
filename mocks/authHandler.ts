import { APIEndpoints } from "apis/apiEndPoints";
import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { makeHandler } from "./utils";

interface ISignInReq {
  userId: string;
  password: string;
}

interface ISignInResponseBody {
  status: string;
}

const { url } = APIEndpoints["sign-in"].list;

export const authHandlers = [
  http.post<never, ISignInReq, ISignInResponseBody>(
    url,
    async ({ request }) => {
      const { userId, password } = await request.json();

      if (userId === "test" && password === "test") {
        return HttpResponse.json(
          {
            status: "ok",
          },
          {
            headers: {
              accessToken: faker.string.uuid(),
              refreshToken: faker.string.octal(),
            },
          }
        );
      }
    }
  ),
];
