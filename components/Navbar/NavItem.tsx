"use client";
import useAppRouter from "@/hooks/useAppRouter";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
  href: string;
};

const NavItem = ({ href, children }: PropsWithChildren<Props>) => {
  const router = useAppRouter();
  const pathName = usePathname();
  return (
    <li
      className={cn(
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "caption",
        "non-selected-nav-item",
        pathName === href && "selected-nav-item"
      )}
      onClick={() => router.replace(href)}
    >
      {children}
    </li>
  );
};

export default NavItem;
