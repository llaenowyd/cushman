import { createContext } from 'react'

import { ColorSchemeState } from '../../../types'
import { ANY_COLOR_SCHEME } from '../../constants'

const defaultColorSchemeState: ColorSchemeState = {
  colorScheme: ANY_COLOR_SCHEME,
  setColorScheme: () => {},
  followDevice: true,
  setFollowDevice: () => {},
}

export const ColorSchemeContext = createContext<ColorSchemeState>(
  defaultColorSchemeState
)
