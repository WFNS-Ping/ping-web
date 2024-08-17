"use client";
import React from "react";
import { cn } from "@/utils/cn";
import useAppRouter from "@/hooks/useAppRouter";
import OnboardingBadge from "@/components/OnboardingBadge/OnboardingBadge";
import FixedBottomCTA from "@/components/BottomFixedButton";
const WelcomePage = () => {
  const router = useAppRouter();
  return (
    <main className={cn("h-full", "pt-10")}>
      <div>
        <OnboardingBadge currentStep={1} totalStep={4} />
        <h1 className={cn("body1", "font-bold", "text-black-950", "mt-2")}>
          Ping 찍고 오신걸, 환영합니다
        </h1>
      </div>
      <div
        className={cn(
          "flex",
          "flex-col",
          "gap-y-2",
          "body3",
          "text-black-950",
          "mt-4"
        )}
      >
        <span>While you are there, Ping!</span>
        <span>언제 어디에서나 바로 알림 서비스 Ping!</span>
      </div>
      <FixedBottomCTA bgColor="black" onClick={() => router.push("/setting")}>
        다음
      </FixedBottomCTA>
    </main>
  );
};
export default WelcomePage;
