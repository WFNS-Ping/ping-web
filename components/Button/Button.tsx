import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

const ButtonVariants = cva(``, {
  variants: {
    size: {
      small: "py-[0.6875rem] px-6 caption shadow-small w-full font-bold",
      normal: "px-4 py-4 shadow-normal w-full font-bold",
    },
    bgColor: {
      black: "bg-black-950 rounded-full text-black-50 disabled:text-black-800",
      white:
        "bg-black-50 border border-black-200 rounded-full text-black-950 disabled:text-black-200",
    },
  },
  defaultVariants: {
    size: "normal",
    bgColor: "white",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ size, bgColor, children, ...props }) => {
  return (
    <button className={cn(ButtonVariants({ size, bgColor }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
