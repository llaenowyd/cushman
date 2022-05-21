import React from 'react'
import { ColorSchemeProvider, useColorSchemeState } from '@a110/rito'

import DemoPanel from './DemoPanel'
import classes from './PalettesDemo.module.css'

const PalettesDemoImpl: React.FC = () => {
  const { colorScheme } = useColorSchemeState()

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <DemoPanel className={classes.subContainerElement} label="Default" />
        <ColorSchemeProvider
          className={classes.subContainerElement}
          colorScheme={colorScheme}
          lightClassName={classes.lightPurplePalette}
          darkClassName={classes.darkPurplePalette}
        >
          <DemoPanel label="Purple" />
        </ColorSchemeProvider>
        <ColorSchemeProvider
          className={classes.subContainerElement}
          colorScheme={colorScheme}
          lightClassName={classes.lightGreenPalette}
          darkClassName={classes.darkGreenPalette}
        >
          <DemoPanel label="Green" />
        </ColorSchemeProvider>
        <ColorSchemeProvider
          className={classes.subContainerElement}
          colorScheme={colorScheme}
          lightClassName={classes.lightOrangePalette}
          darkClassName={classes.darkOrangePalette}
        >
          <DemoPanel label="Orange" />
        </ColorSchemeProvider>
      </div>
    </div>
  )
}

const PalettesDemo: React.FC = () => <PalettesDemoImpl />

export default PalettesDemo
