import React, { useState } from 'react'
import { ColorSchemeProvider, DarkModeToggle } from '@a110/rito'
import { ColorScheme, ColorSchemeState } from '@a110/rito/types'

import classes from './styles.module.css'

const AppStateDemo: React.FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const [followDevice, setFollowDevice] = useState<boolean>(true)

  const appColorSchemeState: ColorSchemeState = {
    colorScheme,
    setColorScheme,
    followDevice,
    setFollowDevice,
  }

  return (
    <ColorSchemeProvider
      className={classes.widgetBox}
      appColorSchemeState={appColorSchemeState}
    >
      <DarkModeToggle />
    </ColorSchemeProvider>
  )
}

export default AppStateDemo
