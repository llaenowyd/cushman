import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// TBD TBD TBD
import { Button } from './Button'
import { Button as RitoButton } from '@a110/rito'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: RitoButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RitoButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RitoButton> = args => (
  <RitoButton {...args} />
)

// export const Primary = Template.bind({})
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// }

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  // size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  // size: 'small',
  label: 'Button',
}
