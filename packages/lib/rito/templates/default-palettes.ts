import * as colors from 'tailwindcss/colors'

export default {
  'rito-dark': {
    '--bg-primary': colors.slate[900],
    '--bg-secondary': colors.slate[800],
    '--bg-control': colors.blue[800],
    '--bg-control-disabled': colors.gray[500],
    '--bg-obscure': colors.blue[500],
    '--text-primary': colors.teal[100],
    '--text-secondary': colors.teal[500],
    '--text-control': colors.sky[100],
    '--text-control-disabled': colors.gray[300],
    '--color-shadow': '#101010',
  },
  'rito-light': {
    '--bg-primary': colors.slate[50],
    '--bg-secondary': colors.slate[200],
    '--bg-control': colors.blue[300],
    '--bg-control-disabled': colors.gray[300],
    '--bg-obscure': colors.blue[900],
    '--text-primary': colors.slate[800],
    '--text-secondary': colors.slate[500],
    '--text-control': colors.sky[800],
    '--text-control-disabled': colors.gray[500],
    '--color-shadow': colors.gray[400],
  },
}