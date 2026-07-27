import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAFAF7",
        cream: "#F5F0E8",
        "green-forest": "#1B4332",
        "green-light": "#2D6A4F",
        gold: "#C9A84C",
        "gold-light": "#E8C96A",
        charcoal: "#2D2D2D",
        muted: "#6B7280",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
