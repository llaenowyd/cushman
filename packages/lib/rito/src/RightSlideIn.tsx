import React, { useMemo } from 'react'

import Transition, { TransitionState } from './Transition'

const DEFAULT_TIMEOUT = 250

const Animated: React.FC<{
  children: JSX.Element
  state: TransitionState
  timeout: number
}> = ({ children, state, timeout }) => {
  const style = useMemo(
    () => ({
      transform:
        'exit' === state.substring(0, 4)
          ? 'translateX(50%) scaleX(0)'
          : 'translateX(0) scaleX(1)',
      transition:
        'exit' === state.substring(0, 4)
          ? `transform ${timeout}ms ease-out`
          : `transform ${timeout}ms ease-in`,
    }),
    [state]
  )

  return <div style={style}>{children}</div>
}

const RightSlideIn: React.FC<{
  children: JSX.Element
  hidden: boolean
  timeout?: number
}> = ({ children, hidden, timeout }) => {
  const timeoutOrDefault = timeout ?? DEFAULT_TIMEOUT

  return (
    <Transition in={!hidden} timeout={timeoutOrDefault}>
      {state => (
        <Animated state={state} timeout={timeoutOrDefault}>
          {children}
        </Animated>
      )}
    </Transition>
  )
}

export default RightSlideIn
