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
      <div
        className={cn(
          "fixed",
          "inset-0",
          "flex",
          "justify-center",
          "items-center",
          "bg-black-950/50"
        )}
        onClick={hide}
      >
        <Component {...modalProps} />
      </div>
    </ModalHideContext.Provider>
  );
};

export default Modal;
