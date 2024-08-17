import React from "react";

type Props = {
  word: string;
};

const KeywordToken = ({ word }: Props) => {
  return (
    <button className="description px-4 py-1 rounded-full border border-black-200 text-blue-600">
      #{word}
    </button>
  );
};

export default KeywordToken;
