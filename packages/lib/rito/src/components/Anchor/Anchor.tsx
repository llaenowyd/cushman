import React from 'react'

import styleClasses from './styles.module.css'

const Anchor: React.FC<{
  href: string
  children: JSX.Element
}> = (props: React.HTMLProps<HTMLAnchorElement>) => {
  const { children, className, ...restProps } = props
  const combinedClassName = className
    ? `${className} ${styleClasses.anchor}`
    : styleClasses.anchor
  return (
    <a className={combinedClassName} {...restProps}>
      {children}
    </a>
  )
}

export default Anchor
