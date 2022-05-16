import React, { useCallback, useMemo, useState } from 'react'
// import { action } from '@storybook/addon-actions' // tbd
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DarkModeToggle } from '@a110/rito'
import { ColorScheme } from '@a110/rito/dist/types/color_scheme'

import classes from './DarkModeToggleStories.module.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DarkModeToggle',
  component: DarkModeToggle,
} as ComponentMeta<typeof DarkModeToggle>

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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DarkModeToggle> = args => {
  const [deviceColorScheme, setDeviceColorScheme] =
    useState<ColorScheme>('no-preference')
  const [appColorScheme, setAppColorScheme] = useState<ColorScheme>('light')
  const [appFollowDeviceSetting, setAppFollowDeviceSetting] = useState<
    boolean | undefined
  >(false)

  const deviceValue = useMemo(
    () => colorSchemeToEmoji(deviceColorScheme),
    [deviceColorScheme]
  )

  const appValue = useMemo(
    () => colorSchemeToEmoji(appColorScheme),
    [appColorScheme]
  )

  const effectiveColorScheme = useMemo(
    () =>
      appFollowDeviceSetting && 'no-preference' !== deviceColorScheme
        ? deviceColorScheme
        : appColorScheme,
    [appFollowDeviceSetting, deviceColorScheme, appColorScheme]
  )

  const setEffectiveColorScheme: (cs: ColorScheme) => void = useCallback(
    (cs: ColorScheme): void => {
      if (appColorScheme !== cs) {
        setAppColorScheme(cs)
      }
      if (appFollowDeviceSetting) {
        setAppFollowDeviceSetting(false)
      }
    },
    [
      appColorScheme,
      setAppColorScheme,
      appFollowDeviceSetting,
      setAppFollowDeviceSetting,
    ]
  )

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
            <div className={classes.stateBoxItemLabel}>device</div>
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
                  {appFollowDeviceSetting ? 'Y' : 'N'}
                </div>
                <FlagSelect
                  flag={appFollowDeviceSetting}
                  setFlag={setAppFollowDeviceSetting}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkModeToggle
        colorScheme={effectiveColorScheme}
        setColorScheme={setEffectiveColorScheme}
        followDevice={appFollowDeviceSetting as boolean}
        setFollowDevice={setAppFollowDeviceSetting}
      />
    </div>
  )
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({})
Default.args = {}
