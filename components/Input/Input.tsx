import { cn } from "@/utils/cn";
import { ChangeEvent, FC } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  className?: string;
  value: string | number;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  className,
  value,
  name,
  placeholder = "",
  disabled,
  onChange,
}) => {
  return (
    <input
      className={cn("input-base", className)}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
