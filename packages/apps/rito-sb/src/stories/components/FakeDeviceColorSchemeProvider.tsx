import React from 'react'
import { DeviceColorSchemeContext } from '@a110/rito'
import { ColorScheme } from '@a110/rito/types'

const FakeDeviceColorSchemeProvider: React.FC<{
  deviceColorScheme: ColorScheme
  children: JSX.Element
}> = ({ deviceColorScheme, children }) => (
  <DeviceColorSchemeContext.Provider value={deviceColorScheme}>
    {children}
  </DeviceColorSchemeContext.Provider>
)

export default FakeDeviceColorSchemeProvider
