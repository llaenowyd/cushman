import { useCallback } from 'react'

import { ColorScheme, ColorSchemeState, SetColorScheme } from '../../types'

const useSetColorScheme = (param: ColorSchemeState): SetColorScheme => {
  const {
    colorScheme: appColorScheme,
    setColorScheme: appSetColorScheme,
    followDevice,
    setFollowDevice,
  } = param

  const controllerSetColorScheme: SetColorScheme = useCallback(
    (colorScheme: ColorScheme) => {
      if (appColorScheme !== colorScheme) {
        appSetColorScheme(colorScheme)
      }

      if (followDevice) {
        setFollowDevice(false)
      }
    },
    [appColorScheme, appSetColorScheme, followDevice, setFollowDevice]
  )

  return controllerSetColorScheme
}

export default useSetColorScheme
