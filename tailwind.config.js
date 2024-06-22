/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      white: {
        100: "#EEEEF2",
        200: "#FFFFFF",
      },
      dark: {
        100: "#101418",
        200: "#181C20",
      },
      midnight: {
        green: "#004953",
        teal: "#003840",
      },
    },
    screens: {
      xs: "320px", // For Extra small devices (portrait phones)
      sm: "640px", // For Small devices (landscape phones)
      md: "768px", // For Medium devices (tablets)
      lg: "1024px", // For Large devices (desktops)
      xl: "1280px", // For Extra large devices (large desktops)
      "2xl": "1536px", // For 2X large devices (ultra large desktops)
      "3xl": "1920px", // For 3X large devices (full HD monitors)
      "4xl": "2560px", // For 4X large devices (QHD, WQHD monitors)
      "5xl": "3840px", // For 5X large devices (4K UHD monitors)
    },
  },
  plugins: [require("daisyui")],
}
