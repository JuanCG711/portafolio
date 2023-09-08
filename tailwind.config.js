/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'm-plus-rounded-1c': ['M PLUS Rounded 1c', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
}

