import type { Config } from 'tailwindcss';
import { colors } from './app/ui/design-tokens';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
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
        // Design token colors
        primary: {
          50: colors.primary.hover,
          100: colors.primary.focus,
          500: colors.primary.main,
          600: colors.primary.main,
          700: colors.primary.main,
        },
        secondary: {
          50: colors.secondary.hover,
          100: colors.secondary.focus,
          500: colors.secondary.main,
          600: colors.secondary.main,
          700: colors.secondary.main,
        },
        success: {
          50: colors.success.hover,
          100: colors.success.focus,
          500: colors.success.main,
          600: colors.success.main,
          700: colors.success.main,
        },
        error: {
          50: colors.error.hover,
          100: colors.error.focus,
          500: colors.error.main,
          600: colors.error.main,
          700: colors.error.main,
        },
        warning: {
          50: colors.warning.hover,
          100: colors.warning.focus,
          500: colors.warning.main,
          600: colors.warning.main,
          700: colors.warning.main,
        },
        info: {
          50: colors.info.hover,
          100: colors.info.focus,
          500: colors.info.main,
          600: colors.info.main,
          700: colors.info.main,
        },
        gray: {
          50: colors.background.white,
          100: colors.background.filled,
          200: colors.default.border,
          300: colors.default.hover,
          400: colors.text.secondary,
          500: colors.text.primary,
          600: colors.text.primary,
          700: colors.text.primary,
          800: colors.text.primary,
          900: colors.text.primary,
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
