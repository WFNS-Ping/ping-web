import React from "react";
import { LogoWhite } from "@/assets/icons";
import { cn } from "@/utils/cn";
import SignUpForm from "./_components/SignUpForm";
const SignUpPage = () => {
  return (
    <main className={cn("px-4")}>
      <div className={cn("py-10", "flex", "justify-center", "mb-10")}>
        <LogoBlack aria-hidden="true" focusable="false" />
      </div>
      <SignUpForm />
    </main>
  );
};

export default SignUpPage;
