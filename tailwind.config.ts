import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fafaf7',
        ink: '#1a1a1a',
        muted: '#6a6a6a',
        rule: '#e8e6df',
        accent: '#7a0e0e',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        reading: '40rem',
        wide: '64rem',
      },
    },
  },
  plugins: [],
};

export default config;
