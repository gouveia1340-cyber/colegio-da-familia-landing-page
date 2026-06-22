import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        family: {
          burgundy: "#3b0f16",
          wine: "#762325",
          ruby: "#8f2d38",
          blush: "#f4e7e4",
          ink: "#211819",
          gold: "#c99a4a",
          sand: "#f3e4cf",
          cream: "#fbf7ee",
          cocoa: "#8a5e4b",
        },
      },
      boxShadow: {
        soft: "0 20px 60px -36px rgba(59, 15, 22, 0.45)",
        glow: "0 18px 50px -24px rgba(118, 35, 37, 0.48)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 700ms ease-out both",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
