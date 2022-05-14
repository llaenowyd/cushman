import { themes } from '@storybook/theming'
import '@a110/rito/styles/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }, // tbd maybe don't need
  controls: {
    matchers: {
      color: /(background|color)$/i, // tbd maybe don't need
      date: /Date$/, // tbd maybe don't need
    },
  },
  darkMode: {
    dark: themes.dark, // caution don't add variables here
    light: themes.light, // such as ...
    // appBg: 'var(--bg-primary)',
    // textColor: 'var(--text-primary)',
    // ............. because it will corrupt local storage
    darkClass: 'rito-dark',
    lightClass: 'rito-light',
    stylePreview: true,
  },
}