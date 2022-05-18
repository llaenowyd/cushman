import React, { useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  ANY_COLOR_SCHEME,
  ColorSchemeProvider,
  DarkModeToggle,
  DeviceColorSchemeContext,
} from '@a110/rito'
import { ColorScheme } from '@a110/rito/dist/types/color_scheme'

import Vignette from './Vignette'

const FakeDeviceColorSchemeProvider: React.FC<{
  deviceColorScheme: ColorScheme
  children: JSX.Element
}> = ({ deviceColorScheme, children }) => (
  <DeviceColorSchemeContext.Provider value={deviceColorScheme}>
    {children}
  </DeviceColorSchemeContext.Provider>
)

type DarkModeToggleStoryProps = {
  appColorScheme: ColorScheme
  deviceColorScheme: ColorScheme
  followDevice: boolean
}

const DarkModeToggleStory = (props: DarkModeToggleStoryProps) => {
  const initialAppColorScheme: ColorScheme = props.appColorScheme
  const initialDeviceColorScheme: ColorScheme = props.deviceColorScheme
  const initialFollowDevice: boolean = props.followDevice

  const [deviceColorScheme, setDeviceColorScheme] = useState<ColorScheme>(
    initialDeviceColorScheme ?? ANY_COLOR_SCHEME
  )
  const [appColorScheme, setAppColorScheme] = useState<ColorScheme>(
    initialAppColorScheme ?? ANY_COLOR_SCHEME
  )
  const [followDeviceColorScheme, setFollowDeviceColorScheme] = useState<
    boolean | undefined
  >(initialFollowDevice)

  useEffect(() => {
    if (initialAppColorScheme) {
      setAppColorScheme(initialAppColorScheme)
    }
  }, [initialAppColorScheme, setAppColorScheme])

  useEffect(() => {
    if (initialDeviceColorScheme) {
      setDeviceColorScheme(initialDeviceColorScheme)
    }
  }, [initialDeviceColorScheme, setDeviceColorScheme])

  useEffect(() => {
    if (null != initialFollowDevice) {
      setFollowDeviceColorScheme(initialFollowDevice)
    }
  }, [initialFollowDevice, setFollowDeviceColorScheme])

  return (
    <FakeDeviceColorSchemeProvider deviceColorScheme={deviceColorScheme}>
      <ColorSchemeProvider
        appColorSchemeState={{
          colorScheme: appColorScheme,
          setColorScheme: setAppColorScheme,
          followDevice: followDeviceColorScheme as boolean,
          setFollowDevice: setFollowDeviceColorScheme,
        }}
      >
        <Vignette
          setDeviceColorScheme={setDeviceColorScheme}
          appColorScheme={appColorScheme}
          setAppColorScheme={setAppColorScheme}
          followDeviceColorScheme={followDeviceColorScheme}
          setFollowDeviceColorScheme={setFollowDeviceColorScheme}
        />
      </ColorSchemeProvider>
    </FakeDeviceColorSchemeProvider>
  )
}

const colorSchemeArgType = {
  options: ['dark', 'light', 'no-preference'],
  control: { type: 'select' },
}

export default {
  title: 'rito/component/DarkModeToggle',
  component: DarkModeToggle,
  argTypes: {
    deviceColorScheme: {
      ...colorSchemeArgType,
      description: 'device color scheme, obtained via media query',
    },
    appColorScheme: {
      ...colorSchemeArgType,
      description: 'app color scheme setting, e.g. user preference',
    },
    followDevice: {
      control: 'boolean',
      description: 'app setting, whether to sync color scheme with device',
    },
  },
} as ComponentMeta<typeof DarkModeToggleStory>

const Template: ComponentStory<typeof DarkModeToggleStory> = args => (
  <DarkModeToggleStory {...args} />
)

export const Default = Template.bind({})
Default.args = {
  deviceColorScheme: 'dark',
  appColorScheme: 'light',
  followDevice: true,
}
