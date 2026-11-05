/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        sage: "hsl(var(--sage))",
        "sage-deep": "hsl(var(--sage-deep))",
        "sage-soft": "hsl(var(--sage-soft))",
        cream: "hsl(var(--cream))",
        gold: "hsl(var(--gold))",
        "gold-soft": "hsl(var(--gold-soft))",
        rose: "hsl(var(--rose))",
        "rose-deep": "hsl(var(--rose-deep))",
        ink: "hsl(var(--ink))",
      },
      fontFamily: {
        script: ["Great Vibes", "cursive"],
        "serif-display": ["Cormorant Garamond", "serif"],
        cinzel: ["Cinzel", "serif"],
      },
      boxShadow: {
        elegant: "0 20px 60px -20px hsl(95 25% 25% / 0.25)",
        soft: "0 8px 30px -10px hsl(25 30% 18% / 0.15)",
        gold: "0 10px 40px -10px hsl(36 55% 45% / 0.4)",
      },
      keyframes: {
        "float-petal": {
          "0%": { transform: "translateY(-10vh) translate(0) rotate(0)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "90%": { opacity: "0.9" },
          "100%": { transform: "translateY(110vh) translate(40px) rotate(360deg)", opacity: "0" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-12px) rotate(8deg)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        "envelope-open": {
          "0%": { transform: "scale(1) rotateX(0)" },
          "50%": { transform: "scale(1.05) rotateX(-15deg)" },
          "100%": { transform: "scale(1.4) rotateX(-90deg)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "float-petal": "float-petal linear infinite",
        drift: "drift 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "envelope-open": "envelope-open 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-up": "fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1.2s ease-out both",
      },
    },
  },
  plugins: [],
};

