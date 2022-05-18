import { useContext } from 'react'

import {
  ColorSchemeContext,
  ColorSchemeContextType,
} from '../components/ColorSchemeProvider/context'

const useColorScheme = (): ColorSchemeContextType =>
  useContext(ColorSchemeContext)

export default useColorScheme
