import type {
  Meta,
  StoryObj,
} from '@storybook/vue'

import createAsyncCallback from '@loki/create-async-callback'
import { userEvent } from '@storybook/testing-library'
import { enableEventsForLoki } from '../../testing/loki'
import ButtonWithTooltip from './ButtonWithTooltip.vue'

async function doClick ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> {
  const button = canvasElement.querySelector('#tooltip-target-1')
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

const meta: Meta<typeof ButtonWithTooltip> = { component: ButtonWithTooltip }
export default meta

type Story = StoryObj<typeof ButtonWithTooltip>

const Template: Story = {
  render: (_, { argTypes }) => ({
    components: { ButtonWithTooltip },
    props: Object.keys(argTypes),
    template: `
      <ButtonWithTooltip style="padding-top: 100px;" />
    `,
  }),
}

export const Default: Story = {
  ...Template,
  play: doClick,
}
