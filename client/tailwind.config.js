import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        permanent: ['"Permanent Marker"', ...defaultTheme.fontFamily.sans],
        sedan: ['"Sedan SC"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
