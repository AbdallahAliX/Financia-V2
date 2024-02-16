/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00d3dd",

          secondary: "#009f00",

          accent: "#00a400",

          neutral: "#332922",

          "base-100": "#12242e",

          info: "#0094ff",

          success: "#abfc00",

          warning: "#ffc600",

          error: "#e6002c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
