import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        default: {
          DEFAULT: '#0F172A',
          dark: '#1E293B',
        },
        secondary: {
          DEFAULT: '#F1F5F9',
          dark: '#E2E8F0',
        },
        outline: {
          DEFAULT: 'transparent',
          border: '#0F172A',
          hover: '#F1F5F9',
          active: '#E2E8F0',
        },
        ghost: {
          DEFAULT: 'transparent',
          hover: '#F1F5F9',
          active: '#E2E8F0',
        },
        danger: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
        },
        white: '#FFFFFF',
        black: '#000000',
        acme: {
          purple: '#A55CFF', // Figma: Secondary Colour
          purpleLight: '#F1ECFF', // Figma: Secondary Variant 3
          gray: '#A6A7B0', // Figma: Secondary Variant 3
          dark: '#2B2D42', // Figma: Secondary Colour
          dark2: '#6B6C7B', // Figma: Secondary Colour 2
          white: '#FFFFFF',
          offwhite: '#FEFDFF',
          border: '#F1ECFF', // Figma: Border color for buttons
          shadow: 'rgba(44,45,58,0.08)', // Figma: Card shadow
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
