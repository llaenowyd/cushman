import React, { useMemo, useState } from 'react'
import { Button } from '@a110/rito'

import classes from './styles.module.css'

// prettier-ignore
const PlusMinusControl: React.FC<{
  setIntegerState: (f: (n: number) => number) => void
}> = ({ setIntegerState }) => (([incr, decr]) => (
  <>
    <Button label="Increment" onClick={incr} />
    <Button label="Decrement" onClick={decr} />
  </>
))(
  useMemo(
    () => [
      () => setIntegerState(i => 1 + i),
      () => setIntegerState(i => -1 + i),
    ],
    [setIntegerState]
  )
)

const DefaultExample: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)

  return (
    <div className={classes.storyBox}>
      <div className={classes.basicCol}>
        <PlusMinusControl setIntegerState={setCounter} />
      </div>
      <div className={classes.counterContainer}>
        <div className={classes.counter}>
          <div className={classes.counterLabel}>Counter:</div>
          <div className={classes.counterValue}>{counter}</div>
        </div>
      </div>
    </div>
  )
}

export default DefaultExample
