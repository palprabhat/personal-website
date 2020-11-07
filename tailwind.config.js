module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.jsx",
    "./components/**/*.js",
    "./pages/**/*.jsx",
    "./pages/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Quattrocento Sans", "sans-serif"],
    },
    extend: {
      spacing: {
        9: "2.25rem",
        11: "2.75rem",
      },
      flexGrow: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
      },
      colors: {
        black: "#2f2e41",
        white: "#ffffff",
        primary: {
          100: "#eeedff",
          200: "#c3c0ff",
          300: "#a6a0ff",
          400: "#8881ff",
          500: "#6a61ff",
          600: "#554ecc",
          700: "#403a99",
          800: "#2a2766",
          900: "#151333",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
