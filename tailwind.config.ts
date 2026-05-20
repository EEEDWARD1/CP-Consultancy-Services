import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#00203a",
        "brand-accent": "#e4b253",
        "brand-dark": "#242329",
        "brand-ink": "#111827",
        "brand-muted": "#4b5563",
        "brand-soft": "#f7f7f4",
        "brand-surface": "#fbfaf7",
        "brand-line": "#e5e7eb",
        "brand-accent-soft": "#fff7e6"
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        body: ["var(--font-open-sans)", "Open Sans", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 32, 58, 0.12)",
        lift: "0 24px 80px rgba(0, 32, 58, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
