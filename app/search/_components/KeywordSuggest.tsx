import React from "react";
import KeywordToken from "./KeywordToken";

const KeywordSuggest = () => {
  return (
    <div>
      <h2 className="description font-bold">추천</h2>
      <div className="flex gap-x-2 mt-2">
        <KeywordToken word="다이소" />
        <KeywordToken word="올리브영" />
        <KeywordToken word="이마트" />
      </div>
    </div>
  );
};

export default KeywordSuggest;
