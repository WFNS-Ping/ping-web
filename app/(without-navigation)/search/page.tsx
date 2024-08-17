import React from "react";
import SearchInput from "./_components/SearchInput";
import KeywordSuggest from "./_components/KeywordSuggest";
import RecentSearches from "./_components/RecentSearchList";

const SearchPage = () => {
  return (
    <main>
      <SearchInput />
      <KeywordSuggest />
      <RecentSearches />
    </main>
  );
};

export default SearchPage;
