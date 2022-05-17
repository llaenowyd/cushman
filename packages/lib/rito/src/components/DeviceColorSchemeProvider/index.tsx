import React from 'react'

import { useColorSchemeMediaQuery } from '../../hooks'

import { DeviceColorSchemeContext } from './context'
export { DeviceColorSchemeContext } from './context'

const DeviceColorSchemeProvider: React.FC<{
  children: JSX.Element
}> = ({ children }) => {
  const deviceColorScheme = useColorSchemeMediaQuery()

  return (
    <DeviceColorSchemeContext.Provider value={deviceColorScheme}>
      {children}
    </DeviceColorSchemeContext.Provider>
  )
}

export default DeviceColorSchemeProvider
