import { useCallback } from 'react'

import { ColorScheme, ColorSchemeState, SetColorScheme } from '../../types'

const useSetColorScheme = (param?: ColorSchemeState): SetColorScheme => {
  const {
    colorScheme: appColorScheme,
    setColorScheme: appSetColorScheme,
    followDevice,
    setFollowDevice,
  } = param ?? {}

  const controllerSetColorScheme: SetColorScheme = useCallback(
    param
      ? (colorScheme: ColorScheme) => {
          if (appColorScheme !== colorScheme) {
            appSetColorScheme!(colorScheme)
          }

          if (followDevice) {
            setFollowDevice!(false)
          }
        }
      : () => {},
    [param, appColorScheme, appSetColorScheme, followDevice, setFollowDevice]
  )

  return controllerSetColorScheme
}

export default useSetColorScheme
