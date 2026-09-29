/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#070A14",
        abyss: "#0E0B24",
        electric: "#7C3AED",
        crimson: "#F43F5E",
        neon: "#22D3EE",
        gold: "#FBBF24",
        lavender: "#C7C9E6",
      },
      fontFamily: {
        cinzel: ["Cinzel", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
