/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0C4A6E',
        accent: '#EA580C',
        surface: '#F7F9FC',
      },
      fontFamily: {
        sans: ['Poppins', 'Segoe UI', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.04), 0 8px 32px rgba(12,74,110,0.07)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.07), 0 20px 48px rgba(12,74,110,0.13)',
        sidebar: '1px 0 0 0 #e2e8f0',
      },
    },
  },
  plugins: [],
}
