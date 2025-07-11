/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ✅ Audrey font added
      fontFamily: {
        audrey: ['"Audrey"', "serif"],
      },
      animation: {
        "pulse-pop": "pulsePop 1.5s infinite ease-in-out",
      },
      keyframes: {
        pulsePop: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },

      screens: {
        "mobile-sm": "320px",
        "mobile-md": "375px",
        "mobile-lg": "425px",
        tablet: "768px",
        "laptop-sm": "1026px",
        "laptop-lg": "1440px",
        "4k": "2560px",
      },

      colors: {
        color: {
          pink: "#ce8bcf",
          darkBlue: "#00274e",
          lightBlue: "#0064e6 ",
          gold: "#ffb303",
          darkMaroon: "#9E1F63",
          green: "#27bb63",
          brown: "#636155",
          paleWhite: "#f6f6f6",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },

      letterSpacing: {
        tagline: ".15em",
      },

      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },

      opacity: {
        15: ".15",
      },

      transitionDuration: {
        DEFAULT: "200ms",
      },

      transitionTimingFunction: {
        DEFAULT: "linear",
      },

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },

      borderWidth: {
        DEFAULT: "0.0625rem",
      },

      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply content-center max-w-[100%] mx-auto px-15 md:px-10 lg:px-15 xl:max-w-[119.5rem]":
            {},
        },
        ".h1": {
          "@apply text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[4.25rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.975rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply text-xs tracking-tagline uppercase": {},
        },
        ".quote": {
          "@apply text-lg leading-normal": {},
        },
        ".button": {
          "@apply text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
