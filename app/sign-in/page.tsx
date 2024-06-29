import { LogoWhite } from "@/assets/icons";
import { cn } from "@/utils/cn";
import React from "react";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <main className={cn("px-4")}>
      <div className={cn("py-10", "flex", "justify-center", "mb-10")}>
        <LogoWhite width="4.9375rem" height="2.125rem" viewBox="0 0 79 34" />
      </div>

      <LoginForm />
    </main>
  );
};

export default LoginPage;