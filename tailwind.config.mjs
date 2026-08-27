/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,ts,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        paper: "var(--color-paper)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        brand: {
          DEFAULT: "var(--color-brand)",
          dark: "var(--color-brand-dark)",
        },
        accent: "var(--color-accent)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
