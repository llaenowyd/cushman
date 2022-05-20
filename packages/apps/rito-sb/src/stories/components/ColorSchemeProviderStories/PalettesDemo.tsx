import React, { useState } from 'react'

import { Button, ColorSchemeProvider, useDeviceColorScheme } from '@a110/rito'

import DemoPanel from './DemoPanel'
import classes from './PalettesDemo.module.css'

const PalettesDemoImpl: React.FC = () => {
  const deviceColorScheme = useDeviceColorScheme()
  const [mockDeviceColorScheme, setMockDeviceColorScheme] =
    useState(deviceColorScheme)

  return (
    <ColorSchemeProvider colorScheme={mockDeviceColorScheme}>
      <div className={classes.container}>
        <div>
          Here the Device Color Scheme is mocked up, to more easily demo the
          different color palettes.
        </div>
        <div className={classes.buttonRow}>
          <Button
            label={
              'dark' === mockDeviceColorScheme
                ? 'Click to toggle: 🌜'
                : 'Click to toggle: 🌞'
            }
            onClick={
              'dark' === mockDeviceColorScheme
                ? () => setMockDeviceColorScheme('light')
                : () => setMockDeviceColorScheme('dark')
            }
          />
        </div>
        <div className={classes.subContainer}>
          <DemoPanel className={classes.subContainerElement} label="Default" />
          <ColorSchemeProvider
            className={classes.subContainerElement}
            colorScheme={mockDeviceColorScheme}
            lightClassName={classes.lightPurplePalette}
            darkClassName={classes.darkPurplePalette}
          >
            <DemoPanel label="Purple" />
          </ColorSchemeProvider>
          <ColorSchemeProvider
            className={classes.subContainerElement}
            colorScheme={mockDeviceColorScheme}
            lightClassName={classes.lightGreenPalette}
            darkClassName={classes.darkGreenPalette}
          >
            <DemoPanel label="Green" />
          </ColorSchemeProvider>
          <ColorSchemeProvider
            className={classes.subContainerElement}
            colorScheme={mockDeviceColorScheme}
            lightClassName={classes.lightOrangePalette}
            darkClassName={classes.darkOrangePalette}
          >
            <DemoPanel label="Orange" />
          </ColorSchemeProvider>
        </div>
      </div>
    </ColorSchemeProvider>
  )
}

const PalettesDemo: React.FC = () => (
  <ColorSchemeProvider>
    <PalettesDemoImpl />
  </ColorSchemeProvider>
)

export default PalettesDemo
