import React, { ReactNode } from 'react'
import { ColorSchemeProvider } from '@a110/rito'

import classes from './ConstColorScheme.module.css'

const styledDiv =
  (className: string): React.FC<{ children: ReactNode }> =>
  ({ children }) =>
    <div className={className}>{children}</div>

const Container = styledDiv(classes.container)
const Paragraph = styledDiv(classes.paragraph)

const ConstColorScheme: React.FC = () => (
  <Container>
    <Paragraph>This text inherits the existing color scheme.</Paragraph>
    <ColorSchemeProvider colorScheme="light">
      <Paragraph>
        This text will always be in the <code>light</code> color scheme.
      </Paragraph>
    </ColorSchemeProvider>
  </Container>
)

export default ConstColorScheme
