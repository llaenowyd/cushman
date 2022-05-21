import React from 'react'
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'
import {
  ColorSchemeProvider,
  DARK_COLOR_SCHEME,
  LIGHT_COLOR_SCHEME,
} from '@a110/rito'

const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode()

  return (
    <BaseContainer
      context={{
        ...context,
        storyById: id => {
          const storyContext = context.storyById(id)
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark ? themes.dark : themes.light,
              },
            },
          }
        },
      }}
    >
      <ColorSchemeProvider
        colorScheme={dark ? DARK_COLOR_SCHEME : LIGHT_COLOR_SCHEME}
      >
        {children}
      </ColorSchemeProvider>
    </BaseContainer>
  )
}

export default DocsContainer
