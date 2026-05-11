module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        violet: {
          particles: 'rgba(168, 85, 247, 0.8)'
        }
      },
      animation: {
        'text-pan': 'text-pan 4s ease-in-out infinite', // Más lento (4s)
        'glow-subtle': 'glow-subtle 3s ease-in-out infinite alternate', // Más sutil
      },
      keyframes: {
        'text-pan': {
          '0%, 100%': { 'background-position': '0% center' },
          '50%': { 'background-position': '100% center' },
        },
        'glow-subtle': {
          'from': { 'text-shadow': '0 0 2px rgba(255, 255, 255, 0.3)' }, // Muy tenue
          'to': { 'text-shadow': '0 0 8px rgba(255, 255, 255, 0.6)' }, // Sutil (no blanco puro)
        },
      }
    },
  },
  plugins: [],
};
