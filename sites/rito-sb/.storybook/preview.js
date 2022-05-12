import { themes } from '@storybook/theming'
import '@a110/rito/styles/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: themes.dark,
    light: themes.light,
    darkClass: 'rito-dark',
    lightClass: 'rito-light',
    stylePreview: true,
  },
}
