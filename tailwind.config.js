/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: " var(--font-roboto)",
      },
      colors: {
        primary: {
          tomato: "hsl(4, 100%, 67%)",
        },

        neutral: {
          dark: "hsl(234, 29%, 20%)",
          charcoal: "hsl(235, 18%, 26%)",
          grey: "hsl(231, 7%, 60%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
