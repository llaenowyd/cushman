import { useMemo } from 'react'

import { ANY_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from '../constants'
import { ColorScheme, ColorSchemeState } from '../../types'

import useDeviceColorScheme from './useDeviceColorScheme'
import useSetColorScheme from './useSetColorScheme'

const pickColorScheme = (
  deviceColorScheme: ColorScheme,
  defaultColorScheme: ColorScheme,
  appColorScheme?: ColorScheme,
  followDevice?: boolean
): ColorScheme => {
  if (null == appColorScheme) {
    return ANY_COLOR_SCHEME === deviceColorScheme
      ? defaultColorScheme
      : deviceColorScheme
  }

  return followDevice && ANY_COLOR_SCHEME !== deviceColorScheme
    ? deviceColorScheme
    : ANY_COLOR_SCHEME === appColorScheme
    ? defaultColorScheme
    : appColorScheme
}

const useColorSchemeStateCombine = (
  appColorSchemeState?: ColorSchemeState,
  defaultColorScheme: ColorScheme = LIGHT_COLOR_SCHEME
): ColorSchemeState => {
  const deviceColorScheme = useDeviceColorScheme()

  const setColorScheme = useSetColorScheme(appColorSchemeState)

  const {
    colorScheme: appColorScheme,
    followDevice,
    setFollowDevice,
  } = appColorSchemeState ?? {}

  const colorScheme = useMemo(
    () =>
      pickColorScheme(
        deviceColorScheme,
        defaultColorScheme,
        appColorScheme,
        followDevice
      ),
    [deviceColorScheme, appColorScheme, followDevice, defaultColorScheme]
  )

  return {
    colorScheme,
    setColorScheme,
    followDevice: followDevice ?? true,
    setFollowDevice: setFollowDevice ?? (() => {}),
  }
}

export default useColorSchemeStateCombine
