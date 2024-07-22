import type { Metadata } from "next";
import { han_sans_neo } from "@/styles/fonts";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import FixedButtonProvider from "@/components/FixedButtonProvider";
import Modals from "@/components/Modals/Modals";
export const metadata: Metadata = {
  title: "Ping!",
  description: "welcome to ping!",
  icons: {
    icon: "/favicon.ico",
  },
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={cn(
          han_sans_neo.variable,
          "w-screen",
          "h-screen",
          "sm:container",
          "m-auto"
        )}
      >
        <FixedButtonProvider>
          {children}
          <Modals />
        </FixedButtonProvider>
      </body>
    </html>
  );
}
