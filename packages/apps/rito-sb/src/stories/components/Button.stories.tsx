import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '@a110/rito'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'rito/component/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  label: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Button',
}
