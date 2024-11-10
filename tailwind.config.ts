import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc5c5",
          300: "#ff9d9d",
          400: "#ff6464",
          500: "#ff3d3d",
          600: "#ed1515",
          700: "#c80d0d",
          800: "#a50f0f",
          900: "#881414",
          950: "#4b0404",
        },

        yellow: {
          50: "#ffffeb",
          100: "#fdffc0",
          200: "#ffff85",
          300: "#fff73f",
          400: "#ffe80b",
          500: "#f4ce00",
          600: "#d3a000",
          700: "#a87200",
          800: "#8a5909",
          900: "#75480e",
          950: "#452603",
        },

        green: {
          50: "#f1fdf0",
          100: "#ddfcdc",
          200: "#bdf7bb",
          300: "#89ef86",
          400: "#4cdf49",
          500: "#25c922",
          600: "#17a415",
          700: "#168015",
          800: "#166516",
          900: "#145315",
          950: "#052e06",
        },

        blue: {
          50: "#eef4ff",
          100: "#d9e5ff",
          200: "#bcd2ff",
          300: "#8eb7ff",
          400: "#598fff",
          500: "#3d6eff",
          600: "#1b43f5",
          700: "#1430e1",
          800: "#1728b6",
          900: "#19288f",
          950: "#141a57",
        },

        black: {
          50: "#f9f9f9",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
      fontSize: {
        "2xs": ["0.625rem", "16px"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sansNeo: "var(--font-sans-neo)",
      },
      boxShadow: {
        small: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
        normal: "0px 4px 8px 0px rgba(0, 0, 0, 0.25) inset",
        nav: "0px -2px 4px 0px rgba(0, 0, 0, 0.10)",
      },
      height: {
        "content-height": "calc(100% - 3.5rem)",
      },
    },
    backgroundColor: ({ theme }) => ({
      ...theme("colors"),
    }),
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".caption": {
          fontSize: theme("fontSize.xs"),
          lineHeight: theme("lineHeight.4"),
        },
        ".description": {
          fontSize: theme("fontSize.sm"),
          lineHeight: theme("lineHeight.6"),
        },
        ".body3": {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.6"),
        },
        ".body2": {
          fontSize: theme("fontSize.lg"),
          lineHeight: theme("lineHeight.6"),
        },
        ".body1": {
          fontSize: theme("fontSize.xl"),
          lineHeight: theme("lineHeight.8"),
        },
        ".headline": {
          fontSize: theme("fontSize.2xl"),
          lineHeight: theme("lineHeight.8"),
        },
        ".title2": {
          fontSize: theme("fontSize.3xl"),
          lineHeight: theme("lineHeight.10"),
        },
        ".title1": {
          fontSize: theme("fontSize.4xl"),
          lineHeight: "2.875rem",
        },
        ".scrollbar-hide": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".input-base": {
          border: `1px solid ${theme("colors.black.200")}`,
          borderRadius: theme("borderRadius.DEFAULT"),
          padding: `${theme("spacing.4")} ${theme("spacing.6")}`,
          width: theme("width.full"),
          fontSize: theme("fontSize.sm"),
          lineHeight: theme("lineHeight.6"),
          fontWeight: theme("fontWeight.bold"),
          outline: "none",
          "&::placeholder": {
            fontSize: theme("fontSize.sm"),
            lineHeight: theme("lineHeight.6"),
            color: theme("colors.black.200"),
          },
        },
      });
    }),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
