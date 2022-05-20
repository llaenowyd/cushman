import React from 'react'

import styleClasses from './styles.module.css'

// tbd move to regular mdx and revise
const Info: React.FC = () => {
  return (
    <div className={styleClasses.container}>
      <div>
        ColorSchemeProvider can optionally be injected with application color
        scheme. The application setting may be different than the device
        setting.
      </div>
      <div>
        When the application color scheme is not supplied, ColorSchemeProvider
        just defers to the device color scheme.
      </div>
      <div>
        ColorSchemeProvider is also responsible for adding or removing a style
        class from the document root element, that in turn sets a number of CSS
        variables to a dark or light tone.
      </div>
      <div>
        The built-in default color scheme is light. The application may supply a
        different default color scheme, regardless whether it injects the
        application color scheme state.
      </div>
    </div>
  )
}

export default Info
