import type { Meta, StoryObj } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Button from './Button.vue'

const meta: Meta<typeof Button> = { component: Button }
export default meta

type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (_args, { argTypes }) => ({
    components: { Button },
    props: Object.keys(argTypes),
    setup () {
      const clicked = ref(false)

      function handleClick () {
        clicked.value = true
        action('click')({})
      }

      return {
        clicked,
        handleClick,
      }
    },
    template: `
    <div>
      <Button
        v-bind="$props"
        @click="handleClick"
      />
      <p>Clicked? {{ clicked ? 'Yes' : 'No' }}</p>
    </div>
    `,
  }),
  args: {
    primary: true,
    label: 'Button',
    size: 'medium',
  },
}
