import type { Metadata } from "next";
import { han_sans_neo } from "@/app/styles/fonts";
import "@/app/styles/globals.css";
import { cn } from "./utils/cn";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0"
      />
      <body
        className={cn(
          han_sans_neo.variable,
          "w-screen",
          "h-screen",
          "sm:container",
          "m-auto"
        )}
      >
        {children}
      </body>
    </html>
  );
}
