import React from "react";
import { LogoBlack } from "@/assets/icons";
import { cn } from "@/utils/cn";
import SignUpForm from "./_components/SignUpForm";
const SignUpPage = () => {
  return (
    <section className={cn("px-4", "h-content-height")}>
      <div className={cn("py-10", "flex", "justify-center", "mb-10")}>
        <LogoBlack aria-hidden="true" focusable="false" />
      </div>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
