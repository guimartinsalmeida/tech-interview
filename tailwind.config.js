/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', 
        secondary: '#9333EA', 
        accent: '#22C55E', 
        'button-bg': '#1f2937', 
        'button-hover': '#374151', 
        'button-focus': '#9CA3AF', 
        'accent-dark': '#16A34A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3d': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
        '3d-hover': '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        'button-width': '12rem', 
        'button-height': '3rem', 
      },
    },
  },
  plugins: [],
}
