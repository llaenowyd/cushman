import { useCallback, useMemo } from 'react'

import { ColorScheme } from '../../types/color_scheme'
import { ANY_COLOR_SCHEME } from '../constants'

export type ColorSchemeInputs = {
  deviceColorScheme: ColorScheme
  appColorScheme: ColorScheme
  setAppColorScheme: (colorScheme: ColorScheme) => void
  followDeviceColorScheme?: boolean
  setFollowDeviceColorScheme: (followDeviceColorScheme: boolean) => void
}

export type UseColorSchemeResult = {
  colorScheme: ColorScheme
  setColorScheme: (colorScheme: ColorScheme) => void
}

const useColorScheme = (inputs: ColorSchemeInputs): UseColorSchemeResult => {
  const {
    deviceColorScheme,
    appColorScheme,
    setAppColorScheme,
    followDeviceColorScheme,
    setFollowDeviceColorScheme,
  } = inputs

  const colorScheme: ColorScheme = useMemo(
    () =>
      followDeviceColorScheme && ANY_COLOR_SCHEME !== deviceColorScheme
        ? deviceColorScheme
        : appColorScheme,
    [followDeviceColorScheme, deviceColorScheme, appColorScheme]
  )

  const setColorScheme: (cs: ColorScheme) => void = useCallback(
    (cs: ColorScheme): void => {
      if (appColorScheme !== cs) {
        setAppColorScheme(cs)
      }
      if (followDeviceColorScheme) {
        setFollowDeviceColorScheme(false)
      }
    },
    [
      appColorScheme,
      setAppColorScheme,
      followDeviceColorScheme,
      setFollowDeviceColorScheme,
    ]
  )

  return { colorScheme, setColorScheme }
}

export default useColorScheme
