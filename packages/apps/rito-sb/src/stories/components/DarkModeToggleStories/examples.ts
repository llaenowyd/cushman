export const defaultExample = `
import {
  ColorSchemeProvider,
  ColorSchemeState, // *
  DarkModeToggle,
  DeviceColorSchemeProvider,
} from '@a110/rito'

/**
 * * ColorSchemeState
 * 
 * The application may _optionally_ supply the prop
 * \`appColorSchemeState: ColorSchemeState\`, to maintain its
 * own dark-mode state independent from the device.
 *  
 * interface ColorSchemeState {
 *   colorScheme: ColorScheme // 'dark' | 'light' | 'no-preference'
 *   setColorScheme: (colorScheme: ColorScheme) => void
 *   followDevice: boolean
 *   setFollowDevice: (followDevice: boolean) => void
 * }
 */

import useAppColorSchemeState from './applicationState'

const App = () => {
  const appColorSchemeState: ColorSchemeState = useAppColorSchemeState()

  return (
    <DeviceColorSchemeProvider>
      <ColorSchemeProvider appColorSchemeState={appColorSchemeState}>
        <DarkModeToggle />
      </ColorSchemeProvider>
    </DeviceColorSchemeProvider>
  )
}
`
