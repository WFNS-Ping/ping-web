import OnboardingBadge from "@/components/OnboardingBadge";
import { cn } from "@/utils/cn";
import React from "react";
import DistanceSelection from "./_Components/DistanceSelection";

const DistancePage = () => {
  return (
    <section className={cn("h-content-height", "pt-10")}>
      <div>
        <OnboardingBadge currentStep={3} totalStep={4} />
        <h1 className={cn("body1", "font-bold", "text-black-950", "mt-2")}>
          거리로 알림을 보내드릴게요.
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
        <span>원하시는 거리를 설정해주세요.</span>
      </div>
      <DistanceSelection />
    </section>
  );
};

export default DistancePage;
