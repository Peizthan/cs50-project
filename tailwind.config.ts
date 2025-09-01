import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    { pattern: /^(bg|text|border)-(cream|beige|brown|olive)(-(50|100|200|300|600|700|800|900))?$/ },
    { pattern: /^(hover:)?(bg|text)-(olive|cream)-(50|100|200|300|600|700|800|900)$/ },
    'text-cream-50',
    'bg-cream-100',
    'bg-cream-50',
    'bg-olive-800',
    'text-brown-900',
    'text-brown-700',
    'border-cream-300',
    'border-olive-800',
  ],
  theme: {
    extend: {
      colors: {
        // Provide both flat tokens (DEFAULT) and scales for compatibility
        cream: {
          DEFAULT: '#F3D7C4', // legacy flat token
          50: '#F9F6EE',
          100: '#F6F3EA',
          200: '#EEE7D8',
          300: '#E1D8C4',
        },
        beige: {
          DEFAULT: '#F5E4D6', // legacy flat token
          100: '#EFE8DB',
          200: '#E7DDCB',
        },
        brown: {
          DEFAULT: '#382C1E', // legacy flat token
          700: '#4D3B2C',
          800: '#3D2F23',
          900: '#2C2119',
        },
        olive: {
          DEFAULT: '#70675C', // legacy flat token
          600: '#2F4C2F',
          700: '#263E26',
          800: '#1F2D1F',
          900: '#172217',
        },
        antique: {
          DEFAULT: '#A58F6F', // legacy flat token
          200: '#EDE0D4',
          300: '#E6CCB2',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'ui-sans-serif', 'system-ui'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
