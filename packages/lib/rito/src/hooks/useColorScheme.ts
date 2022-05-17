import { useContext } from 'react'

import { ColorScheme } from '../../types/color_scheme'
import { ColorSchemeContext } from '../components/ColorSchemeProvider/context'

const useColorScheme = (): ColorScheme => useContext(ColorSchemeContext)

export default useColorScheme
