/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#164E63',
        accent: '#EA580C',
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Poppins', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(2, 132, 199, 0.08)',
      },
    },
  },
  plugins: [],
}
