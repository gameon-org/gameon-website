/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-slider": "infiniteSlider 20s linear infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },

      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-500px * 5))",
          },
        },
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        // Varela: ["var(--font-varela)"],
        Varela: ['"Varela Round"', "sans-serif"],
        Crete: ['"Crete Round"', "serif"],
        // Agbalumo: ["var(--font-agbalumo)"],
        // Agbalumo: ["var(--font-family-agbalumo)"],
      },
    },
  },
  plugins: [nextui()],
};
