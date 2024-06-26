"use client";
import { ModalHideContext } from "@/components/Modals/Modal";
import { MODAL_COMPONENTS, useModalState } from "contexts/ModalContext";
import { ComponentType, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type CalledByModalInner = { hideModal: () => void };
type CalledByModalOuter<P> = {
  openModal: (props?: P) => void;
  hideModal: () => void;
};
function useModal(): CalledByModalInner;
function useModal<P extends Record<string, unknown>>(
  Component?: ComponentType<P>
): CalledByModalOuter<P>;

function useModal<P extends Record<string, unknown>>(
  Component?: ComponentType<P>
): CalledByModalInner | CalledByModalOuter<P> {
  const { showModal, closeModal } = useModalState((state) => state);
  const [modalId] = useState(uuidv4());
  const hideThisModal = useContext(ModalHideContext);

  useEffect(() => {
    if (!Component) return;
    MODAL_COMPONENTS[modalId] = {
      Component,
    };
  }, [modalId]);

  const openModal = (props?: P) => {
    if (!Component) return;
    MODAL_COMPONENTS[modalId].props = props;
    showModal(modalId);
  };

  const hideModal = () => {
    if (Component) closeModal(modalId);
    else hideThisModal();
  };

  if (Component) return { openModal, hideModal };

  return { hideModal };
}

export default useModal;
