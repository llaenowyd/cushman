import React, { useCallback } from 'react'

import { ColorScheme } from '@a110/rito/types'

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

export default ColorSchemeSelect
