"use client";
import FixedBottomCTA from "@/components/BottomFixedButton";

import RadioGroup from "@/components/RadioGroup";
import Radio from "@/components/Radio";

import useAppRouter from "@/hooks/useAppRouter";
import React, { useState } from "react";
import { MapIcon, TimeIcon } from "@/assets/icons";

const NotiSelection = () => {
  const router = useAppRouter();
  const [value, setValue] = useState<"time" | "distance" | "">("");

  const handleOnNext = () => {
    if (value === "time") {
      router.push("/time");
    } else if (value === "distance") {
      router.push("/distance");
    }
  };
  return (
    <>
      <form className="mt-10" action="">
        <RadioGroup value={value} onChange={setValue}>
          <Radio id="time" value="time">
            <TimeIcon fill="none" className="mr-2" /> 시간으로 정할게요
          </Radio>
          <Radio id="distance" value="distance">
            <MapIcon fill="none" className="mr-2" /> 거리로 정할게요
          </Radio>
        </RadioGroup>
      </form>
      <FixedBottomCTA
        bgColor="black"
        type="button"
        disabled={value === ""}
        onClick={handleOnNext}
      >
        다음
      </FixedBottomCTA>
    </>
  );
};

export default NotiSelection;
