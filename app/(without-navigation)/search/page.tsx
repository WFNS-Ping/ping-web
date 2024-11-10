import React from "react";
import SearchInput from "./_components/SearchInput";
import KeywordSuggest from "./_components/KeywordSuggest";
import RecentSearches from "./_components/RecentSearchList";
import { cn } from "@/utils/cn";

const SearchPage = () => {
  return (
    <section className={cn("h-full", "py-2", "flex", "flex-col")}>
      <SearchInput />
      <div className="grow">
        <KeywordSuggest />
        <RecentSearches />
      </div>
    </section>
  );
};

export default SearchPage;
