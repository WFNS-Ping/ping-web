"use client";
import FixedBottomCTA from "@/components/BottomFixedButton";
import RadioGroup from "@/components/RadioGroup";
import Radio from "@/components/Radio";
import useAppRouter from "@/hooks/useAppRouter";
import React, { useState } from "react";
import DistanceBadge from "./DistanceBadge";

const DistanceSelection = () => {
  const router = useAppRouter();
  const [value, setValue] = useState<"30" | "100" | "300" | "">("");
  return (
    <>
      <form className="mt-10" action="">
        <RadioGroup value={value} onChange={setValue}>
          <Radio id="distance-30" value="30">
            <DistanceBadge distance="30" /> 바로 근처에 있어요.
          </Radio>
          <Radio id="distance-100" value="100">
            <DistanceBadge distance="100" /> 조금만 걸어가면 있어요.
          </Radio>
          <Radio id="distance-300" value="300">
            <DistanceBadge distance="300" /> 걸어서 10분내에 있어요.
          </Radio>
        </RadioGroup>
      </form>
      <FixedBottomCTA
        bgColor="black"
        type="button"
        disabled={value === ""}
        onClick={() => router.push("/start")}
      >
        다음
      </FixedBottomCTA>
    </>
  );
};

export default DistanceSelection;
