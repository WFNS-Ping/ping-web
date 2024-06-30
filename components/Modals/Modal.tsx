import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import React, { ComponentType, createContext } from "react";

type Props = {
  Component: ComponentType<any>;
  modalProps?: Record<string, unknown>;
  hide: () => void;
};

export const ModalHideContext = createContext(() => {});

const Modal = ({ Component, modalProps, hide }: Props) => {
  return (
    <ModalHideContext.Provider value={hide}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn(
          "fixed",
          "inset-0",
          "flex",
          "justify-center",
          "items-center",
          "bg-black-950/50",
          "backdrop-blur"
        )}
        onClick={hide}
      >
        <Component {...modalProps} />
      </motion.div>
    </ModalHideContext.Provider>
  );
};

export default Modal;
