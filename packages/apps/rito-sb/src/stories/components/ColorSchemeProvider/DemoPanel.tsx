import React from 'react'

import { Button } from '@a110/rito'

import classes from './DemoPanel.module.css'

const noOp = () => {}

const DemoPanel: React.FC<{
  className?: string
  label: string
}> = ({ className, label }) => {
  return (
    <div className={[classes.container, className].flat().join(' ')}>
      <div className={classes.containerTitle}>secondary</div>
      <div className={classes.subContainer}>
        <div className={classes.containerTitle}>primary</div>
        <div className={classes.buttonRow}>
          <Button label={label} onClick={noOp} />
        </div>
      </div>
    </div>
  )
}

export default DemoPanel
