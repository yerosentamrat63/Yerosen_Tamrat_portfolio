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
        bg:      "#03050d",
        bg2:     "#020409",
        bg3:     "#060916",
        bg4:     "#0a0f22",
        accent:  "#9ad4d6",
        accent2: "#7bbec0",
        lav:     "#dbcbd8",
        pur:     "#564787",
        pur2:    "#7060b0",
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-up":   "fadeUp 0.6s both",
        "slide-r":   "slideR 0.7s 0.2s both",
        "blink":     "blink 1s step-end infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "ticker":    "ticker 26s linear infinite",
      },
      keyframes: {
        fadeUp:   { from: { opacity: "0", transform: "translateY(28px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        slideR:   { from: { opacity: "0", transform: "translateX(48px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        blink:    { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        pulseDot: { "0%,100%": { boxShadow: "0 0 0 0 rgba(154,212,214,0.55)" }, "50%": { boxShadow: "0 0 0 6px rgba(154,212,214,0)" } },
        ticker:   { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};
export default config;
