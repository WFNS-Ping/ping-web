"use client";
import React from "react";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import GlobalPortal from "../GlobalPortal";
type Props = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

function useSafeAnimate() {
  const [scope, animate] = useAnimate();

  const safeAnimate = (...args: Parameters<typeof animate>) => {
    if (!scope.current) {
      return;
    }
    return animate(...args);
  };

  return [scope, safeAnimate] as [typeof scope, typeof animate];
}

const BottomSheet = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useSafeAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;
    console.log(yStart, height);

    await animate("#drawer", {
      y: [yStart, height],
    });
    setOpen(false);
  };

  return (
    <GlobalPortal.Consumer>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden p-4 rounded-t-3xl bg-black-50"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 50) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="flex justify-center bg-black-50 mb-2">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-[5px] w-10 cursor-grab touch-none rounded-lg bg-black-200 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll scrollbar-hide">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </GlobalPortal.Consumer>
  );
};

export default BottomSheet;
