import React, { useMemo } from 'react'

import {
  ANY_COLOR_SCHEME,
  DARK_COLOR_SCHEME,
  LIGHT_COLOR_SCHEME,
  useColorSchemeMediaQuery,
} from '@a110/rito'

import classes from './DemoComponent.module.css'

const DemoComponent: React.FC = () => {
  const colorScheme = useColorSchemeMediaQuery()

  const colorSchemeEmoji = useMemo(() => {
    if (ANY_COLOR_SCHEME === colorScheme) return '🤷‍♂️'
    if (DARK_COLOR_SCHEME === colorScheme) return '🌜'
    if (LIGHT_COLOR_SCHEME === colorScheme) return '🌞'

    throw new Error(`Unknown color scheme '${colorScheme}'`)
  }, [colorScheme])

  return (
    <div className={classes.container}>
      <div>
        The `useColorSchemeMediaQuery` hook provides the device or system color
        scheme: {colorSchemeEmoji} ({colorScheme}).
      </div>
      <div className={classes.subText}>
        To change the value displayed, try adjusting the OS Preferences:
      </div>
      <ul className={classes.subText}>
        <li>
          MacOS: System Preferences → General → Appearance at top of the window:
          Light or Dark.
        </li>
        <li>
          Windows: Settings → Personalization → Colors → Choose your color
          dropdown: Light or Dark.
        </li>
      </ul>
    </div>
  )
}

export default DemoComponent
