import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  totalStep: number;
  currentStep: number;
};

const OnboardingBadge = ({ totalStep, currentStep }: Props) => {
  return (
    <div
      className={cn(
        "px-4",
        "py-1",
        "inline-flex",
        "items-center",
        "justify-center",
        "caption",
        "font-bold",
        "text-black-200",
        "bg-blue-600",
        "rounded-full"
      )}
    >
      <strong className="text-white" aria-label="현재 단계">
        {currentStep}
      </strong>
      /<span aria-label="총 단계">{totalStep}</span>
    </div>
  );
};

export default OnboardingBadge;
