import React, { useCallback } from 'react'

import { ColorScheme } from '@a110/rito/types'

const ColorSchemeSelect: React.FC<{
  colorScheme: ColorScheme
  setColorScheme: (cs: ColorScheme) => void
  disabled?: boolean
}> = ({ colorScheme, setColorScheme, disabled = false }) => {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLSelectElement>) => {
    setColorScheme(evt.target.value as ColorScheme)
  }, [])

  return (
    <select value={colorScheme} onChange={onChange} disabled={disabled}>
      <option value="light">light</option>
      <option value="dark">dark</option>
      <option value="no-preference">no-preference</option>
    </select>
  )
}

export default ColorSchemeSelect
