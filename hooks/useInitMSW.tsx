"use client";
import { useState, useEffect } from "react";

export async function initMsw() {
  if (typeof window !== "undefined") {
    const { worker } = await import("../mocks/browser");
    await worker.start();
  }
}

const useInitMSW = () => {
  const [mswReady, setMswReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      await initMsw();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  return;
};

export default useInitMSW;
