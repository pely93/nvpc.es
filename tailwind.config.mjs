/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,ts,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        "ink-faint": "var(--color-ink-faint)",
        paper: "var(--color-paper)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        brand: {
          DEFAULT: "var(--color-brand)",
          dark: "var(--color-brand-dark)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          tint: "var(--color-accent-tint)",
        },
        "on-brand": {
          DEFAULT: "var(--color-on-brand)",
          dim: "var(--color-on-brand-dim)",
          muted: "var(--color-on-brand-muted)",
          faint: "var(--color-on-brand-faint)",
          rule: "var(--color-on-brand-rule)",
        },
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
