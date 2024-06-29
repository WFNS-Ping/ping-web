"use client";
import { cn } from "@/utils/cn";
import { ChangeEvent, FC, useState } from "react";
import { HideIcon, ShowIcon, CheckIcon } from "@/assets/icons";
interface PasswordInputProps {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const PasswordCondition = [
  { type: "영문", regExp: /.*[A-Za-z].*/ },
  { type: "숫자", regExp: /.*\d.*/ },
  { type: "특수문자", regExp: /.*[!@#$%^&*()].*/ },
  { type: "10자 이상", regExp: /^.{10,}$/ },
];
const PasswordInput: FC<PasswordInputProps> = ({
  name,
  placeholder = "",
  disabled,
  onChange,
  className,
  value,
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
          width="1.5rem"
          height="1.5rem"
          className={cn("absolute", "top-4", "right-6")}
          onClick={onClickIcon}
        />
      )}

      <div className={cn("mt-1", "flex", "gap-x-4")}>
        {PasswordCondition.map(({ type, regExp }) => (
          <span
            key={type}
            className={cn(
              regExp.test(value) ? "text-black-50" : "text-black-700",
              "description",
              "flex",
              "justify-center",
              "items-center"
            )}
            data-testid="checkbox-icon"
          >
            <CheckIcon
              width="1.125rem"
              focusable="false"
              aria-hidden="true"
              height="1.125rem"
            />{" "}
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PasswordInput;