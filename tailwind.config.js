/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tomato': 'hsl(4, 100%, 67%)',
        'Dark-Slate-Grey': 'hsl(234, 29%, 20%)',
        'Charcoal-Grey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
    },
    backgroundImage: {
      'gradient-1': 'linear-gradient(to top, #FF527B, #FF6A3A)',
    }
  },
  plugins: [],
}
}