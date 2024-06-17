import { LogoWhite } from "@/assets/icons";
import { cn } from "@/utils/cn";
import React from "react";
import Login from "./_component/Login";

const LoginPage = () => {
  return (
    <main className={cn("px-4")}>
      <div className={cn("py-10", "flex", "justify-center", "mb-10")}>
        <LogoWhite width="4.9375rem" height="2.125rem" viewBox="0 0 79 34" />
      </div>

      <Login />
    </main>
  );
};

export default LoginPage;
