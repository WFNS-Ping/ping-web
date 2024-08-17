import { useRadioGroupContext } from "@/components/RadioGroup/RadioGroup";
import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  distance: string;
};

const DistanceBadge = ({ distance }: Props) => {
  const { value } = useRadioGroupContext();
  return (
    <span
      className={cn(
        "caption",
        "font-bold",
        "px-2",
        "rounded",
        "h-6",
        "flex",
        "items-center",
        "mr-2",
        value === distance ? "text-blue-600" : "text-white",
        value === distance ? "bg-white" : "bg-blue-600"
      )}
    >
      {distance}m
    </span>
  );
};

export default DistanceBadge;
