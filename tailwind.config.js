module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.tsx",
    "./components/**/*.ts",
    "./pages/**/*.tsx",
    "./pages/**/*.ts",
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
      colors: {
        black: "#2f2e41",
        white: "#ffffff",
        primary: {
          100: "#eeedff",
          200: "#dcdbff",
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
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover", "group-focus"],
    textColor: ["responsive", "hover", "focus", "group-hover", "group-focus"],
  },
  plugins: [],
};
