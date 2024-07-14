import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        wording: "var(--wording)",
        background: "var(--background)",
        muted: "var(--muted)",
        selection: "var(--selection)",
      },
      keyframes: {
        rainbow: {
          "0%": {
            color: "#52ff00",
          },
          "25%": {
            color: "#4afff4",
          },
          "50%": {
            color: "#ccff00",
          },
          "75%": {
            color: "#ff002e",
          },
          "100%": {
            color: "#5200ff",
          },
        },
      },
      animation: {
        rainbow: "rainbow linear 5s infinite alternate",
      },
      fontFamily: {
        inherit: "inherit",
        sans: [
          "IBM Plex Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.5rem",
        h4: "1.25rem",
        h5: "0.8125rem",
        p: "0.875rem",
        small: "0.75rem",
        tiny: "0.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
