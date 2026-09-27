/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#CDC6BE', // Primary newsprint parchment tone
          light: '#E2DEDB',   // Subtle lighter newsprint highlight
          dark: '#BEB5AB',    // Shaded paper border tone
          deep: '#1D1D1B',    // Dark inverse paper background
          parchment: '#D3CBC2',
          stamp: '#DFDBD3',   // Vintage perforated stamp background
        },
        ink: {
          DEFAULT: '#1D1D1B', // Deep authentic newsprint ink-black
          muted: 'rgba(29, 29, 27, 0.72)',
          faint: 'rgba(29, 29, 27, 0.45)',
          border: 'rgba(29, 29, 27, 0.22)', // Editorial column divider line
          guide: 'rgba(29, 29, 27, 0.14)',  // Horizontal typographical baseline ruled guide
        },
        rust: {
          DEFAULT: '#C03F13', // Accent red-orange for [NEW] tags & stamp sunrise
          dark: '#9E320D',
        },
      },
      fontFamily: {
        canopee: ['Canopee', 'sans-serif'],
        display: ['"Domaine Display"', '"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Editorial New"', '"Newsreader"', 'Georgia', 'serif'],
        condensed: ['Canopee', '"Domaine Display"', 'Impact', 'sans-serif'],
        blackletter: ['UnifrakturCook', 'Chomsky', 'serif'],
        mono: ['"Courier Prime"', '"Space Mono"', 'monospace'],
      },
      fontSize: {
        'display-giant': ['clamp(5rem, 28vw, 37vw)', { lineHeight: '0.8', letterSpacing: '-0.04em' }],
        'display-website': ['clamp(4.5rem, 21vw, 26vw)', { lineHeight: '0.82', letterSpacing: '-0.045em' }],
        'display-sub': ['clamp(2.5rem, 12vw, 14vw)', { lineHeight: '0.88', letterSpacing: '-0.03em' }],
        'display-artist': ['clamp(2.2rem, 7.8vw, 9.2vw)', { lineHeight: '0.85', letterSpacing: '-0.025em' }],
        'display-ex': ['clamp(2rem, 8.5vw, 10vw)', { lineHeight: '0.86', letterSpacing: '-0.03em' }],
        'dropcap': ['clamp(3rem, 7vw, 8.5vw)', { lineHeight: '0.78' }],
      },
      letterSpacing: {
        'tighter-condensed': '-0.05em',
        'tight-condensed': '-0.03em',
        'newspaper': '-0.015em',
      },
      borderWidth: {
        'hairline': '1px',
      },
      boxShadow: {
        'paper-inset': 'inset 0 0 40px rgba(29, 29, 27, 0.04)',
      },
    },
  },
  plugins: [],
};
