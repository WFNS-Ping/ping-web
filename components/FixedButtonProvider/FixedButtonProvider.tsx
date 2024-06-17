"use client";
import React from "react";
import GlobalPortal from "../GlobalPortal";

type Props = {
  children: React.ReactNode;
};

const FixedButtonProvider = ({ children }: Props) => {
  return <GlobalPortal.Provider>{children}</GlobalPortal.Provider>;
};

export default FixedButtonProvider;
