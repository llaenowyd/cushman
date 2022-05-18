import { useContext } from 'react'

import { ColorScheme } from '../../types/color_scheme'
import { DeviceColorSchemeContext } from '../components/DeviceColorSchemeProvider/context'

const useDeviceColorScheme = (): ColorScheme =>
  useContext(DeviceColorSchemeContext)

export default useDeviceColorScheme
