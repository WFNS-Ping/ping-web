import { LogoBlack } from "@/assets/icons";
import { cn } from "@/utils/cn";
import React from "react";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <section className={cn("px-4", "h-[calc(100%-3.5rem)]")}>
      <div className={cn("py-10", "flex", "justify-center", "mb-10")}>
        <LogoBlack aria-hidden="true" focusable="false" />
      </div>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
