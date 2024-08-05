import { APIEndpoints } from "apis/apiEndPoints";
import { HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { makeHandler } from "./utils";

interface ISignInReq {
  userId: string;
  password: string;
}

const { url, method } = APIEndpoints["sign-in"].list;
const authHandler = makeHandler({
  method,
  path: url,
  resolver: async ({ request }) => {
    const { userId, password } = (await request.json()) as ISignInReq;

    if (userId === "test" && password === "test") {
      return HttpResponse.json({
        accessToken: faker.string.uuid(),
        refreshToken: faker.string.octal(),
      });
    }

    return HttpResponse.json(
      {
        error: "로그인 오류",
      },
      { status: 400 }
    );
  },
});

export const authHandlers = [authHandler];
