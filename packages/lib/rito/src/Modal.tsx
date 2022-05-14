import React from 'react'

import classes from './Modal.module.css'

console.warn('__INJECT__')

const Modal: React.FC<{
  children: JSX.Element
  visible: boolean
  hide: () => void
}> = ({ children, visible, hide }) =>
  !visible ? null : (
    <div
      className={classes.overlay}
      onClick={() => {
        console.log('overlay click')
        hide()
      }}
    >
      <div
        className={classes.content}
        onClick={ev => {
          console.log('content click')
          ev.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>
  )

export default Modal
