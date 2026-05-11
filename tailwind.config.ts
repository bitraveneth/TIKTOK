import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E22A2A",
          "red-dark": "#B11E1E",
          "red-soft": "#F46A6A",
          cream: "#FFF3E2",
          "cream-deep": "#F7E6CC",
          ink: "#1A0606",
          "ink-soft": "#3A1A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        "brand-lg": "0 30px 60px -20px rgba(226, 42, 42, 0.35)",
        "brand-card": "0 20px 40px -20px rgba(26, 6, 6, 0.25)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
