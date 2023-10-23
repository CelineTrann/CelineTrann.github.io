/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
      },
      fontFamily: {
        heading: 'Merriweather Sans',
        body: 'Roboto',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}

