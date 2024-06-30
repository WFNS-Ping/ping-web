"use client";
import React from "react";
import GlobalPortal from "../GlobalPortal";
import { MODAL_COMPONENTS, useModalState } from "contexts/ModalContext";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const Modals = () => {
  const { modals, closeModal } = useModalState((state) => state);
  return (
    <GlobalPortal.Consumer>
      <AnimatePresence>
        {modals.map((id) => (
          <Modal
            hide={() => closeModal(id)}
            key={id}
            Component={MODAL_COMPONENTS[id].Component}
            modalProps={MODAL_COMPONENTS[id].props}
          />
        ))}
      </AnimatePresence>
    </GlobalPortal.Consumer>
  );
};

export default Modals;
