// tbd move big comment about type to mdx
export const defaultExample = `
import {
  ColorSchemeProvider,
  ColorSchemeState, // *
  DarkModeToggle,
} from '@a110/rito'

/**
 * * ColorSchemeState
 * 
 * The application may _optionally_ supply the prop
 * \`appColorSchemeState: ColorSchemeState\`, to maintain its
 * own dark-mode state independent from the device.
 */

import useAppColorSchemeState from './applicationState'

const App = () => {
  const appColorSchemeState: ColorSchemeState = useAppColorSchemeState()

  return (
    <ColorSchemeProvider appColorSchemeState={appColorSchemeState}>
      <DarkModeToggle />
    </ColorSchemeProvider>
  )
}
`
