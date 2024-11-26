import { defineGlobalStyles, defineTokens } from '@pandacss/dev';

export const tokens = defineTokens({
  colors: {
    lightBg: { value: '#fff' },
    lighttext: { value: '#050505' },
    darkBg: { value: '#050505' },
    darkText: { value: '#fff' },
  },
});

export const globalStyles = defineGlobalStyles({
  body: {
    backgroundColor: 'lightBg',
    color: 'lightText',
    _dark: {
      backgroundColor: 'darkBg',
      color: 'darkText',
    }
  }
})