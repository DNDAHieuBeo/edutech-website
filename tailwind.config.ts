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
        buttonbackground: "#1A73E8",
        maincolor: "#B7D7EA",
        backgroundcolor: 'bg-gradient-to-r from-black via-blue-900 to-blue-500'
      },
      fontFamily: {
        space: ['var(--font-space-grotesk)']
      },

    },
  },
  plugins: [],
};
export default config;
