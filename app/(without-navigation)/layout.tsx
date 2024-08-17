import type { Metadata } from "next";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: "Ping!",
  description: "welcome to ping!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function WithoutNavigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
