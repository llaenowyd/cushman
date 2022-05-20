import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideIn } from '@a110/rito'

import styleClasses from './styles.module.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'rito/component/SlideIn',
  component: SlideIn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SlideIn>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultComponent: ComponentStory<typeof SlideIn> = args => (
  <div className={styleClasses.container}>
    <div>Note that the animation doesn't work on the Storybook doc page.</div>
    <div>
      Try canvas instead. C.f.{' '}
      <a href="https://stackoverflow.com/questions/72084953/storybook-animation-works-on-canvas-tab-but-not-in-doc-tab">
        Storybook - Animation works on Canvas tab but not in Doc tab
        [stackoverflow]
      </a>
    </div>
    <div className={styleClasses.widget}>
      <SlideIn {...args}>
        <div className={styleClasses.widgetPart}>One</div>
      </SlideIn>
      <div className={styleClasses.widgetPart}>Two</div>
    </div>
  </div>
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = DefaultComponent.bind({})
Default.args = {
  hidden: true,
}
