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
        background: "#0D0F12",
        backgroundSoft: "#11141A",
        surface: "#171A1F",
        surfaceElevated: "#1D2028",
        surfaceSubtle: "#20232C",
        primaryGold: "#E0B24F",
        primaryGoldSoft: "#F1D38A",
        primaryGoldDeep: "#BE8F2F",
        accentTeal: "#7AB8A6",
        accentMutedTeal: "#5C9182",
        borderSubtle: "#262A34",
        borderStrong: "#323743",
        textPrimary: "#F7F7F8",
        textSecondary: "#C4C4CC",
        textMuted: "#9A9AA5",
        textOnGold: "#171717",
      },
      fontFamily: {
        display: ["var(--font-inter-tight)", "Inter Tight", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        displayXL: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        display: ["3rem", { lineHeight: "1.08", letterSpacing: "-0.04em" }],
        h1: ["2.4rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        h2: ["1.9rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h3: ["1.55rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h4: ["1.3rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        bodyLG: ["1.05rem", { lineHeight: "1.6" }],
        body: ["0.98rem", { lineHeight: "1.7" }],
        caption: ["0.8rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
        overline: ["0.75rem", { lineHeight: "1.3", letterSpacing: "0.14em" }],
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "14px",
        lg: "18px",
        xl: "24px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.35)",
        subtle: "0 4px 16px rgba(0, 0, 0, 0.25)",
        floating: "0 24px 60px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0B0C10 0%, #171A1F 45%, #242938 100%)",
        "gradient-primary": "linear-gradient(90deg, #F1D38A 0%, #E0B24F 50%, #BE8F2F 100%)",
        "gradient-primary-hover": "linear-gradient(90deg, #F5DF9E 0%, #E4BB53 50%, #C69634 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(224,178,79,0.18) 0%, rgba(12,16,22,0.0) 55%, rgba(122,184,166,0.12) 100%)",
        "gradient-cta": "linear-gradient(135deg, #0B0C10 0%, #171A1F 50%, rgba(224,178,79,0.08) 100%)",
      },
      maxWidth: {
        container: "1240px",
      },
      transitionDuration: {
        fast: "120ms",
        default: "180ms",
        emphasized: "240ms",
      },
      transitionTimingFunction: {
        emphasized: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        fadeInUp: "fadeInUp 0.8s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

