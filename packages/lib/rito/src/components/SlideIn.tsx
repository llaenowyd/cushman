import React, { useMemo } from 'react'

import Transition, { TransitionState } from './Transition'

import classes from './SlideIn.module.css'

const DEFAULT_TIMEOUT = 250

const Viewport: React.FC<{
  children: JSX.Element
}> = ({ children }) => <div className={classes.viewport}>{children}</div>

const Animated: React.FC<{
  children: JSX.Element
  state: TransitionState
  timeout: number
}> = ({ children, state, timeout }) => {
  const isExit = useMemo(() => 'exit' === state.substring(0, 4), [state])

  const transitionStyle = useMemo(
    () => ({
      transition: isExit
        ? `transform ${timeout}ms ease-out`
        : `transform ${timeout}ms ease-in`,
    }),
    [isExit, timeout]
  )

  return (
    <div
      className={isExit ? classes.shiftedRight : classes.unshifted}
      style={transitionStyle}
    >
      {children}
    </div>
  )
}

const SlideIn: React.FC<{
  children: JSX.Element
  hidden: boolean
  timeout?: number
}> = ({ children, hidden, timeout }) => {
  const timeoutOrDefault = timeout ?? DEFAULT_TIMEOUT

  return (
    <Transition in={!hidden} timeout={timeoutOrDefault}>
      {state => (
        <Viewport>
          <Animated state={state} timeout={timeoutOrDefault}>
            {children}
          </Animated>
        </Viewport>
      )}
    </Transition>
  )
}

export default SlideIn
