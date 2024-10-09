/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'cursive'], 
        comic: ["Comic Neue", 'cursive'],
        monserrat: ["Montserrat", 'sans-serif'],
        nunito: ["Nunito", 'sans-serif']
      },
    },
  },
  plugins: [],
};
