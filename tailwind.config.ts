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
      'stone': {
        200: '#e7e5e4',
        500: '#78716c',
        700: '#44403c',
        900: '#1c1917',
        950: '#0c0a09'
      },
      'amber' : '#92400e',
      'emerald' :'#022c22',
      'rose' :'#4c0519'
    },
    },
  },
  plugins: [],
};
export default config;
