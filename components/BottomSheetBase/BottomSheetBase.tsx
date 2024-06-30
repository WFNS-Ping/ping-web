"use client";
import React from "react";
import { Sheet } from "react-modal-sheet";

type Props = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

const BottomSheet = ({ open, setOpen, children }: Props) => {
  return (
    <Sheet isOpen={open} detent="content-height" onClose={() => setOpen(false)}>
      <Sheet.Container className="bg-black-50 px-2 pb-4">
        <Sheet.Header>
          <div className="flex justify-center mt-4 mb-2">
            <button className="h-[5px] w-10 cursor-grab touch-none rounded-lg bg-black-200 active:cursor-grabbing"></button>
          </div>
        </Sheet.Header>
        <Sheet.Content>
          <Sheet.Scroller className="scrollbar-hide">{children}</Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default BottomSheet;
