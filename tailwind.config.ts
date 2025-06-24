import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#FDF8F1',       // Background - soft manuscript tone
        'night-ink': '#2E2E2E',     // Body text - readable ink
        'sage-green': '#405C45',    // Headings - spiritual calm
        'sufi-teal': '#007D7B',     // CTA buttons, links
        'desert-beige': '#E9E3D0',  // Cards, borders, soft sections
        'garden-green': '#42A87C',  // Success/Quiz feedback
        'sun-gold': '#E4B343',      // Certificate, award icons
        'olive-leaf': '#56786C',    // Hover states, subtle accents
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Lora', 'serif'],
        arabic: ['Noto Naskh Arabic', 'serif'],
      },
      lineHeight: {
        relaxed: '1.75',
        tighter: '1.25',
      },
      letterSpacing: {
        wide: '.025em',
        wider: '.05em',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;