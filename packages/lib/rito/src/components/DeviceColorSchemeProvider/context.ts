import { createContext } from 'react'

import { ColorScheme } from '../../../types'
import { ANY_COLOR_SCHEME } from '../../constants'

export const DeviceColorSchemeContext =
  createContext<ColorScheme>(ANY_COLOR_SCHEME)
