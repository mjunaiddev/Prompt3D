import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        Expletus_Sans: ["Expletus_Sans", "sans-serif"], // Your custom font
      },
      container: {
        padding: "20px",
        center: true,
      },
      backgroundImage: {
        HeroBg: "url('/assets/herobg.png')",
        FooterBg: "url('/assets/footer-bg.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
