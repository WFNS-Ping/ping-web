import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Ping!",
  description: "welcome to ping!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function WithNavigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
}
