import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  filterType: "distance" | "bookmark" | "brand";
};

const Filters = ({ filterType }: Props) => {
  const filters = [
    { type: "distance", value: "가까운 순" },
    { type: "bookmark", value: "즐겨찾기" },
    { type: "brand", value: "브랜드" },
  ];
  return (
    <div className="flex justify-between px-2">
      <ul className="flex gap-x-1">
        {filters.map(({ type, value }) => (
          <li
            className={cn(
              "caption",
              "px-4",
              "py-1",
              "border",
              "border-black-200",
              "rounded-full",
              filterType === type && "bg-blue-600 text-white"
            )}
            key={type}
          >
            {value}
          </li>
        ))}
      </ul>
      <button className="caption text-black-400 pr-2">편집</button>
    </div>
  );
};

export default Filters;
