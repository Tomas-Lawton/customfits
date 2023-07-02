/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        secondarytext: "#898989",
        primary: "#3000ee",
        gray: {
          100: "#797979",
          200: "rgba(0, 0, 0, 0.75)",
          300: "rgba(0, 0, 0, 0.5)",
        },
        black: "#000",
        darkorange: "#f89500",
        silver: "#bbb",
        whitesmoke: "#f0f0f0",
        darkslategray: {
          100: "#474747",
          200: "#393436",
          300: "#2d2d2d",
        },
        gainsboro: {
          100: "#e5dfdb",
          200: "#d9d9d9",
        },
        "color-50": "#eaebec",
        lightgray: "#d2d2d2",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
        montserrat: "Montserrat",
        "old-standard-tt": "'Old Standard TT'",
        times: "Times",
      },
      borderRadius: {
        "2xs": "11px",
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "3xl": "22px",
      lg: "18px",
      base: "16px",
      "5xl": "24px",
      "23xl": "42px",
      "29xl": "48px",
      smi: "13px",
      "6xl": "50px",
      sm: "14px",
      xs: "10px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
