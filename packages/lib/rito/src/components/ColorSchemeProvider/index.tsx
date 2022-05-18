import React, { useEffect, useMemo } from 'react'

import { ColorScheme } from '../../../types/color_scheme'
import {
  ANY_COLOR_SCHEME,
  DARK_COLOR_SCHEME,
  LIGHT_COLOR_SCHEME,
} from '../../constants'
import {
  useDeviceColorScheme,
  usePrevious,
  useSetColorScheme,
} from '../../hooks'

import { ColorSchemeContext } from './context'
export { ColorSchemeContext } from './context'

const ColorSchemeProvider: React.FC<{
  appColorScheme: ColorScheme
  setAppColorScheme: (colorScheme: ColorScheme) => void
  followDeviceColorScheme: boolean
  setFollowDeviceColorScheme: (followDeviceColorScheme: boolean) => void
  darkClassName?: string
  lightClassName?: string
  children: JSX.Element
}> = ({
  appColorScheme,
  setAppColorScheme,
  followDeviceColorScheme,
  setFollowDeviceColorScheme,
  darkClassName = 'rito-dark',
  lightClassName = 'rito-light',
  children,
}) => {
  const deviceColorScheme = useDeviceColorScheme()

  const colorScheme: ColorScheme = useMemo(
    () =>
      followDeviceColorScheme && ANY_COLOR_SCHEME !== deviceColorScheme
        ? deviceColorScheme
        : appColorScheme,
    [followDeviceColorScheme, deviceColorScheme, appColorScheme]
  )

  const previousColorScheme = usePrevious(colorScheme)

  useEffect(() => {
    if (colorScheme === previousColorScheme) {
      return
    }

    const root = window?.document?.documentElement

    if (!root) {
      return
    }

    if (DARK_COLOR_SCHEME === colorScheme) {
      root.classList.add(darkClassName)
    } else if (LIGHT_COLOR_SCHEME === colorScheme) {
      root.classList.add(lightClassName)
    }

    if (DARK_COLOR_SCHEME === previousColorScheme) {
      root.classList.remove(darkClassName)
    } else if (LIGHT_COLOR_SCHEME === previousColorScheme) {
      root.classList.remove(lightClassName)
    }
  }, [colorScheme, previousColorScheme])

  useEffect(() => {
    if (appColorScheme !== colorScheme) {
      setAppColorScheme(colorScheme)
    }
  }, [colorScheme, appColorScheme, setAppColorScheme])

  const setColorScheme = useSetColorScheme({
    appColorScheme,
    setAppColorScheme,
    followDeviceColorScheme,
    setFollowDeviceColorScheme,
  })

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

export default ColorSchemeProvider
