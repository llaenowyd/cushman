// cf https://blog.bitsrc.io/how-to-sync-your-react-app-with-the-system-color-scheme-78c0ad00074b

import { ColorScheme } from '../../../types'

import {
  ANY_COLOR_SCHEME,
  DARK_COLOR_SCHEME,
  LIGHT_COLOR_SCHEME,
} from '../../constants'

type MakeMatchMedia = () => MediaQueryList
const makeMakeMatchMedia =
  (colorScheme: ColorScheme): MakeMatchMedia =>
  () =>
    matchMedia(`(prefers-color-scheme: ${colorScheme})`)

type MediaQueryMaker = [ColorScheme, MakeMatchMedia]
const mediaQueryMakers: MediaQueryMaker[] = [
  LIGHT_COLOR_SCHEME,
  DARK_COLOR_SCHEME,
  ANY_COLOR_SCHEME,
].map(colorScheme => [colorScheme, makeMakeMatchMedia(colorScheme)])

export type ColorSchemeMatch = {
  colorScheme: ColorScheme
  query: MediaQueryList
}

export const getColorSchemeMatch: () => ColorSchemeMatch = (() => {
  type MediaQuery = [ColorScheme, MediaQueryList]
  const mediaQueries: MediaQuery[] = mediaQueryMakers.map(
    ([colorScheme, makeQuery]) => [colorScheme, makeQuery()]
  )

  return () => {
    for (let [colorScheme, query] of mediaQueries) {
      if (query.matches) {
        return { query, colorScheme }
      }
    }

    throw new Error('assert unreachable')
  }
})()
