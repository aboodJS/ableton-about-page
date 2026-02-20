/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        autofit: 'repeat(auto-fit, minmax(200px, 1fr))',
        autofill: 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
}
