"use client";
import FixedBottomCTA from "@/components/BottomFixedButton";
import Input from "@/components/Input";
import RadioGroup from "@/components/RadioGroup";
import Radio from "@/components/Radio";

import useAppRouter from "@/hooks/useAppRouter";
import useInput from "@/hooks/useInput";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { MapIcon, TimeIcon } from "@/assets/icons";

const NotiSelection = () => {
  const router = useAppRouter();
  const [value, setValue] = useState<"time" | "distance" | "">("");

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
      <FixedBottomCTA type="button" onClick={() => router.push("/start")}>
        다음
      </FixedBottomCTA>
    </>
  );
};

export default NotiSelection;
