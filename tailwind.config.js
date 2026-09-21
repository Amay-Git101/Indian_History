/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50:  '#fdf8f0',
          100: '#f9eed8',
          200: '#f2dbb0',
          300: '#e8c27f',
          400: '#dca34f',
          500: '#d08a30',
        },
        indigo: {
          900: '#1e1b4b',
          800: '#312e81',
          700: '#3730a3',
          600: '#4338ca',
        },
        terracotta: {
          900: '#5c2018',
          800: '#7c2d12',
          700: '#9a3412',
          600: '#c2410c',
          500: '#ea580c',
          400: '#f97316',
          300: '#fdba74',
        },
        gold: {
          600: '#92400e',
          500: '#b45309',
          400: '#d97706',
          300: '#f59e0b',
          200: '#fcd34d',
          100: '#fef3c7',
        },
        charcoal: {
          900: '#111110',
          800: '#1c1c1a',
          700: '#2a2a27',
          600: '#3d3d39',
          500: '#525250',
          400: '#737370',
          300: '#9e9e9c',
          200: '#c8c8c5',
          100: '#e8e8e5',
        },
        'art-green': {
          900: '#0f2418',
          800: '#1a3a28',
          700: '#1f4d33',
          600: '#166534',
          500: '#15803d',
          400: '#22c55e',
          100: '#dcfce7',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.35s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marker-bounce': 'markerBounce 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        markerBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'mandala-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23d08a30' stroke-opacity='0.06' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='28'/%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Ccircle cx='30' cy='30' r='12'/%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Cline x1='30' y1='2' x2='30' y2='58'/%3E%3Cline x1='2' y1='30' x2='58' y2='30'/%3E%3Cline x1='10' y1='10' x2='50' y2='50'/%3E%3Cline x1='50' y1='10' x2='10' y2='50'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
