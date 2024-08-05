"use client";
import useInitMSW from "@/hooks/useInitMSW";
import React from "react";

const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  useInitMSW();
  return <>{children}</>;
};

export default MSWComponent;
