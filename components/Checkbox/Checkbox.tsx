import React from "react";
import { CheckIcon } from "@/assets/icons";
import style from "./Checkbox.module.css";
import { cn } from "@/utils/cn";
interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string | React.ReactNode;
}

const Checkbox: React.FC<IProps> = ({
  className,
  checked,
  label,
  ...props
}) => {
  return (
    <label className={cn("text-black-50", "flex", "items-center", className)}>
      <input
        className={style["checkbox-input"]}
        type="checkbox"
        checked={checked}
        {...props}
      />

      <div className={cn(style["checkbox"])}>
        {checked && (
          <CheckIcon
            data-testid="checkbox-icon"
            width="0.75rem"
            height="0.5rem"
            aria-hidden="true"
          />
        )}
      </div>

      <span className={cn("description")}>{label}</span>
    </label>
  );
};

export default Checkbox;
