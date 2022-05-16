import React from 'react'

import classes from './Modal.module.css'

const Modal: React.FC<{
  children: JSX.Element
  visible: boolean
  hide: () => void
}> = ({ children, visible, hide }) =>
  visible ? (
    <div className={classes.overlay} onClick={hide}>
      <div
        className={classes.content}
        onClick={ev => {
          ev.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>
  ) : null

export default Modal
