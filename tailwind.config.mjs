/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(75.86% 65.75% at 75.32% 21.92%, rgba(241, 204, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
      boxShadow: {
        'inset-custom': 'inset -99px 198px 145px -60px rgba(241, 204, 255, 0.40)',
      },
      screens: {
        'thirteenPx': '1320px',
      },  
    },
  },
  plugins: [],
};
