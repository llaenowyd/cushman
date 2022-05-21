import * as colors from 'tailwindcss/colors'

export default {
  'rito-dark': {
    '--bg-primary': colors.slate[900],
    '--bg-secondary': colors.slate[700],
    '--bg-control': colors.blue[800],
    '--bg-control-disabled': colors.gray[500],
    '--bg-obscure': colors.blue[500],
    '--text-primary': colors.blue[100],
    '--text-secondary': colors.slate[400],
    '--text-control': colors.sky[100],
    '--text-control-disabled': colors.gray[300],
    '--color-shadow': '#111',
    '--anchor-link': colors.sky[300],
    '--anchor-visited': colors.indigo[300],
    '--color-highlight': '#444',
  },
  'rito-light': {
    '--bg-primary': colors.amber[50],
    '--bg-secondary': colors.slate[200],
    '--bg-control': colors.blue[300],
    '--bg-control-disabled': colors.gray[300],
    '--bg-obscure': colors.blue[900],
    '--text-primary': colors.blue[900],
    '--text-secondary': colors.blue[800],
    '--text-control': colors.sky[800],
    '--text-control-disabled': colors.gray[500],
    '--color-shadow': colors.gray[400],
    '--anchor-link': colors.blue[700],
    '--anchor-visited': colors.violet[700],
    '--color-highlight': '#ddd',
  },
}
