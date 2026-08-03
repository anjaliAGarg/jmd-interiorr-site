/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2F5D50',
        sand: '#DCC8A1',
        bg: '#FAF8F4',
        text: '#1D1D1D',
        muted: '#666666',
        border: '#E9E5DD',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(47, 93, 80, 0.08)',
      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
}
