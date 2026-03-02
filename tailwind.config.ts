import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        neutral1: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        primary1: {
          50: "var(--color-primary-1-50)",
          100: "var(--color-primary-1-100)",
          200: "var(--color-primary-1-200)",
          300: "var(--color-primary-1-300)",
          400: "var(--color-primary-1-400)",
          500: "var(--color-primary-1-500)",
          600: "var(--color-primary-1-600)",
          700: "var(--color-primary-1-700)",
          800: "var(--color-primary-1-800)",
          900: "var(--color-primary-1-900)",
        },

        primary2: {
          50: "var(--color-primary-1-50)",
          100: "var(--color-primary-1-100)",
          200: "var(--color-primary-1-200)",
          300: "var(--color-primary-1-300)",
          400: "var(--color-primary-1-400)",
          500: "var(--color-primary-1-500)",
          600: "var(--color-primary-1-600)",
          700: "var(--color-primary-1-700)",
          800: "var(--color-primary-1-800)",
          900: "var(--color-primary-1-900)",
        },
        secondary1: {
          100: "var(--color-secundary-1-100)",
          200: "var(--color-secundary-1-200)",
          300: "var(--color-secundary-1-300)",
          400: "var(--color-secundary-1-400)",
          50: "var(--color-secundary-1-50)",
          500: "var(--color-secundary-1-500)",
          600: "var(--color-secundary-1-600)",
          700: "var(--color-secundary-1-700)",
          800: "var(--color-secundary-1-800)",
          900: "var(--color-secundary-1-900)",
        },

        // secondary2: {
        //   100: "var(--color-secundary-2-100)",
        //   200: "var(--color-secundary-2-200)",
        //   300: "var(--color-secundary-2-300)",
        //   400: "var(--color-secundary-2-400)",
        //   50: "var(--color-secundary-2-50)",
        //   500: "var(--color-secundary-2-500)",
        //   600: "var(--color-secundary-2-600)",
        //   700: "var(--color-secundary-2-700)",
        //   800: "var(--color-secundary-2-800)",
        //   900: "var(--color-secundary-2-900)",
        // },

        error: {
          100: "var(--color-error-100)",
          200: "var(--color-error-200)",
          300: "var(--color-error-300)",
          400: "var(--color-error-400)",
          50: "var(--color-error-50)",
          500: "var(--color-error-500)",
          600: "var(--color-error-600)",
          700: "var(--color-error-700)",
          800: "var(--color-error-800)",
          900: "var(--color-error-900)",
        },

        info: {
          100: "var(--color-info-100)",
          200: "var(--color-info-200)",
          300: "var(--color-info-300)",
          400: "var(--color-info-400)",
          50: "var(--color-info-50)",
          500: "var(--color-info-500)",
          600: "var(--color-info-600)",
          700: "var(--color-info-700)",
          800: "var(--color-info-800)",
          900: "var(--color-info-900)",
        },

        success: {
          100: "var(--color-success-100)",
          200: "var(--color-success-200)",
          300: "var(--color-success-300)",
          400: "var(--color-success-400)",
          50: "var(--color-success-50)",
          500: "var(--color-success-500)",
          600: "var(--color-success-600)",
          700: "var(--color-success-700)",
          800: "var(--color-success-800)",
          900: "var(--color-success-900)",
        },

        warning: {
          100: "var(--color-warning-100)",
          200: "var(--color-warning-200)",
          300: "var(--color-warning-300)",
          400: "var(--color-warning-400)",
          50: "var(--color-warning-50)",
          500: "var(--color-warning-500)",
          600: "var(--color-warning-600)",
          700: "var(--color-warning-700)",
          800: "var(--color-warning-800)",
          900: "var(--color-warning-900)",
        },
        "form-background": "#FFFFFF22",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        spotlightV2: "spotlightV2 2s ease 1s 1 forwards",
        FadeIn: "FadeIn 200ms linear 1",
        FadeOut: "FadeOut 200ms linear 1",
        slideLeft: "slideLeft 1s ease forwards",
        RadarRotation: "RadarRotation 5s linear infinite forwards",
        "left-scroll": "infinite-scroll 15s linear infinite",
        upsideDown: "upsideDown .2s linear forwards",
      },
      keyframes: {
        upsideDown: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(180deg)",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        spotlightV2: {
          "0%": {
            opacity: "0",
            transform: "translate(0%, -62%) scale(0.1)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0%, 0%) scale(1)",
          },
        },
        FadeIn: {
          "0%": {
            opacity: "0",
            display: "none",
          },
          "1%": {
            opacity: "0",
            display: "block",
          },
          "100%": {
            opacity: "1",
            display: "block",
          },
        },
        FadeOut: {
          "0%": {
            opacity: "1",
            display: "block",
          },
          "99%": {
            opacity: "0",
            display: "none",
          },
          "100%": {
            opacity: "0",
            display: "none",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        RadarRotation: {
          "0%, 100%": {
            transform: "rotate(0deg)",
            opacity: "0",
          },
          "20%": {
            opacity: ".7",
          },
          "60%": {
            opacity: ".7",
          },
          "80%": {
            transform: "rotate(180deg)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
