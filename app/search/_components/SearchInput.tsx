"use client";
import useInput from "@/hooks/useInput";
import React from "react";
import { ChevronLeftIcon, SearchIcon } from "@/assets/icons";
const SearchInput = () => {
  const { value, onChange } = useInput("");
  return (
    <div className="py-4 flex justify-between description">
      <div className="flex gap-x-2 flex-1">
        <ChevronLeftIcon aria-label="뒤로가기" role="button" />
        <input
          className="outline-none flex-1 description"
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
    </div>
  );
};

export default SearchInput;
