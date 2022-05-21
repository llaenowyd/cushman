import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'

import DocsContainer from './DocsContainer'
import darkTheme from './darkTheme'
import lightTheme from './lightTheme'

import '@a110/rito/default-palettes.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }, // tbd maybe don't need
  controls: {
    expanded: true,
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
    classTarget: 'html',
    stylePreview: true,
  },
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  docs: {
    source: { format: false },
    container: DocsContainer,
  },
  options: {
    storySort: {
      order: [
        'intro',
        'rito',
        [
          'component',
          [
            'Anchor',
            'Button',
            'ColorSchemeProvider',
            [
              'Default',
              'Application State',
              'Const Color Scheme',
              'Custom Palettes',
            ],
            'DarkModeToggle',
            '*',
          ],
          'hook',
        ],
      ],
    },
  },
}
