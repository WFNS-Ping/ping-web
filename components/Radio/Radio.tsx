import React from "react";
import { useRadioGroupContext } from "../RadioGroup/RadioGroup";
import { cn } from "@/utils/cn";

type Props = {
  id: string;
  value: string;
  children: React.ReactNode;
};

const Radio = ({ id, children, value }: Props) => {
  const { onChange, value: contextValue } = useRadioGroupContext();
  const isChecked = contextValue === value;
  return (
    <li
      className={cn(
        "list-none",
        "rounded-full",
        isChecked ? "bg-blue-600" : "bg-white",
        "flex",
        "items-center",
        !isChecked && "border border-black-200"
      )}
    >
      <label htmlFor={id} className="w-full h-full inline-block py-4 px-6">
        <input
          className={cn("appearance-none", "flex")}
          onChange={onChange}
          checked={isChecked}
          id={id}
          type="radio"
          value={value}
        />
        <span
          className={cn(
            isChecked ? "text-white" : "text-black-950",
            "flex",
            "items-center",
            "description"
          )}
        >
          {children}
        </span>
      </label>
    </li>
  );
};

export default Radio;
