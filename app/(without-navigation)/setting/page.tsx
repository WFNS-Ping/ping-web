import React from "react";
import { cn } from "@/utils/cn";
import NotiSelection from "./_components/NotiSelectionForm";
import OnboardingBadge from "@/components/OnboardingBadge/OnboardingBadge";

const SettingPage = () => {
  return (
    <section className={cn("h-content-height", "pt-10")}>
      <div>
        <OnboardingBadge currentStep={2} totalStep={4} />
        <h1 className={cn("body1", "font-bold", "text-black-950", "mt-2")}>
          알림 설정
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
        <span>선택하신 방법으로 알림을 보내드릴게요.</span>
        <span>지금 선택하신 방법은 나중에 언제든지 변경 가능해요.</span>
      </div>
      <NotiSelection />
    </section>
  );
};
export default SettingPage;
