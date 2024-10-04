"use client";

import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { UserIcon } from "@/assets/icons";
import { MyInfoBottomSheet } from "../BottomSheets";

type Props = {};

const MyInfoButton = (props: Props) => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  return (
    <>
      <li
        className={cn(
          "flex",
          "flex-col",
          "justify-center",
          "items-center",
          "caption",
          "non-selected-nav-item"
        )}
        onClick={() => {
          setOpenBottomSheet(true);
        }}
      >
        <UserIcon aria-hidden="true" focusable="false" /> <span>마이</span>
      </li>
      <MyInfoBottomSheet setOpen={setOpenBottomSheet} open={openBottomSheet} />
    </>
  );
};

export default MyInfoButton;
