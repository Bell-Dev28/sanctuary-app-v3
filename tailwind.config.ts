import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const scrollbarPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.scrollbar-hide': {
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
    },
    '.scrollbar-hide::-webkit-scrollbar': {
      display: 'none',
    },
  });
});

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        },
        accent: {
          DEFAULT: '#e0f2fe',
          foreground: '#0284c7',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#1f2937',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    scrollbarPlugin,
  ],
};

export default config;
