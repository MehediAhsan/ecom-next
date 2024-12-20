import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#Ff3e20",
        secondary: "#232F3E",
        third: "#666666",
        fourth: "#F7F7F7",
      },
    },
  },
  plugins: [],
} satisfies Config;
