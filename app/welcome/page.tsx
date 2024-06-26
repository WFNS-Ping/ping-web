"use client";
import React from "react";
import { LogoWhite } from "@/assets/icons";
import { cn } from "@/utils/cn";
import Button from "@/components/Button";
import useAppRouter from "@/hooks/useAppRouter";
const WelcomePage = () => {
  const router = useAppRouter();
  return (
    <main className={cn("flex", "flex-col", "justify-between", "h-full")}>
      <div className={cn("py-10", "flex", "justify-center")}>
        <LogoWhite width="4.9375rem" height="2.125rem" viewBox="0 0 79 34" />
      </div>
      <h1 className={cn("headline", "text-white", "font-bold", "text-center")}>
        환영합니다
      </h1>
      <div
        className={cn(
          "flex",
          "flex-col",
          "gap-y-2.5",
          "body1",
          "text-white",
          "text-center"
        )}
      >
        <span>Ping은 가려던 장소를 갈 수 있게 도움을 줍니다.</span>
        <span>먼저, 알림 기준을 정해볼까요?</span>
      </div>
      <Button type="button" onClick={() => router.push("/setting")}>
        다음
      </Button>
    </main>
  );
};
export default WelcomePage;
