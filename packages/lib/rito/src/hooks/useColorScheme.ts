import { useContext } from 'react'

import { ColorSchemeState } from '../../types'
import { ColorSchemeContext } from '../components'

const useColorScheme = (): ColorSchemeState => useContext(ColorSchemeContext)

export default useColorScheme
