import localFont from "next/font/local";

const han_sans_neo = localFont({
  src: [
    {
      path: "../public/font/SpoqaHanSansNeo-Thin.ttf",
      weight: "100",
    },
    {
      path: "../public/font/SpoqaHanSansNeo-Light.ttf",
      weight: "200",
    },
    {
      path: "../public/font/SpoqaHanSansNeo-Regular.ttf",
      weight: "300",
    },
    {
      path: "../public/font/SpoqaHanSansNeo-Medium.ttf",
      weight: "400",
    },
    {
      path: "../public/font/SpoqaHanSansNeo-Bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-sans-neo",
});

export { han_sans_neo };
