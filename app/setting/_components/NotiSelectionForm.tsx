"use client";
import FixedBottomCTA from "@/components/BottomFixedButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import useInput from "@/hooks/useInput";
import { cn } from "@/utils/cn";
import React from "react";

const NotiSelection = () => {
  const { value: id, onChange: onIdChange } = useInput("");
  const { value: password, onChange: onPasswordChange } = useInput("");
  return (
    <>
      <form action="">
        <Input
          value={id}
          onChange={onIdChange}
          type="text"
          name="id"
          placeholder="거리로 정할게요"
          className={cn("mb-4")}
        />
        <Input
          value={id}
          onChange={onIdChange}
          type="text"
          name="id"
          placeholder="시간으로 정할게요"
          className={cn("mb-4")}
        />
      </form>
      <Button>다음</Button>
    </>
  );
};

export default NotiSelection;
