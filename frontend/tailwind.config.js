/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        imperial: {
          950: '#23040A',
          900: '#380811',
          800: '#4A0E17', // Deep Royal Velvet Wine
          700: '#5F1420',
          600: '#751B2A',
          500: '#94263A',
        },
        gold: {
          100: '#FDF7E7',
          200: '#F9ECC7',
          300: '#F0D896',
          400: '#E5C368',
          500: '#D4AF37', // Antique Royal Gold
          600: '#B89228',
          700: '#96741B',
          800: '#755811',
        },
        parchment: {
          50: '#FDFBF9',
          100: '#FAF7F2',
          200: '#F4ECE0',
          300: '#EAE0CF',
        }
      },
      fontFamily: {
        'cinzel-dec': ['"Cinzel Decorative"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'Georgia', 'serif'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F9ECC7 0%, #D4AF37 50%, #96741B 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FDF7E7 50%, #D4AF37 100%)',
        'velvet-gradient': 'linear-gradient(180deg, #4A0E17 0%, #30080E 100%)',
      }
    },
  },
  plugins: [],
}
