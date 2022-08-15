const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@a110/storybook-expand-all',
    'storybook-css-modules',
  ],
  framework: '@storybook/react',
  staticDirs: [path.join('..', 'public')],
}
