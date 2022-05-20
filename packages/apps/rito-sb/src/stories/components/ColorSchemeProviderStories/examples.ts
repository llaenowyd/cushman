export const defaultExample = `
import { ColorSchemeProvider } from '@a110/rito'

import MainView from './components'

const App: React.FC = () => (
  <ColorSchemeProvider>
    <MainView />
  </ColorSchemeProvider>
)
`

export const injectedAppState = `
import { ColorSchemeProvider, ColorSchemeState } from '@a110/rito'

import MainView from './components'

const App: React.FC = () => {
  const [colorScheme, setColorScheme] = useState('light')
  const [followDevice, setFollowDevice] = useState(true)

  const appColorSchemeState: ColorSchemeState = {
    colorScheme,
    setColorScheme,
    followDevice,
    setFollowDevice,
  }

  return (
    <ColorSchemeProvider appColorSchemeState={appColorSchemeState}>
      <MainView />
    </ColorSchemeProvider>
  )
}
`

export const customPalettes = `
import { ColorSchemeProvider } from '@a110/rito'

import MainView from './components'

import classes from './App.module.css'

const App: React.FC = () => (
  <ColorSchemeProvider darkClassName={classes.darkMode} lightClassName={classes.lightMode}>
    <MainView />
  </ColorSchemeProvider>
)
`
