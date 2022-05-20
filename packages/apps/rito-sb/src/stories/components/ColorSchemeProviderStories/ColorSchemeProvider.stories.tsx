import React, { useEffect, useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ColorSchemeProvider } from '@a110/rito'
import { ColorScheme, ColorSchemeState } from '@a110/rito/types'

import { colorSchemeArgType } from '../../util'

import Info from './Info'
import * as examples from './examples'

import styleClasses from './styles.module.css'

const noop = () => {}

const ColorSchemeProviderStory: React.FC<{
  mockDeviceColorScheme: ColorScheme
  injectAppColorSchemeState: boolean
  appColorScheme: ColorScheme
  appFollowDevice: boolean
  defaultColorScheme: 'dark' | 'light' | undefined
  supplyPaletteOverrides: boolean
}> = ({
  mockDeviceColorScheme,
  injectAppColorSchemeState,
  appColorScheme,
  appFollowDevice,
  defaultColorScheme,
  supplyPaletteOverrides,
}) => {
  const [appColorSchemeState, setAppColorSchemeState] =
    useState<ColorSchemeState>(() => ({
      colorScheme: appColorScheme,
      setColorScheme: noop,
      followDevice: appFollowDevice,
      setFollowDevice: noop,
    }))

  useEffect(() => {
    setAppColorSchemeState(prevAppColorSchemeState => ({
      ...prevAppColorSchemeState,
      colorScheme: appColorScheme,
    }))
  }, [appColorScheme])

  useEffect(() => {
    setAppColorSchemeState(prevAppColorSchemeState => ({
      ...prevAppColorSchemeState,
      followDevice: appFollowDevice,
    }))
  }, [appFollowDevice])

  const [darkClassName, lightClassName] = useMemo(
    () =>
      supplyPaletteOverrides
        ? [styleClasses['story-dark'], styleClasses['story-light']]
        : [],
    [supplyPaletteOverrides]
  )

  return (
    <ColorSchemeProvider
      mockDeviceColorScheme={mockDeviceColorScheme}
      appColorSchemeState={
        injectAppColorSchemeState ? appColorSchemeState : undefined
      }
      darkClassName={darkClassName}
      lightClassName={lightClassName}
      defaultColorScheme={defaultColorScheme}
    >
      <Info />
    </ColorSchemeProvider>
  )
}

export default {
  title: 'rito/component/ColorSchemeProvider',
  component: ColorSchemeProvider,
  argTypes: {
    mockDeviceColorScheme: {
      ...colorSchemeArgType,
      description: 'mock device color scheme',
    },
    injectAppColorSchemeState: {
      control: { type: 'boolean' },
      description: 'whether to supply app state',
    },
    appColorScheme: {
      ...colorSchemeArgType,
      description: 'optional app color scheme',
    },
    appFollowDevice: {
      control: { type: 'boolean' },
      description: 'optional app follow-device',
    },
    defaultColorScheme: {
      control: {
        type: 'select',
        labels: {
          undefined: 'not supplied',
          dark: 'dark',
          light: 'light',
        },
      },
      options: [undefined, 'dark', 'light'],
      description: 'override built-in default color scheme',
    },
    supplyPaletteOverrides: {
      control: { type: 'boolean' },
      description: 'whether to supply custom palettes',
    },
  },
} as ComponentMeta<typeof ColorSchemeProviderStory>

const Template: ComponentStory<typeof ColorSchemeProviderStory> = args => (
  <ColorSchemeProviderStory {...args} />
)

export const Default = Template.bind({})
Default.args = {
  mockDeviceColorScheme: 'light',
  injectAppColorSchemeState: false,
  appColorScheme: 'light',
  appFollowDevice: true,
  defaultColorScheme: undefined,
  supplyPaletteOverrides: false,
}
Default.parameters = {
  docs: { source: { code: examples.defaultExample } },
}

export const InjectedAppState = Template.bind({})
InjectedAppState.args = {
  mockDeviceColorScheme: 'light',
  injectAppColorSchemeState: true,
  appColorScheme: 'light',
  appFollowDevice: true,
  defaultColorScheme: undefined,
  supplyPaletteOverrides: false,
}
InjectedAppState.parameters = {
  docs: { source: { code: examples.injectedAppState } },
}

export const CustomPalettes = Template.bind({})
CustomPalettes.args = {
  mockDeviceColorScheme: 'light',
  injectAppColorSchemeState: false,
  appColorScheme: 'light',
  appFollowDevice: true,
  defaultColorScheme: undefined,
  supplyPaletteOverrides: true,
}
CustomPalettes.parameters = {
  docs: { source: { code: examples.customPalettes } },
}
