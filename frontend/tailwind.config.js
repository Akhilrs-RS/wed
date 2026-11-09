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
        velvet: {
          950: '#1E070B',
          900: '#300C13',
          800: '#3B0E17',
          700: '#46141D',
          600: '#5E1422',
          500: '#8B2535',
        },
        espresso: {
          900: '#2D2421',
          800: '#3D322E',
          700: '#52433D',
          600: '#695750',
          500: '#826E65',
        },
        gold: {
          50: '#FAF6EE',
          100: '#F5ECDB',
          200: '#EAD9B8',
          300: '#DFB88C',
          400: '#D2AB63',
          500: '#C5A059', // Antique Royal Gold
          600: '#B08842',
          700: '#946D32',
          800: '#735226',
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
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        jost: ['"Jost"', '"Montserrat"', 'system-ui', 'sans-serif'],
        sans: ['"Jost"', '"Montserrat"', 'system-ui', 'sans-serif'],
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
