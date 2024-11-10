"use client";
import FixedBottomCTA from "@/components/BottomFixedButton";
import OnboardingBadge from "@/components/OnboardingBadge";
import TimePicker from "@/components/TimePicker";
import useAppRouter from "@/hooks/useAppRouter";
import { cn } from "@/utils/cn";
import React from "react";

const TimePage = () => {
  const router = useAppRouter();
  return (
    <section className={cn("h-content-height", "pt-10")}>
      <div>
        <OnboardingBadge currentStep={3} totalStep={4} />
        <h1 className={cn("body1", "font-bold", "text-black-950", "mt-2")}>
          시간으로 알림을 보내드릴게요.
        </h1>
      </div>
      <div
        className={cn(
          "flex",
          "flex-col",
          "gap-y-2",
          "body3",
          "text-black-950",
          "mt-4",
          "mb-10"
        )}
      >
        <span className="h-14">원하시는 시간을 설정해주세요.</span>
      </div>
      <TimePicker />
      <FixedBottomCTA bgColor="black" onClick={() => router.push("/start")}>
        다음
      </FixedBottomCTA>
    </section>
  );
};

export default TimePage;
