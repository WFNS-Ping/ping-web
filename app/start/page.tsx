import React from "react";
import { cn } from "@/utils/cn";
import OnboardingBadge from "@/components/OnboardingBadge/OnboardingBadge";
import FixedBottomCTA from "@/components/BottomFixedButton";
import useAppRouter from "@/hooks/useAppRouter";
import Image from "next/image";
import handImage from "@/assets/images/phone-touch-hands.png";
import Button from "@/components/Button";
const StartPage = () => {
  // const router = useAppRouter();
  return (
    <main
      className={cn("flex", "flex-col", "justify-between", "h-full", "pt-10")}
    >
      <div>
        <OnboardingBadge currentStep={4} totalStep={4} />
        <h1 className={cn("body1", "font-bold", "text-white", "mt-2")}>
          준비 완료!
        </h1>

        <div
          className={cn(
            "flex",
            "flex-col",
            "gap-y-2",
            "body3",
            "text-white",
            "mt-4"
          )}
        >
          <span>Ping을 사용할 준비가 완료되었어요!</span>
          <span>장소를 등록하면 잊지 않도록 Ping이 알림을 보내드릴게요.</span>
        </div>
      </div>
      <Image src={handImage} height={230} alt="휴대폰을 터치하고 있는 손" />

      <Button>시작하기</Button>
    </main>
  );
};
export default StartPage;
