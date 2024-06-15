"use client";
import { cn } from "@/app/utils/cn";
import { ChangeEvent, FC, useState } from "react";
import { HideIcon, ShowIcon } from "@/app/assets/icons";
interface PasswordInputProps {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: FC<PasswordInputProps> = ({
  name,
  placeholder = "",
  disabled,
  onChange,
  className,
}) => {
  const [type, setType] = useState<"password" | "text">("password");

  const onClickIcon = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className={cn("relative")}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={cn("input-base", className)}
      />
      {type === "password" ? (
        <HideIcon
          aria-label="show-password-button"
          role="button"
          width="1.5rem"
          height="1.5rem"
          className={cn("absolute", "top-4", "right-6")}
          onClick={onClickIcon}
        />
      ) : (
        <ShowIcon
          aria-label="hide-password-button"
          role="button"
          className={cn("absolute", "top-4", "right-6")}
          onClick={onClickIcon}
        />
      )}
    </div>
  );
};

export default PasswordInput;
