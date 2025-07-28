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
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        // Design tokens for button variants
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      spacing: {
        // Button spacing tokens
        'btn-xs': '0.25rem',
        'btn-sm': '0.375rem',
        'btn-md': '0.5rem',
        'btn-lg': '0.75rem',
        'btn-xl': '1rem',
      },
      fontSize: {
        // Button text size tokens
        'btn-xs': ['0.75rem', { lineHeight: '1rem' }],
        'btn-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'btn-md': ['0.875rem', { lineHeight: '1.25rem' }],
        'btn-lg': ['1rem', { lineHeight: '1.5rem' }],
        'btn-xl': ['1.125rem', { lineHeight: '1.75rem' }],
      },
      height: {
        // Button height tokens
        'btn-xs': '1.5rem',
        'btn-sm': '2rem',
        'btn-md': '2.5rem',
        'btn-lg': '3rem',
        'btn-xl': '3.5rem',
      },
      borderRadius: {
        // Button border radius tokens
        'btn-xs': '0.25rem',
        'btn-sm': '0.375rem',
        'btn-md': '0.5rem',
        'btn-lg': '0.5rem',
        'btn-xl': '0.75rem',
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
