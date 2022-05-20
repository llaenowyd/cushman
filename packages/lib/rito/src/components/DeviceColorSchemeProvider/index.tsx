import React from 'react'

import { ColorScheme } from '../../../types'
import { useColorSchemeMediaQuery } from '../../hooks'

import { DeviceColorSchemeContext } from './context'
export { DeviceColorSchemeContext } from './context'

const DeviceColorSchemeProvider: React.FC<{
  mockValue?: ColorScheme
  children: JSX.Element
}> = ({ mockValue, children }) => {
  const deviceColorScheme = useColorSchemeMediaQuery(mockValue)

  return (
    <DeviceColorSchemeContext.Provider value={deviceColorScheme}>
      {children}
    </DeviceColorSchemeContext.Provider>
  )
}

export default DeviceColorSchemeProvider
