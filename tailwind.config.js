/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)'
      },
      fontFamily: {
        display: ['"Noto Serif TC"', 'serif'],
        tech: ['"Space Grotesk"', '"Noto Sans TC"', 'sans-serif'],
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        '90rem': '90rem',
        '72rem': '72rem'
      }
    }
  },
  plugins: []
};
