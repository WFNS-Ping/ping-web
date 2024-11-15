"use client";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sendNativeEvent } from "@/utils/sendNativeEvent";

interface Url {
  auth: string | null;
  hash: string | null;
  host: string | null;
  hostname: string | null;
  href: string;
  path: string | null;
  pathname: string | null;
  protocol: string | null;
  search: string | null;
  slashes: boolean | null;
  port: string | null;
  query: string | null;
}

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
  unstable_skipClientCache?: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_WEB_DOMAIN;

const useAppRouter = () => {
  const router = useRouter();
  const [isApp, setIsApp] = useState(false);

  useLayoutEffect(() => {
    setIsApp(typeof window !== "undefined" && window.ReactNativeWebView);
  }, []);

  const push = async (
    url: string,

    options: TransitionOptions = { shallow: true }
  ): Promise<void | boolean> => {
    console.log("baseUrl", BASE_URL);
    return isApp
      ? sendNativeEvent({
          type: "ROUTER_EVENT",
          params: { path: `${BASE_URL}${url}`, data: {} },
        })
      : router.push(url, options);
  };

  const replace = async (
    url: string,
    options: TransitionOptions = { shallow: true }
  ): Promise<void | boolean> => {
    return isApp
      ? sendNativeEvent({
          type: "ROUTER_EVENT",
          params: { path: `${BASE_URL}${url}`, data: {} },
        })
      : router.replace(url, options);
  };

  const back = async (): Promise<void> =>
    isApp
      ? sendNativeEvent({
          type: "ROUTER_EVENT",
          params: { path: "back", data: {} },
        })
      : router.back();

  return {
    isApp,
    push,
    replace,
    back,
  };
};

export default useAppRouter;
