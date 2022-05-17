import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  ANY_COLOR_SCHEME,
  ColorSchemeProvider,
  DarkModeToggle,
  DeviceColorSchemeContext,
  useColorScheme,
  useDeviceColorScheme,
  useSetColorScheme,
} from '@a110/rito'
import { ColorScheme } from '@a110/rito/dist/types/color_scheme'

import classes from './DarkModeToggleStories.module.css'

const FakeDeviceColorSchemeProvider: React.FC<{
  deviceColorScheme: ColorScheme
  children: JSX.Element
}> = ({ deviceColorScheme, children }) => (
  <DeviceColorSchemeContext.Provider value={deviceColorScheme}>
    {children}
  </DeviceColorSchemeContext.Provider>
)

const colorSchemeToEmoji = (colorScheme: ColorScheme): string =>
  'dark' === colorScheme ? '🌜' : 'light' === colorScheme ? '🌞' : '🤷‍♂️'

const ColorSchemeSelect: React.FC<{
  colorScheme: ColorScheme
  setColorScheme: (cs: ColorScheme) => void
}> = ({ colorScheme, setColorScheme }) => {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLSelectElement>) => {
    setColorScheme(evt.target.value as ColorScheme)
  }, [])

  return (
    <select value={colorScheme} onChange={onChange}>
      <option value="light">light</option>
      <option value="dark">dark</option>
      <option value="no-preference">no-preference</option>
    </select>
  )
}

const FLAG_FALSE = 'N'
const FLAG_TRUE = 'Y'
const FLAG_UNDEF = ''

const FlagSelect: React.FC<{
  flag?: boolean
  setFlag: (flag?: boolean) => void
}> = ({ flag, setFlag }) => {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue: string = evt.target.value

    setFlag(
      FLAG_TRUE === selectValue
        ? true
        : FLAG_FALSE === selectValue
        ? false
        : undefined
    )
  }, [])

  const selectValue = useMemo(
    () => (flag ? FLAG_TRUE : false === flag ? FLAG_FALSE : FLAG_UNDEF),
    [flag]
  )

  return (
    <select value={selectValue} onChange={onChange}>
      <option value={FLAG_TRUE}>yes</option>
      <option value={FLAG_FALSE}>no</option>
      <option value={FLAG_UNDEF}>not set</option>
    </select>
  )
}

const Vignette: React.FC<{
  setDeviceColorScheme: (colorScheme: ColorScheme) => void
  appColorScheme: ColorScheme
  setAppColorScheme: (colorScheme: ColorScheme) => void
  followDeviceColorScheme: boolean | undefined
  setFollowDeviceColorScheme: (fd: boolean | undefined) => void
}> = ({
  setDeviceColorScheme,
  appColorScheme,
  setAppColorScheme,
  followDeviceColorScheme,
  setFollowDeviceColorScheme,
}) => {
  const deviceColorScheme = useDeviceColorScheme()
  const colorScheme = useColorScheme()

  const deviceValue = useMemo(
    () => colorSchemeToEmoji(deviceColorScheme),
    [deviceColorScheme]
  )

  const appValue = useMemo(
    () => colorSchemeToEmoji(appColorScheme),
    [appColorScheme]
  )

  const setColorScheme = useSetColorScheme({
    appColorScheme,
    setAppColorScheme,
    followDeviceColorScheme,
    setFollowDeviceColorScheme,
  })

  return (
    <div className={classes.container}>
      <div className={classes.stateBox}>
        <div className={classes.stateBoxHeading}>
          State Held External to DarkModeToggle
        </div>
        <div className={classes.stateBoxSubheading}>
          - Device
          <div className={classes.stateBoxSubheading}>- Browser</div>
          <div className={classes.stateBoxSubheading}>- OS Preferences</div>
        </div>
        <div className={classes.stateBoxSubheading}>
          - App
          <div className={classes.stateBoxSubheading}>
            - Cookie/LocalStorage/IndexedDB
          </div>
          <div className={classes.stateBoxSubheading}>- Context/State</div>
          <div className={classes.stateBoxSubheading}>- Redux/MobX/Recoil</div>
        </div>
        <div className={classes.stateBoxContent}>
          <div className={classes.stateBoxItem}>
            <div className={classes.stateBoxItemLabel}>fake device</div>
            <div className={classes.stateBoxContent}>
              <div className={classes.stateBoxItem}>
                <div className={classes.stateBoxItemLabel}>color scheme</div>
                <div className={classes.stateBoxItemValue}>{deviceValue}</div>
                <ColorSchemeSelect
                  colorScheme={deviceColorScheme}
                  setColorScheme={setDeviceColorScheme}
                />
              </div>
            </div>
          </div>
          <div className={classes.stateBoxItem}>
            <div className={classes.stateBoxItemLabel}>app</div>
            <div className={classes.stateBoxContent}>
              <div className={classes.stateBoxItem}>
                <div className={classes.stateBoxItemLabel}>color scheme</div>
                <div className={classes.stateBoxItemValue}>{appValue}</div>
                <ColorSchemeSelect
                  colorScheme={appColorScheme}
                  setColorScheme={setAppColorScheme}
                />
              </div>
              <div className={classes.stateBoxItem}>
                <div className={classes.stateBoxItemLabel}>follow device?</div>
                <div className={classes.stateBoxItemValue}>
                  {followDeviceColorScheme ? 'Y' : 'N'}
                </div>
                <FlagSelect
                  flag={followDeviceColorScheme}
                  setFlag={setFollowDeviceColorScheme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.featureCard}>
        <DarkModeToggle
          colorScheme={colorScheme}
          setColorScheme={setColorScheme}
          followDevice={followDeviceColorScheme as boolean}
          setFollowDevice={setFollowDeviceColorScheme}
        />
      </div>
    </div>
  )
}

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
    initialAppColorScheme
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
        appColorScheme={appColorScheme}
        setAppColorScheme={setAppColorScheme}
        followDeviceColorScheme={followDeviceColorScheme as boolean}
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
