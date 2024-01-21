const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#ffffff",
        yellow: "#F0D898",
        "sky-blue": "#CBDCE3",
        red: "#C06A45",
        "dark-blue": "#5B6D93",
        green: "#8C8A7B",
        black: "#545454",
      },
    },
  },
  plugins: [],
};
