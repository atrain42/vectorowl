/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '5xl': '40px',
      },

      spacing: {
        19: '4.5rem',
      },

      boxShadow: {
        card: '0px 0px 4px 2px rgba(0, 0, 0, 0.1)',
        test: '10px 10px 0px -2px #417674',
        black: '10px 10px 0px -2px #222222',
        shrink: '10px 10px 0px -12px rgba(0,0,0,1);',
        theme: '10px 10px 0px -2px #078080',
        button: '0px 8px 15px rgba(0, 0, 0, 0.1);',
      },

      scale: {
        102: '1.02',
      },

      colors: {
        theme: '#078080',
        secondary: '#f45d48',
        offwhite: '#f8f5f2',
        textblack: '#222222',
      },

      borderWidth: {
        100: '1px',
      },

      width: {
        100: '32rem',
        200: '26rem',
        300: '22rem',
        400: '44rem',
        form: '52rem',
        0.75: '3px',
      },

      height: {
        100: '32rem',
        200: '26rem',
        300: '22rem',
        400: '44rem',
      },

      fontFamily: {
        lora: [
          'Lora',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        poppins: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        Roboto: [
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        button: ['freight-sans-pro', 'Roboto', 'sans-serif'],
      },

      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        grow: 'wiggle 5s ease-in-out infinite',
      },

      gridTemplateColumns: {
        pricing: 'repeat(2, minmax(0, 500px))',
      },

      screens: {
        mv: '0px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],

  variants: {
    scrollbar: ['rounded'],
  },
}
