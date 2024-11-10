"use client";
import useInput from "@/hooks/useInput";
import React from "react";
import { ChevronLeftIcon, SearchIcon } from "@/assets/icons";
import useAppRouter from "@/hooks/useAppRouter";
import { cn } from "@/utils/cn";
const SearchInput = () => {
  const router = useAppRouter();
  const { value, onChange } = useInput("");
  return (
    <header className="py-2 flex justify-between description items-center">
      <div className="flex gap-x-2 flex-1 items-center">
        <ChevronLeftIcon
          aria-label="뒤로가기"
          role="button"
          onClick={() => {
            router.back();
          }}
        />
        <input
          className={cn(
            "outline-none",
            "flex-1",
            "description",
            "bg-black-100",
            "rounded-lg",
            "p-2",
            "placeholder:text-black-400",
            "mr-2"
          )}
          onChange={onChange}
          value={value}
          placeholder="Ping 찍을 곳 검색"
        />
      </div>
      <SearchIcon
        width={24}
        height={24}
        viewBox="0 0 24 24"
        aria-label="검색 버튼"
        role="button"
      />
    </header>
  );
};

export default SearchInput;
