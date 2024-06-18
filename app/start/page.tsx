import React from "react";
import { LogoWhite } from "@/assets/icons";
import { cn } from "@/utils/cn";
import Button from "@/components/Button";
const StartPage = () => {
  return (
    <main className={cn("flex", "flex-col", "justify-between", "h-full")}>
      <div className={cn("py-10", "flex", "justify-center")}>
        <LogoWhite width="4.9375rem" height="2.125rem" viewBox="0 0 79 34" />
      </div>
      <h1 className={cn("headline", "text-white", "font-bold", "text-center")}>
        이제 시작해볼까요?
      </h1>
      <p className={cn("body1", "text-white", "text-center")}>
        장소를 등록하면 잊지 않도록
        <br /> Ping이 알림을 보내드릴게요
      </p>
      <Button>시작하기</Button>
    </main>
  );
};
export default StartPage;
