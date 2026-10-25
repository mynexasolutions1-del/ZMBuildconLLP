/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#e8b628",
        ink: "#121212",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "none" },
        },
        fadeDown: {
          from: { opacity: "0", transform: "translateY(-24px)" },
          to: { opacity: "1", transform: "none" },
        },
        kenburns: {
          from: { transform: "scale(1.15)" },
          to: { transform: "scale(1)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        "fade-down": "fadeDown 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        kenburns: "kenburns 14s ease-out both",
        floaty: "floaty 5s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
