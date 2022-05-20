import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  ANY_COLOR_SCHEME,
  ColorSchemeProvider,
  DarkModeToggle,
} from '@a110/rito'
import { ColorScheme } from '@a110/rito/types'

import { colorSchemeArgType } from '../../util'
import Vignette from './Vignette'
import * as examples from './examples'

type DarkModeToggleStoryProps = {
  mockDeviceColorScheme: ColorScheme
  appColorScheme: ColorScheme
  followDevice: boolean
}

const DarkModeToggleStory = (props: DarkModeToggleStoryProps) => {
  const mockDeviceColorScheme: ColorScheme = props.mockDeviceColorScheme

  const initialAppColorScheme: ColorScheme = props.appColorScheme
  const initialFollowDevice: boolean = props.followDevice

  const [appColorScheme, setAppColorScheme] = useState<ColorScheme>(
    initialAppColorScheme ?? ANY_COLOR_SCHEME
  )
  const [followDeviceColorScheme, setFollowDeviceColorScheme] = useState<
    boolean | undefined
  >(initialFollowDevice)

  return (
    <ColorSchemeProvider
      mockDeviceColorScheme={mockDeviceColorScheme}
      appColorSchemeState={{
        colorScheme: appColorScheme,
        setColorScheme: setAppColorScheme,
        followDevice: followDeviceColorScheme as boolean,
        setFollowDevice: setFollowDeviceColorScheme,
      }}
    >
      <Vignette
        appColorScheme={appColorScheme}
        setAppColorScheme={setAppColorScheme}
        followDeviceColorScheme={followDeviceColorScheme}
        setFollowDeviceColorScheme={setFollowDeviceColorScheme}
      />
    </ColorSchemeProvider>
  )
}

export default {
  title: 'rito/component/DarkModeToggle',
  component: DarkModeToggle,
  argTypes: {
    mockDeviceColorScheme: {
      ...colorSchemeArgType,
      description: 'fake device color scheme',
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
  mockDeviceColorScheme: 'dark',
  appColorScheme: 'light',
  followDevice: true,
}
Default.parameters = {
  docs: { source: { code: examples.defaultExample } },
}