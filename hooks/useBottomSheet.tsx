import { useAnimation, PanInfo } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import usePrevious from "./usePrevious";

const useBottomSheet = () => {
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const prevIsOpen = usePrevious(isOpen);
  const onDragEnd = (
    event: PointerEvent,
    { point, velocity }: PanInfo
  ): void => {
    const shouldClose =
      (velocity.y > -20 &&
        (event.type === "pointerup" || event.target === backdropRef.current)) ||
      velocity.y > 20 ||
      (velocity.y >= 0 && point.y > 45);

    if (shouldClose) {
      controls.start("hidden");
      setIsOpen(false);
    } else {
      controls.start("visible");
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);
  return { onDragEnd, controls, setIsOpen, isOpen, backdropRef };
};

export default useBottomSheet;
