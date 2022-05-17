import darkTheme from './darkTheme'
import lightTheme from './lightTheme'

import '@a110/rito/styles/default-palettes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }, // tbd maybe don't need
  controls: {
    matchers: {
      color: /(background|color)$/i, // tbd maybe don't need
      date: /Date$/, // tbd maybe don't need
    },
  },
  darkMode: {
    dark: darkTheme, // caution don't add variables here
    light: lightTheme, // such as ...
    // { ...darkTheme,
    //   appBg: 'var(--bg-primary)',
    //   textColor: 'var(--text-primary)' }
    // ............. because it will corrupt local storage
    darkClass: 'rito-dark',
    lightClass: 'rito-light',
    stylePreview: true,
  },
}
