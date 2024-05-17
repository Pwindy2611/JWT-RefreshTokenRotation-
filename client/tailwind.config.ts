import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'nav-text-color': '#71869d',
        'nav-hover-text-color': '#35509a',
        'login-hover-box-color': '#2b417e',
        'copyright-text-color': '#677788',
        'swiper-color': '#007aff',
        'star-color': '#ffad3b',
        'tag-text-color': '#35509a',
        'tag-bg-color': '#f0f8ff',
        'price-color': '#3cb46e',
        'course-border-color': '#e0e0e0',
        'exam-text-color': '#677788',
        'group-details-text-color': '#1a1a1a',
        'input-color':'#bdc5d1',
        'input-focus-color': '#7c93d2',
        'tag-search-text-color': '#e7eaf3',
        'tag-search-bg-color': '#e8f2ff',
        'tag-search-transition-color': '#8c98a4',
        'exam-bg-color':'#f8f9fa',
        'pagination-bg-color-hover': '#f8fafd',
        'fb-text-color':'#3b5998',
        'gg-text-color':'#db4a39',
        'user-public-text-bg-color': '#d1e2ff',
        'process-active-bg-color': 	'#32CD32',
        'alert-text-color': '#1f5e39',
        'alert-flashcard-color': '#d8f0e2',
        'economy-price-text-color': '#e43a45',
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config