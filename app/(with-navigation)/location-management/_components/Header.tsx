"use client";
import { ChevronLeftIcon } from "@/assets/icons";
import useAppRouter from "@/hooks/useAppRouter";
import React from "react";

const Header = () => {
  const router = useAppRouter();
  const onBack = () => {
    router.back();
  };
  return (
    <header className="flex justify-between">
      <ChevronLeftIcon
        role="button"
        aria-label="뒤로가기 버튼"
        onClick={onBack}
      />
      <h1 className="body1 font-bold">장소 관리</h1>
      <button className="caption text-black-400">편집</button>
    </header>
  );
};

export default Header;
