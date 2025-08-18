/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#C5A9EE",
        grayish: "#E5E5E5",
      },
      backgroundImage: {
        'lavender-gradient': 'linear-gradient(to bottom, #D7D3EA, #E5E5E5)',
      },
      fontFamily: {
        freigeist: ['Freigeist', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.1em',
      },
      fontSize: {
        '64px': '64px',
        '96px': '96px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

module.exports = config