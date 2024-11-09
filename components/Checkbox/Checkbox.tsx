import React from "react";
import { CheckIcon } from "@/assets/icons";
import style from "./Checkbox.module.css";
import { cn } from "@/utils/cn";
interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  colorType?: "black" | "gray";
  checkboxWrapperClassName?: string;
}

const Checkbox: React.FC<IProps> = ({
  className,
  checked,
  children,
  colorType = "black",
  checkboxWrapperClassName,
  ...props
}) => {
  return (
    <label className={cn("text-black-950", "flex", "gap-x-1", className)}>
      <input
        className={style["checkbox-input"]}
        type="checkbox"
        checked={checked}
        {...props}
      />
      <div
        className={cn("w-6", "h-6", "p-[0.125rem]", checkboxWrapperClassName)}
      >
        <div
          className={cn(
            style["checkbox"],
            style[!checked && colorType === "black" ? "black" : "gray"],
            checked && style["blue"]
          )}
        >
          {checked && (
            <CheckIcon
              data-testid="checkbox-icon"
              width="0.75rem"
              height="0.5rem"
              aria-hidden="true"
              className={cn("text-blue-600")}
            />
          )}
        </div>
      </div>
      {children}
    </label>
  );
};

export default Checkbox;
