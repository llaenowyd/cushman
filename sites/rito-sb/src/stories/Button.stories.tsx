import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// TBD TBD TBD
import { Button } from '@a110/rito'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  onClick: () => {},
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Button',
  onClick: () => {},
}

export const Small = Template.bind({})
Small.args = {
  label: 'Button',
  onClick: () => {},
}
