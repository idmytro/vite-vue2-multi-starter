import type {
  Meta,
  StoryObj,
} from '@storybook/vue'

import createAsyncCallback from '@loki/create-async-callback'
import { userEvent } from '@storybook/testing-library'
import { enableEventsForLoki } from '../../testing/loki'

import TooltipDemo from './TooltipDemo.vue'

async function doClick ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> {
  const button = canvasElement.querySelector('.el-button')
  if (!button)
    return

  await enableEventsForLoki()

  try {
    await userEvent.click(button)
  }
  finally {
    createAsyncCallback()()
  }
}

const meta: Meta<typeof TooltipDemo> = { component: TooltipDemo }
export default meta

type Story = StoryObj<typeof TooltipDemo>

const Template: Story = {
  render: (_, { argTypes }) => ({
    components: { TooltipDemo },
    props: Object.keys(argTypes),
    template: `
      <TooltipDemo />
    `,
  }),
  play: doClick,
}

export const Default: Story = {
  ...Template,
}
