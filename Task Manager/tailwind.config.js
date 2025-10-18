/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '.dark'],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
