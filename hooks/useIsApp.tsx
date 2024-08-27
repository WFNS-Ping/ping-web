"use client";
import { useLayoutEffect, useState } from "react";

const useIsApp = () => {
  const [isApp, setIsApp] = useState(false);

  useLayoutEffect(() => {
    setIsApp(typeof window !== "undefined" && window.ReactNativeWebView);
  }, []);

  return {
    isApp,
  };
};

export default useIsApp;
