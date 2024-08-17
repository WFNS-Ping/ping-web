"use client";
import React from "react";
import Button from "@/components/Button";
import useAppRouter from "@/hooks/useAppRouter";
const NextButton = () => {
  const router = useAppRouter();
  return (
    <Button bgColor="black" type="button" onClick={() => router.push("/map")}>
      시작하기
    </Button>
  );
};

export default NextButton;
