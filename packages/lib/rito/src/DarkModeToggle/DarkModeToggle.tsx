import React, { useMemo, useState } from 'react'

import { ColorScheme } from '../../types/color_scheme'
import { DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from '../constants'
import SlideIn from '../SlideIn'

import Lock from './Lock'
import Moon from './Moon'
import Sun from './Sun'
import Unlock from './Unlock'

import classes from './DarkModeToggle.module.css'

export type SetColorScheme = (cs: ColorScheme) => void
export type SetFollowDevice = (followDevice: boolean) => void

const DarkModeToggle: React.FC<{
  colorScheme: ColorScheme
  setColorScheme: SetColorScheme
  followDevice: boolean
  setFollowDevice: SetFollowDevice
}> = ({
  colorScheme, // tbd useColorScheme
  setColorScheme,
  followDevice,
  setFollowDevice,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const [onMouseEnter, onMouseLeave] = useMemo(
    () => [
      () => {
        setIsHovered(true)
      },
      () => {
        setIsHovered(false)
      },
    ],
    [setIsHovered]
  )

  const [LockIcon, onLockClick] = useMemo(
    () =>
      followDevice
        ? [Lock, () => setFollowDevice(false)]
        : [Unlock, () => setFollowDevice(true)],
    [followDevice, setFollowDevice]
  )

  const [ColorSchemeIcon, onColorSchemeClick] = useMemo(
    () =>
      DARK_COLOR_SCHEME === colorScheme
        ? [Moon, () => setColorScheme(LIGHT_COLOR_SCHEME)]
        : [Sun, () => setColorScheme(DARK_COLOR_SCHEME)],
    [colorScheme, setColorScheme]
  )

  return (
    <div
      className={classes.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <SlideIn hidden={!isHovered}>
        <LockIcon className={classes.icon} onClick={onLockClick} />
      </SlideIn>
      <ColorSchemeIcon className={classes.icon} onClick={onColorSchemeClick} />
    </div>
  )
}

export default DarkModeToggle
