import React from "react";
import { LocationMarkerIcon } from "@/assets/icons";

const SearchResultItem = () => {
  return (
    <div role="button" className="flex gap-x-2">
      <LocationMarkerIcon
        className="text-black-200"
        aria-hidden="true"
        focusable="false"
      />
      <div className="flex flex-col description">
        <span className="text-black-950" aria-label="검색결과 장소명">
          다이소 이수점
        </span>
        <span className="text-black-500" aria-label="검색결과 주소">
          서울 동작구 동작대로 123 1층
        </span>
      </div>
    </div>
  );
};

export default SearchResultItem;
