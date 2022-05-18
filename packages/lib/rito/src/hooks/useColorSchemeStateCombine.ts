import { useMemo } from 'react'

import { ANY_COLOR_SCHEME } from '../constants'
import { ColorSchemeState } from '../../types'

import useDeviceColorScheme from './useDeviceColorScheme'
import useSetColorScheme from './useSetColorScheme'

const useColorSchemeStateCombine = (
  appColorSchemeState: ColorSchemeState
): ColorSchemeState => {
  const deviceColorScheme = useDeviceColorScheme()

  const setColorScheme = useSetColorScheme(appColorSchemeState)

  const {
    colorScheme: appColorScheme,
    followDevice,
    setFollowDevice,
  } = appColorSchemeState

  const colorScheme = useMemo(
    () =>
      followDevice && ANY_COLOR_SCHEME !== deviceColorScheme
        ? deviceColorScheme
        : appColorScheme,
    [followDevice, deviceColorScheme, appColorScheme]
  )

  return {
    colorScheme,
    setColorScheme,
    followDevice,
    setFollowDevice,
  }
}

export default useColorSchemeStateCombine
