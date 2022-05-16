import React from 'react'

import classes from './Button.module.css'

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
