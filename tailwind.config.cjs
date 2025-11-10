module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        // default palette A (you can change easily)
        primary: {
          DEFAULT: '#4f46e5' // indigo-600
        },
        accent: {
          DEFAULT: '#10b981' // emerald-500
        }
      }
    }
  },
  plugins: [],
}
