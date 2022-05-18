import { useContext } from 'react'

import { ColorSchemeState } from '../../types'
import { ColorSchemeContext } from '../components'

const useColorSchemeState = (): ColorSchemeState =>
  useContext(ColorSchemeContext)

export default useColorSchemeState
