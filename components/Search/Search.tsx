"use client";
import { cn } from "@/utils/cn";
import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { ClockIcon, SearchIcon, XIcon } from "@/assets/icons";

type SearchContext = {
  searchItems: Search;
};

const SearchContext = createContext<SearchContext | undefined>(undefined);

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be within a Search Component.");
  }
  return context;
};

interface Search {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  recommendedKeyword: {
    title: string;
    words: string[];
  };
  recentSearches: {
    title: string;
    words: string[];
  };
  keywordButton: {
    name: string;
    onClick: () => void;
  };
}

type SearchProps = PropsWithChildren & {
  searchItems: Search;
};

function Search({ searchItems, children }: SearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <SearchContext.Provider value={{ searchItems }}>
      <div
        className={cn(
          "py-4",
          "px-6",
          "flex",
          "flex-col",
          "gap-[0.625rem]",
          "shadow-[0px_2px_2px_0px_rgba(0,0,0,0.2)]",
          "rounded",
          "bg-black-50",
          "w-full"
        )}
      >
        <div className={cn("relative")}>
          <input
            type="text"
            name={searchItems.name}
            placeholder={searchItems.placeholder}
            onChange={searchItems.onChange}
            disabled={searchItems.disabled}
            onFocus={() => {
              setIsFocused(true);
            }}
            className={cn("input-base", searchItems.className)}
          />
          <SearchIcon
            aria-label="search-button"
            role="button"
            width="1.5rem"
            height="1.5rem"
            className={cn("absolute", "top-4", "right-6")}
            onClick={searchItems.onClick}
          />
        </div>
        {isFocused && children}
      </div>
    </SearchContext.Provider>
  );
}

Search.KeywordButton = function SearchKeywordButton() {
  const {
    searchItems: { keywordButton },
  } = useSearchContext();
  return <button onClick={keywordButton.onClick}>{keywordButton.name}</button>;
};

Search.RecommendedKeyword = function RecommendedKeyword() {
  const {
    searchItems: { recommendedKeyword },
  } = useSearchContext();
  return (
    <div>
      <strong className={cn("font-bold", "description")}>
        {recommendedKeyword.title}
      </strong>
      <ul className={cn("flex", "gap-x-2", "mt-[0.625rem]")}>
        {recommendedKeyword.words.map((word) => (
          <li
            className={cn(
              "bg-black-950",
              "px-4",
              "py-1",
              "flex",
              "items-center",
              "description",
              "rounded-full",
              "text-black-50"
            )}
            key={word}
          >
            #{word}
          </li>
        ))}
      </ul>
    </div>
  );
};

Search.RecentSearches = function RecentSearches() {
  const {
    searchItems: { recentSearches },
  } = useSearchContext();
  return (
    <div>
      <strong className={cn("font-bold", "description")}>
        {recentSearches.title}
      </strong>
      <ul className={cn("flex", "flex-col", "gap-[0.625rem]", "mt-[0.625rem]")}>
        {recentSearches.words.map((word) => (
          <li
            className={cn(
              "flex",
              "justify-between",
              "description",
              "items-center"
            )}
            key={word}
          >
            <span className={cn("flex", "gap-x-2", "items-center")}>
              <ClockIcon
                viewBox="0 0 24 24"
                width="1.25rem"
                height="1.25rem"
                fill="none"
                aria-hidden="true"
                focusable="false"
              />
              {word}
            </span>
            <XIcon
              viewBox="0 0 14 14"
              width="0.875rem"
              height="0.875rem"
              fill="none"
              role="button"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
