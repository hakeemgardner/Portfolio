/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        GreenSheen: "#5FB4A2",
        JapaneseIndigo: "#203A4C",
        Onyx: "#33323D",
        Lotion: "#FAFAFA",
        BrightGray: "#EAEAEB",
        DeepCarminePink: "#F43030",
        LightGrey: "#EAEAEB",
      },
      fontFamily: {
        IbarraRealNova: ["Ibarra Real Nova", "serif"],
        PublicSans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
