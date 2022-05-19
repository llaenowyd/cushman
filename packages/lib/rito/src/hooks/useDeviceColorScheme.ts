import { useContext } from 'react'

import { ColorScheme } from '../../types'
import { DeviceColorSchemeContext } from '../components/DeviceColorSchemeProvider/context'

const useDeviceColorScheme = (): ColorScheme =>
  useContext(DeviceColorSchemeContext)

export default useDeviceColorScheme
