import React from "react";
import { LogoWhite } from "@/assets/icons";
import { cn } from "@/utils/cn";
import Button from "@/components/Button";
import NotiSelection from "./_components/NotiSelectionForm";
const SettingPage = () => {
  return (
    <main className={cn("flex", "flex-col", "justify-between", "h-full")}>
      <div className={cn("py-10", "flex", "justify-center")}>
        <LogoWhite width="4.9375rem" height="2.125rem" viewBox="0 0 79 34" />
      </div>
      <h1 className={cn("headline", "text-white", "font-bold", "text-center")}>
        알림 설정
      </h1>
      <p className={cn("body1", "text-white", "text-center")}>
        선택하신 방법으로 알림을 보내드릴게요
      </p>
      <NotiSelection />
    </main>
  );
};
export default SettingPage;
