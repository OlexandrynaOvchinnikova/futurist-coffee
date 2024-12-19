/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
         pulse: 'pulse-custom 2s infinite',
         scalePulse: 'scalePulse 2s infinite',
      },
      keyframes: {
        'pulse-custom': {
          '0%, 100%': {opacity: 1},
          '50%': {opacity: 0.7},
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}

