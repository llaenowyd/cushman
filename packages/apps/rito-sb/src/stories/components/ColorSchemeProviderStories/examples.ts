export const defaultExample = `
import { DeviceColorSchemeProvider, ColorSchemeProvider } from '@a110/rito'

import MainView from './components'

const App: React.FC = () => (
  <DeviceColorSchemeProvider>
    <ColorSchemeProvider>
      <MainView />
    </ColorSchemeProvider>
  </DeviceColorSchemeProvider>
)
`

export const injectedAppState = `
import { DeviceColorSchemeProvider, ColorSchemeProvider } from '@a110/rito'

import MainView from './components'

const App: React.FC = () => {
  const [colorScheme, setColorScheme] = useState('light')
  const [followDevice, setFollowDevice] = useState(true)

  const appColorSchemeState = {
    colorScheme,
    setColorScheme,
    followDevice,
    setFollowDevice,
  }

  return (
    <DeviceColorSchemeProvider>
      <ColorSchemeProvider appColorSchemeState={appColorSchemeState}>
        <MainView />
      </ColorSchemeProvider>
    </DeviceColorSchemeProvider>
  )
}
`

export const customPalettes = `
import { DeviceColorSchemeProvider, ColorSchemeProvider } from '@a110/rito'

import MainView from './components'

import classes from './App.module.css'

const App: React.FC = () => (
  <DeviceColorSchemeProvider>
    <ColorSchemeProvider darkClassName={classes.darkMode} lightClassName={classes.lightMode}>
      <MainView />
    </ColorSchemeProvider>
  </DeviceColorSchemeProvider>
)
`
