import { AnimatePresence, motion } from "framer-motion";
import { LogoBlack } from "@/assets/icons";
import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ModalBase = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, rotate: "12.5deg" }}
        animate={{ scale: 1, rotate: "0deg" }}
        exit={{ scale: 0, rotate: "0deg" }}
        className={cn("p-6", "rounded-lg", "bg-white", "w-[17.5rem]")}
      >
        <div className={cn("flex", "justify-center")}>
          <LogoBlack
            width="3rem"
            height="1.5rem"
            focusable="false"
            aria-hidden="true"
          />
        </div>
        <div className={cn("my-2")}>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalBase;
