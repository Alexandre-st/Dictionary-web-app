import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // globalCss: {
  //   body: {
  //     backgroundColor: 'bg',
  //     color: 'text',
  //     transition: 'background-color 0.3s, color 0.3s',
  //   },
  // },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#6200ee' },
          backgroundLight: { value: '#ffffff' },
          backgroundDark: { value: '#121212' },
        },
      },
      semanticTokens: {
        colors: {
          background: {
            light: { value: '{colors.backgroundLight}' },
            dark: { value: '{colors.backgroundDark}' },
          },
          text: {
            light: { value: '#000' },
            dark: { value:'#fff' },
          },
        },
      },
    },
  },
  globalCss: {
    ':root': {
      colorScheme: 'light dark',
    },
  },

  // utilities: {
  //   extend: {
  //     bg: {
  //       property: 'backgroundColor',
  //       className: 'bg',
  //     },
  //     color: {
  //       property: 'color',
  //       className: 'text',
  //     }
  //   },
  // },

  // The output directory for your css system
  outdir: 'styled-system',
});
