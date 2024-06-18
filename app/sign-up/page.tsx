import React from "react";
import { LogoWhite } from "@/assets/icons";
import { cn } from "@/utils/cn";
import SignUpForm from "./_components/SignUpForm";
const SignUpPage = () => {
  return (
    <main className={cn("px-4")}>
      <div className={cn("py-10", "flex", "justify-center", "mb-10")}>
        <LogoWhite width="4.9375rem" height="2.125rem" viewBox="0 0 79 34" />
      </div>
      <SignUpForm />
    </main>
  );
};

export default SignUpPage;
