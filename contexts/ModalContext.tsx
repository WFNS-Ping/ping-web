import { ComponentType, ReactNode, createContext, useContext } from "react";
import { create } from "zustand";

type ModalState = {
  modals: string[];
  showModal: (id: string) => void;
  closeModal: (id: string) => void;
};
export const useModalState = create<ModalState>((set) => ({
  modals: [],
  showModal: (id: string) =>
    set((state) => ({
      ...state,
      modals: [...state.modals, id],
    })),

  closeModal: (id: string) =>
    set((state) => ({
      ...state,
      modals: [...state.modals.filter((modalId) => modalId !== id)],
    })),
}));

export const MODAL_COMPONENTS: {
  [id: string]: {
    Component: ComponentType<any>;
    props?: Record<string, unknown>;
  };
} = {};
