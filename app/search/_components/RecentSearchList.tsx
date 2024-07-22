import React from "react";
import RecentSearchItem from "./RecentSearchItem";
import SearchResultItem from "./SearchResultItem";

const RecentSearchList = () => {
  return (
    <div className="mt-4">
      <h2 className="description font-bold">최근 검색</h2>
      <div className="flex flex-col gap-y-2 mt-2">
        <RecentSearchItem word="세제" />
        <RecentSearchItem word="밀키트" />
        <RecentSearchItem word="화장솜" />
        <RecentSearchItem word="텀블러" />
      </div>
    </div>
  );
};

export default RecentSearchList;
