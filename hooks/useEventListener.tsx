"use client";
import { useEffect, useState } from "react";

const useEventListener = () => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });

  const listener = (event: MessageEvent) => {
    console.log("webview listener", event.data);
    const appData = JSON.parse(event.data);
    if (appData.type === "LOCATION") {
      setLocation(JSON.parse(event.data));
    }
  };

  useEffect(() => {
    // android, ios 구분하는 코드
    const receiver = navigator.userAgent.includes("Android")
      ? document
      : window;
    receiver.addEventListener("message", listener as EventListener);
    return () => {
      receiver.removeEventListener("message", listener as EventListener);
    };
  }, []);

  return { location };
};

export default useEventListener;
