import React from "react";
import { ClockIcon, XIcon } from "@/assets/icons";
type Props = {
  word: string;
};

const RecentSearchItem = ({ word }: Props) => {
  return (
    <button className="flex justify-between items-center text-black-200">
      <div className="flex gap-x-2 items-center">
        <ClockIcon
          width="1.5rem"
          height="1.5rem"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        />
        <span className="text-black-950 description">{word}</span>
      </div>
      <XIcon
        width="1.5rem"
        height="1.5rem"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="최근 검색 삭제"
        role="button"
      />
    </button>
  );
};

export default RecentSearchItem;
