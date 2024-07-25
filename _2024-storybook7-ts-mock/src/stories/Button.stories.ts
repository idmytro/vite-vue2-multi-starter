import type { Meta, StoryObj } from '@storybook/vue'

// import { vi } from 'vitest'

import Button from './Button.vue'

// import { getLabel } from './getLabel'

// vi.mock('./getLabel', () => ({
//   getLabel: vi.fn(() => 'mocked value'),
// }))

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  // async beforeEach () {
  //   console.log('beforeEach')
  //   // 👇 Set the return value for the getUserFromSession function
  //   // getLabel.mockReturnValue('Mocked Label')
  // },
  render: (args, { argTypes }) => ({
    components: { Button },
    props: Object.keys(argTypes),
    template: '<Button v-bind="$props" />',
  }),
  args: {
    primary: true,
    size: 'large',
    // label: 'Button',
  },
}
