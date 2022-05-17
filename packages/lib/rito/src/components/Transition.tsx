import React, { useCallback, useEffect, useRef, useState } from 'react'

export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited'

const Transition: React.FC<{
  children: (state: TransitionState) => JSX.Element
  in: boolean
  timeout: number
}> = props => {
  const timeout = props.timeout
  const timeoutRef = useRef<any>()

  const [state, setState] = useState<TransitionState>()

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  useEffect(() => {
    if (null == state) {
      setState(props.in ? 'entered' : 'exited')
    } else {
      clearTimeoutRef()

      timeoutRef.current = setTimeout(() => {
        setState(props.in ? 'entered' : 'exited')
      }, timeout)

      setState(props.in ? 'entering' : 'exiting')

      return clearTimeoutRef
    }
  }, [props.in])

  return <>{state ? props.children(state) : null}</>
}

export default Transition
