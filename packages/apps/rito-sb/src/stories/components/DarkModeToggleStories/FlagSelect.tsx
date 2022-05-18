import React, { useCallback, useMemo } from 'react'

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

export default FlagSelect
