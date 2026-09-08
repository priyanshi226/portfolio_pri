/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        // paper / base
        paper: '#F7F2E4',
        'paper-warm': '#F1EAD8',
        // olive green (hero, chapter breaks)
        olive: '#39421F',
        'olive-dark': '#2B3218',
        'olive-light': '#4E5A2A',
        // lavender (journey section)
        lavender: '#DDD5EE',
        'lavender-dark': '#C7BAE3',
        'lavender-deep': '#8F7FBE',
        mist: '#EEE8F7',
        // accents
        blush: '#F0C7CE',
        lilac: '#B9A6DE',
        mustard: '#D8A93B',
        // ink / lines
        ink: '#1B1811',
        line: '#15140F',
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '860px',
      },
    },
  },
  plugins: [],
}
