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
      This hook provides the device or system color scheme: {colorSchemeEmoji}.
    </div>
  )
}

export default DemoComponent
