import { useCallback } from 'react'

import { ColorScheme } from '../../types/color_scheme'

export type UseSetColorSchemeParam = {
  appColorScheme: ColorScheme
  setAppColorScheme: (colorScheme: ColorScheme) => void
  followDeviceColorScheme?: boolean
  setFollowDeviceColorScheme: (followDeviceColorScheme: boolean) => void
}

export type SetColorScheme = (colorScheme: ColorScheme) => void

const useSetColorScheme = (param: UseSetColorSchemeParam): SetColorScheme => {
  const {
    appColorScheme,
    setAppColorScheme,
    followDeviceColorScheme,
    setFollowDeviceColorScheme,
  } = param

  const setColorScheme: SetColorScheme = useCallback(
    (cs: ColorScheme) => {
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

  return setColorScheme
}

export default useSetColorScheme
