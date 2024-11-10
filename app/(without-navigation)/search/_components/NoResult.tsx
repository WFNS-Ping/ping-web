import { ExclamationCircleIcon } from "@/assets/icons";
import React from "react";

type Props = {
  searchKeyword: string;
};

const NoResult = ({ searchKeyword }: Props) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-11/12 flex flex-col justify-center items-center gap-y-2">
        <ExclamationCircleIcon
          className="text-blue-600"
          aria-hidden="true"
          focusable="false"
        />
        <p className="description text-center">
          검색하신 ‘{searchKeyword}’의 결과를 찾지 못했어요.
          <br /> 다시 검색해주세요.
        </p>
      </div>
    </div>
  );
};

export default NoResult;
