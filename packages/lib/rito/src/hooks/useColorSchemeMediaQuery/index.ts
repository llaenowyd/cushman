// cf https://blog.bitsrc.io/how-to-sync-your-react-app-with-the-system-color-scheme-78c0ad00074b

import { useCallback, useEffect, useRef, useState } from 'react'

import { ColorScheme } from '../../../types'

import { ColorSchemeMatch, getColorSchemeMatch } from './util'

const useColorSchemeMediaQuery = (mockDeviceColorScheme?: ColorScheme) => {
  const isMounted = useRef<boolean>(false)
  const colorSchemeMatch = useRef<ColorSchemeMatch>()

  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    colorSchemeMatch.current = getColorSchemeMatch()
    return colorSchemeMatch.current.colorScheme
  })

  const schemeChangeHandler = useCallback((evt: MediaQueryListEvent) => {
    if (!evt.matches) {
      colorSchemeMatch.current?.query.removeEventListener(
        'change',
        schemeChangeHandler
      )

      colorSchemeMatch.current = getColorSchemeMatch()

      const { query, colorScheme: matchColorScheme } = colorSchemeMatch.current

      if (isMounted.current) {
        setColorScheme(matchColorScheme)
      }

      query.addEventListener('change', schemeChangeHandler)
    }
  }, [])

  useEffect(() => {
    colorSchemeMatch.current = getColorSchemeMatch()
    const { query } = colorSchemeMatch.current

    query.addEventListener('change', schemeChangeHandler)

    isMounted.current = true

    return () => {
      const query = colorSchemeMatch.current?.query
      query?.removeEventListener('change', schemeChangeHandler)
      isMounted.current = false
    }
  }, [schemeChangeHandler])

  return mockDeviceColorScheme ?? colorScheme
}

export default useColorSchemeMediaQuery
