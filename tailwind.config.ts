import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Playfair Display', 'serif'],
      secondary: ['Mulish', 'sans-serif'],
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },

    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        accent: '#EEF7F9',
      },
      height: {
        'screen-dvh': '100dvh',
        'screen-svh': '100svh',
      },
      width: {
        'screen-dvw': '100dvw',
        'screen-svw': '100svw',
        
      },
    },
  },
  plugins: [],
};
export default config;
