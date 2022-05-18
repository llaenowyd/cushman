import { createContext } from 'react'

import { ColorScheme } from '../../../types/color_scheme'
import { ANY_COLOR_SCHEME } from '../../constants'

export type ColorSchemeContextType = {
  colorScheme: ColorScheme
  setColorScheme: (colorScheme: ColorScheme) => void
}

export const ColorSchemeContext = createContext<ColorSchemeContextType>({
  colorScheme: ANY_COLOR_SCHEME,
  setColorScheme: () => {},
})
