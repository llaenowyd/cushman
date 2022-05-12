import React from 'react'

import classes from './Button.module.css'

console.warn('__INJECT__')

// Uses CSS Variables
//   --bg-control
//   --bg-control-disabled
//   --text-control
//   --text-control-disabled
//   --color-shadow

// TBD
// const Input = styled.input(({ disabled, theme }) => [
//   tw`
//     px-2
//     py-1
//     rounded
//     text-sm
//     uppercase
//     text-control
//     disabled:text-control-disabled
//     bg-control
//     disabled:bg-control-disabled
//     cursor-pointer
//     disabled:cursor-not-allowed
//     enabled:active:translate-x-px
//     enabled:active:translate-y-px
//     enabled:hover:contrast-125
//   `,
//   css`
//     box-shadow: 2px 2px 3px 0 var(--color-shadow);
//   `,
// ])

const Button: React.FC<{
  label: string
  onClick: () => void
  disabled?: boolean
}> = ({ label, onClick, disabled }) => (
  <input
    className={classes.input}
    type="button"
    value={label}
    onClick={onClick}
    disabled={disabled}
  />
)

export default Button
