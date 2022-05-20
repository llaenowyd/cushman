import React, { useEffect, useRef, useState } from 'react'

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

const useForceRender = (): (() => void) => {
  const [, setState] = useState<number>(0)

  return () => {
    setState((prevState: number) => 1 + prevState)
  }
}

const ColorSchemeProviderImpl: React.FC<{
  appColorSchemeState?: ColorSchemeState
  className?: string
  darkClassName?: string
  lightClassName?: string
  defaultColorScheme?: ActualColorScheme
  children: JSX.Element
}> = ({
  appColorSchemeState,
  className,
  darkClassName = 'rito-dark',
  lightClassName = 'rito-light',
  defaultColorScheme,
  children,
}) => {
  // const anchorElRef = useRef<HTMLElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const addedClassNameRef = useRef<string>()

  const forceRender = useForceRender()

  const contextValue = useColorSchemeStateCombine(
    appColorSchemeState,
    defaultColorScheme
  )

  const colorScheme = contextValue.colorScheme

  useEffect(() => {
    const div = divRef.current

    if (!div) {
      return
    }

    const classNameToAdd =
      DARK_COLOR_SCHEME === colorScheme
        ? darkClassName
        : LIGHT_COLOR_SCHEME === colorScheme
        ? lightClassName
        : undefined

    const addedClassName = addedClassNameRef.current

    const classNameToRemove =
      !!addedClassName && addedClassName !== classNameToAdd
        ? addedClassName
        : undefined

    if (classNameToAdd) {
      div.classList.add(classNameToAdd)
    }

    if (classNameToRemove) {
      div.classList.remove(classNameToRemove)
    }

    if (classNameToAdd || classNameToRemove) {
      addedClassNameRef.current = classNameToAdd
      forceRender()
    }
  }, [colorScheme, lightClassName, darkClassName])

  return (
    <ColorSchemeContext.Provider value={contextValue}>
      <div ref={divRef} className={className}>
        {children}
      </div>
    </ColorSchemeContext.Provider>
  )
}

const ColorSchemeProvider: React.FC<{
  mockDeviceColorScheme?: ColorScheme
  appColorSchemeState?: ColorSchemeState
  className?: string
  darkClassName?: string
  lightClassName?: string
  defaultColorScheme?: ActualColorScheme
  children: JSX.Element
}> = props => {
  const { children, mockDeviceColorScheme, ...restProps } = props

  return (
    <DeviceColorSchemeProvider mockValue={mockDeviceColorScheme}>
      <ColorSchemeProviderImpl {...restProps}>
        {children}
      </ColorSchemeProviderImpl>
    </DeviceColorSchemeProvider>
  )
}

export default ColorSchemeProvider
