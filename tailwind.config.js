/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        gray: {
          50: "#fcfafa",
          100: "#ededed",
          200: "#bfbfbf",
          300: "#a6a6a6",
          400: "#8c8c8c",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#262626",
          900: "#141414",
        },
        brand: {
          50: "#e5f3ff",
          100: "#c4d7ef",
          200: "#a1bdde",
          300: "#7da3ce",
          400: "#5988bf",
          500: "#406fa6",
          600: "#305682",
          700: "#213d5e",
          800: "#0f253b",
          900: "#0a1a29",
        },
      },
    },
  },
  plugins: [],
};
