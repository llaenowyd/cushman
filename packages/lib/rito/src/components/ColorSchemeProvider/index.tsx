import React, { useMemo } from 'react'

import {
  ColorScheme,
  ColorSchemeState,
  DarkColorScheme,
  LightColorScheme,
} from '../../../types'
import { DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from '../../constants'
import { useColorSchemeStateCombine } from '../../hooks'

import DeviceColorSchemeProvider from '../DeviceColorSchemeProvider'
import { ColorSchemeContext } from './context'
export { ColorSchemeContext } from './context'

export type ActualColorScheme = DarkColorScheme | LightColorScheme

const noOp = () => {}

const ColorSchemeProviderImpl: React.FC<{
  colorScheme?: ColorScheme
  appColorSchemeState?: ColorSchemeState
  className?: string
  darkClassName?: string
  lightClassName?: string
  defaultColorScheme?: ActualColorScheme
  children: JSX.Element
}> = ({
  colorScheme,
  appColorSchemeState,
  className,
  darkClassName = 'rito-dark',
  lightClassName = 'rito-light',
  defaultColorScheme,
  children,
}) => {
  const aCSSOrConstColorScheme = useMemo<ColorSchemeState | undefined>(
    () =>
      appColorSchemeState ??
      (colorScheme
        ? ({
            colorScheme,
            setColorScheme: noOp,
            followDevice: false,
            setFollowDevice: noOp,
          } as ColorSchemeState)
        : undefined),
    [colorScheme, appColorSchemeState]
  )

  const contextValue = useColorSchemeStateCombine(
    aCSSOrConstColorScheme,
    defaultColorScheme
  )

  const effectiveColorScheme = contextValue.colorScheme

  const combinedClassName = useMemo(() => {
    const paletteClassName =
      DARK_COLOR_SCHEME === effectiveColorScheme
        ? darkClassName
        : LIGHT_COLOR_SCHEME === effectiveColorScheme
        ? lightClassName
        : undefined

    const classNames = [paletteClassName]

    if (className) {
      classNames.push(className)
    }

    return classNames.join(' ')
  }, [effectiveColorScheme, className, lightClassName, darkClassName])

  return (
    <ColorSchemeContext.Provider value={contextValue}>
      <div className={combinedClassName}>{children}</div>
    </ColorSchemeContext.Provider>
  )
}

const ColorSchemeProvider: React.FC<{
  colorScheme?: ColorScheme
  appColorSchemeState?: ColorSchemeState
  className?: string
  darkClassName?: string
  lightClassName?: string
  defaultColorScheme?: ActualColorScheme
  children: JSX.Element
}> = props => {
  const { children, ...restProps } = props

  return (
    <DeviceColorSchemeProvider>
      <ColorSchemeProviderImpl {...restProps}>
        {children}
      </ColorSchemeProviderImpl>
    </DeviceColorSchemeProvider>
  )
}

export default ColorSchemeProvider
