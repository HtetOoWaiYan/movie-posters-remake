import { Config } from 'tailwindcss'

export default {
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  daisyui: {
    themes: ['night', 'winter'],
  },
} as Config
