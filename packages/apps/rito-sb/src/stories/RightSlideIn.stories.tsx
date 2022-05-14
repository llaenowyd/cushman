import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RightSlideIn } from '@a110/rito'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RightSlideIn',
  component: RightSlideIn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof RightSlideIn>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultComponent: ComponentStory<typeof RightSlideIn> = args => (
  <div
    style={{
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      display: 'flex',
      fontSize: '200%',
      fontWeight: 600,
      padding: '0.5rem',
      gap: '0.5rem',
    }}
  >
    <RightSlideIn {...args}>
      <div
        style={{
          backgroundColor: 'var(--bg-secondary)',
        }}
      >
        One
      </div>
    </RightSlideIn>
    <div
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      Two
    </div>
  </div>
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = DefaultComponent.bind({})
Default.args = {
  hidden: true,
}
