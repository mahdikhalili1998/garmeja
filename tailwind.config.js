/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["IRANSansXFaNum"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { textShadow: "0 0 5px white" },
          "50%": { textShadow: "0 0 20px white" },
        },
      },
      animation: {
        blink: "blink 2s ease-in-out infinite",
      },
      screens: {
        370: "370px",
      },
    },
  },
  plugins: [],
};
