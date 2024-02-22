/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        // mytheme: {
        //   primary: "#00d3dd",
        //   secondary: "#009f00",
        //   accent: "#00a400",
        //   neutral: "#332922",
        //   "base-100": "#12242e",
        //   info: "#0094ff",
        //   success: "#abfc00",
        //   warning: "#ffc600",
        //   error: "#e6002c",
        // },
        mytheme: {
          primary: "#00bff5",

          secondary: "#009300",

          accent: "#00a9b7",

          neutral: "#03231c",

          "base-100": "#001012",

          info: "#009dff",

          success: "#009400",

          warning: "#d15200",

          error: "#d7001a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
