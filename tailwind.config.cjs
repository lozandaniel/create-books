/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        next:
          '0 0 0 1px rgba(0,0,0,.07), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)'
      }
    }
  },
  plugins: []
};
