import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideIn } from '@a110/rito'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'rito/component/SlideIn',
  component: SlideIn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SlideIn>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultComponent: ComponentStory<typeof SlideIn> = args => (
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
    <SlideIn {...args}>
      <div
        style={{
          backgroundColor: 'var(--bg-secondary)',
        }}
      >
        One
      </div>
    </SlideIn>
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
