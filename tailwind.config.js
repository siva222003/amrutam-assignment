/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        nunito: "Nunito",
        dinpro: "DINPro",
      },
      colors: {
        primary: "#3A643B",
      },
    },
  },
  plugins: [],
};
