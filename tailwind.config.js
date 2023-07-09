/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          800: "linear-gradient(180deg, rgba(32, 14, 91, 0.2) 0%, rgba(108, 26, 213, 0.2) 100%),#1e0e59",
          900: "#0f0933",
        },
        blue: {
          700: "#2390ff !important",
        },
      },
      fontFamily: {
        oxaminium: ['var(--font-oxaminium)']
      }
    },
  },
  plugins: [],
};
