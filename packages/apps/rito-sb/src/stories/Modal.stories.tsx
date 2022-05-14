import React, { useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, Modal } from '@a110/rito'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultComponent: ComponentStory<typeof Modal> = args => {
  const [open, setOpen] = useState<boolean>(false)

  const [show, hide] = useMemo(
    () => [() => setOpen(true), () => setOpen(false)],
    []
  )

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        display: 'flex',
        padding: '0.5rem',
        gap: '0.5rem',
      }}
    >
      <Button label="Click to open Modal Dialog" onClick={show} />
      <Modal visible={open} hide={hide}>
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-secondary)',
            fontSize: '200%',
            fontWeight: 600,
            padding: '1rem',
          }}
        >
          Modal Dialog
        </div>
      </Modal>
    </div>
  )
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = DefaultComponent.bind({})
Default.args = {}
