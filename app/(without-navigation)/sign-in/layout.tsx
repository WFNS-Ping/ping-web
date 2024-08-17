import MSWComponent from "@/components/MSWComponent";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SignInLayout = ({ children }: Props) => {
  return <MSWComponent>{children}</MSWComponent>;
};

export default SignInLayout;
