import { cn } from "@/utils/cn";
import React from "react";
import { ProfileDefaultIcon } from "@/assets/icons";
import BottomSheetBase from "../BottomSheetBase";

type Props = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};

const MyInfoBottomSheet = ({ open, setOpen }: Props) => {
  return (
    <BottomSheetBase open={open} setOpen={setOpen}>
      <div className="px-2">
        <div className="mb-2 flex items-center">
          <ProfileDefaultIcon
            focusable="false"
            aria-hidden="true"
            className="mr-4"
          />
          <span className={cn("mr-2", "body1", "text-black-950", "font-bold")}>
            정지혁
          </span>
          <span className={cn("text-black-400", "description")}>jhjung94</span>
        </div>
        <ul
          className={cn(
            "flex",
            "flex-col",
            "justify-between",
            "flex-grow",
            "flex-shrink",
            "gap-y-1",
            "font-bold",
            "description"
          )}
        >
          <li>장소 리스트 관리</li>
          <li>알림 설정</li>
          <li>비밀번호 변경</li>
          <li>로그아웃</li>
        </ul>
      </div>
    </BottomSheetBase>
  );
};

export default MyInfoBottomSheet;
