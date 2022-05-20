import React, { useMemo } from 'react'

import { DarkModeToggle, useDeviceColorScheme } from '@a110/rito'
import { ColorScheme } from '@a110/rito/types'

import ColorSchemeSelect from './ColorSchemeSelect'
import FlagSelect from './FlagSelect'

import classes from './styles.module.css'

const colorSchemeToEmoji = (colorScheme: ColorScheme): string =>
  'dark' === colorScheme ? '🌜' : 'light' === colorScheme ? '🌞' : '🤷‍♂️'

const Vignette: React.FC<{
  appColorScheme: ColorScheme
  setAppColorScheme: (colorScheme: ColorScheme) => void
  followDeviceColorScheme: boolean | undefined
  setFollowDeviceColorScheme: (fd: boolean | undefined) => void
}> = ({
  appColorScheme,
  setAppColorScheme,
  followDeviceColorScheme,
  setFollowDeviceColorScheme,
}) => {
  const deviceColorScheme = useDeviceColorScheme()

  const deviceColorSchemeSymbol = useMemo(
    () => colorSchemeToEmoji(deviceColorScheme),
    [deviceColorScheme]
  )

  const appColorSchemeSymbol = useMemo(
    () => colorSchemeToEmoji(appColorScheme),
    [appColorScheme]
  )

  return (
    <div className={classes.container}>
      <div className={classes.stateBox}>
        <div className={classes.stateBoxHeading}>
          State Held External to DarkModeToggle
        </div>
        <div className={classes.stateBoxSubheading}>
          - Device
          <div className={classes.stateBoxSubheading}>- Browser</div>
          <div className={classes.stateBoxSubheading}>- OS Preferences</div>
        </div>
        <div className={classes.stateBoxSubheading}>
          - App
          <div className={classes.stateBoxSubheading}>
            - Cookie/LocalStorage/IndexedDB
          </div>
          <div className={classes.stateBoxSubheading}>- Context/State</div>
          <div className={classes.stateBoxSubheading}>- Redux/MobX/Recoil</div>
        </div>
        <div className={classes.stateBoxContent}>
          <div className={classes.stateBoxItem}>
            <div className={classes.stateBoxItemLabel}>fake device</div>
            <div className={classes.stateBoxContent}>
              <div className={classes.stateBoxItem}>
                <div className={classes.stateBoxItemLabel}>color scheme</div>
                <div className={classes.stateBoxItemValue}>
                  {deviceColorSchemeSymbol}
                </div>
                <ColorSchemeSelect
                  colorScheme={deviceColorScheme}
                  setColorScheme={() => {}}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className={classes.stateBoxItem}>
            <div className={classes.stateBoxExplainer}>
              The Story holds this state 👇 to demonstrate the toggle widget
              changing the color scheme by changing the app state.
            </div>
            <div className={classes.stateBoxItemLabel}>app state</div>
            <div className={classes.stateBoxContent}>
              <div className={classes.stateBoxItem}>
                <div className={classes.stateBoxItemLabel}>color scheme</div>
                <div className={classes.stateBoxItemValue}>
                  {appColorSchemeSymbol}
                </div>
                <ColorSchemeSelect
                  colorScheme={appColorScheme}
                  setColorScheme={setAppColorScheme}
                  disabled
                />
              </div>
              <div className={classes.stateBoxItem}>
                <div className={classes.stateBoxItemLabel}>follow device?</div>
                <div className={classes.stateBoxItemValue}>
                  {followDeviceColorScheme ? 'Y' : 'N'}
                </div>
                <FlagSelect
                  flag={followDeviceColorScheme}
                  setFlag={setFollowDeviceColorScheme}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.stateBoxItem}>
        <div className={classes.stateBoxItemLabel}>DarkModeToggle</div>
        <div className={classes.stateBoxItemValue}>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Vignette
