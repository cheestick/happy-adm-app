/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maxyms: "#dbaabd",
      },
      fontSize: {
        "10xl": [
          "14rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.025rem",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
