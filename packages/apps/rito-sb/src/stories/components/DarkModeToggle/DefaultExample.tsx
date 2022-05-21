import React, { ReactNode, useState } from 'react'
import {
  ColorSchemeProvider,
  DarkModeToggle,
  useColorSchemeState,
} from '@a110/rito'

import classes from './styles.module.css'

const Panel = () => (
  <div className={classes.panel}>
    <DarkModeToggle />
  </div>
)

const DefaultExample: React.FC = () => {
  const { colorScheme: existingColorScheme } = useColorSchemeState()

  const [colorScheme, setColorScheme] = useState(existingColorScheme)
  const [followDevice, setFollowDevice] = useState(false)

  return (
    <ColorSchemeProvider
      className={classes.container}
      appColorSchemeState={{
        colorScheme,
        setColorScheme,
        followDevice,
        setFollowDevice,
      }}
    >
      <Panel />
    </ColorSchemeProvider>
  )
}

export default DefaultExample
