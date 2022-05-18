import { ColorScheme } from './color_scheme'

export type SetColorScheme = (colorScheme: ColorScheme) => void
export type SetFollowDevice = (followDevice: boolean) => void

export interface ColorSchemeState {
  colorScheme: ColorScheme
  setColorScheme: SetColorScheme
  followDevice: boolean
  setFollowDevice: SetFollowDevice
}
