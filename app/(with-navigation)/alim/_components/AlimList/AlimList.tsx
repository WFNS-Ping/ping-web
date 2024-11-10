import React from "react";
import AlimItem from "../AlimItem";

const AlimList = () => {
  return (
    <ul>
      {Array.from({ length: 10 }, () => 0).map((_, index) => (
        <AlimItem
          content="등록한 ‘다이소'가 근방 30m 이내에 있어요! 지금 바로 확인해 보세요!"
          key={index}
        />
      ))}
    </ul>
  );
};

export default AlimList;
