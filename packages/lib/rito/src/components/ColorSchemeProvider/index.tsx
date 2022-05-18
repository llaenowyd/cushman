import React, { useEffect } from 'react'

import { ColorSchemeState } from '../../../types'
import { DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from '../../constants'
import { useColorSchemeStateCombine, usePrevious } from '../../hooks'

import { ColorSchemeContext } from './context'
export { ColorSchemeContext } from './context'

const ColorSchemeProvider: React.FC<{
  appColorSchemeState: ColorSchemeState
  darkClassName?: string
  lightClassName?: string
  children: JSX.Element
}> = ({
  appColorSchemeState,
  darkClassName = 'rito-dark',
  lightClassName = 'rito-light',
  children,
}) => {
  const contextValue = useColorSchemeStateCombine(appColorSchemeState)

  const colorScheme = contextValue.colorScheme
  const previousColorScheme = usePrevious(colorScheme)

  useEffect(() => {
    if (colorScheme === previousColorScheme) {
      return
    }

    const root = window?.document?.documentElement

    if (!root) {
      return
    }

    if (DARK_COLOR_SCHEME === colorScheme) {
      root.classList.add(darkClassName)
    } else if (LIGHT_COLOR_SCHEME === colorScheme) {
      root.classList.add(lightClassName)
    }

    if (DARK_COLOR_SCHEME === previousColorScheme) {
      root.classList.remove(darkClassName)
    } else if (LIGHT_COLOR_SCHEME === previousColorScheme) {
      root.classList.remove(lightClassName)
    }
  }, [colorScheme, previousColorScheme])

  return (
    <ColorSchemeContext.Provider value={contextValue}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

export default ColorSchemeProvider
