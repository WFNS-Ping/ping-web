import { LogoBlack } from "@/assets/icons";
import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ModalBase = ({ children }: Props) => {
  return (
    <div className={cn("p-6", "rounded-lg", "bg-white", "w-[17.5rem]")}>
      <div className={cn("flex", "justify-center")}>
        <LogoBlack
          width="3rem"
          height="1.5rem"
          focusable="false"
          aria-hidden="true"
        />
      </div>
      <div className={cn("my-2")}>{children}</div>
    </div>
  );
};

export default ModalBase;
